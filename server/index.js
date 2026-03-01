require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const Message = require("./models/Message");

const app = express();
app.use(express.json());
app.use(cors());

// Use provided MONGO_URI or fall back to a sensible local default for dev
const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/learntech";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err.message));

app.get("/", (req, res) => res.json({ ok: true }));

// Signup
app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ error: "Missing fields" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ error: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({ username, email, password: hash });
    await user.save();

    // create a welcome message for the new user
    try {
      const msg = new Message({ email: user.email, subject: "Welcome to LearnTech", body: `Welcome ${user.username}! Your account has been created.` });
      await msg.save();
    } catch (e) {
      console.error("Failed to create welcome message:", e.message);
    }

    // store minimal safe data
    res.json({ username: user.username, email: user.email });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

// Get messages for a user
app.get('/api/messages', async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ error: 'Missing email' });

    const msgs = await Message.find({ email }).sort({ createdAt: -1 });
    res.json(msgs.map(m => ({ subject: m.subject, body: m.body, createdAt: m.createdAt })));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing fields" });

    // support fixed admin credential
    if (email === "admin@learntech.com" && password === "123456") {
      return res.json({ username: "admin", email: "admin@learntech.com" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    res.json({ username: user.username, email: user.email });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

// Compile and Run Code
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

app.post("/api/compile", async (req, res) => {
  try {
    const { language, code } = req.body;
    if (!language || !code) {
      return res.status(400).json({ error: "Language and code are required" });
    }

    const runDir = path.join(__dirname, "runs");
    if (!fs.existsSync(runDir)) {
      fs.mkdirSync(runDir);
    }

    const id = crypto.randomBytes(4).toString("hex");

    if (language === 'python') {
      const filename = path.join(runDir, `script_${id}.py`);
      fs.writeFileSync(filename, code);
      exec(`python "${filename}"`, { timeout: 5000 }, (error, stdout, stderr) => {
        try { fs.unlinkSync(filename); } catch (e) { }
        if (error) {
          return res.json({ output: stderr || error.message });
        }
        return res.json({ output: stdout });
      });
    } else if (language === 'java') {
      const runFolder = path.join(runDir, `java_${id}`);
      fs.mkdirSync(runFolder);
      const filename = path.join(runFolder, "Main.java");

      // Ensure the class name is Main and it's public
      let safeCode = code;
      if (!safeCode.includes("class Main")) {
        safeCode = safeCode.replace(/public\s+class\s+[^{\s]+/g, "public class Main");
      }
      fs.writeFileSync(filename, safeCode);

      exec(`javac "${filename}" && java -cp "${runFolder}" Main`, { timeout: 7000 }, (error, stdout, stderr) => {
        try {
          fs.unlinkSync(filename);
          const classFile = path.join(runFolder, "Main.class");
          if (fs.existsSync(classFile)) fs.unlinkSync(classFile);
          fs.rmdirSync(runFolder);
        } catch (e) { }

        if (error) {
          return res.json({ output: stderr || error.message });
        }
        return res.json({ output: stdout });
      });
    } else {
      return res.status(400).json({ error: "Unsupported language" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
