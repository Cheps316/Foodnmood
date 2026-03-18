const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ✅ Middleware
// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:5173",
      "https://foodnmood-one.vercel.app",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

// Explicit OPTIONS
// app.options("*", cors());

app.use(express.json());

// ✅ Test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// ✅ Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: "gmail", // more stable than smtp config
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify transporter (THIS TELLS IF EMAIL WILL WORK)
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email config error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

// =======================
// CONTACT ROUTE
// =======================
app.post("/api/contact", async (req, res) => {
  console.log("📩 Contact request received:", req.body);

  const { name, email, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Food n Mood" <${process.env.EMAIL_USER}>`,
      to: process.env.YOUR_EMAIL,
      subject: `New Contact from ${name}`,
      html: `
        <h2>Contact Form</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✅ Email sent:", info.response);

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Contact error:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// =======================
// RESERVE ROUTE
// =======================
app.post("/api/reserve", async (req, res) => {
  console.log("📅 Reservation request:", req.body);

  const { name, email, phone, guests, date, time, request } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Food n Mood" <${process.env.EMAIL_USER}>`,
      to: process.env.YOUR_EMAIL,
      subject: `Reservation: ${name}`,
      html: `
        <h2>Reservation</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Guests:</b> ${guests}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Request:</b> ${request || "None"}</p>
      `,
    });

    console.log("✅ Reservation email sent:", info.response);

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Reservation error:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// ✅ Start server

app.listen(4000, "0.0.0.0", () => {
  console.log("🚀 Server running on http://localhost:4000");
});

// Vercel serverless export + local dev
// if (process.env.VERCEL || !module.parent) {
//   app.listen(4000, "0.0.0.0", () => {
//     console.log("🚀 Server running on http://localhost:4000");
//   });
// } else {
//   module.exports = app;
// }
