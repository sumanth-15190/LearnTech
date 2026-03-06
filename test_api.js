const fetch = require('node-fetch');
async function test() {
    const res = await fetch("https://learntech-backend-30xu.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "testuser", email: "testuser2@example.com", password: "password123" })
    });
    const text = await res.text();
    console.log("STATUS:", res.status);
    console.log("RESPONSE:", text);
}
test();
