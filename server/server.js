const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Accept self-signed certs
  },
});

// Verify mail connection with better error logging
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response,
    });
    console.log("📧 Email configuration:", {
      host: "smtp.gmail.com",
      port: 587,
      user: process.env.EMAIL_USER?.substring(0, 3) + "***", // Log partial email for debugging
      hasPass: !!process.env.EMAIL_PASS,
    });
  } else {
    console.log("✅ SMTP Server Ready");
  }
});

// Mail sending endpoint
app.post("/api/send-email", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    course,
    previousEducation,
    message,
  } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "Info@skyeducationltd.com",
      subject: `Course Enrollment: ${course}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Course Enrollment</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Previous Education:</strong> ${
            previousEducation || "Not provided"
          }</p>
          <p><strong>Message:</strong> ${message || "No message"}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully");
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
