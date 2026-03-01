const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    subject: { type: String },
    body: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
