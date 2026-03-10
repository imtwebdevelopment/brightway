require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));

// ==========================
// BREVO SMTP CONFIG
// ==========================

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
  requireTLS: true,
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000
});

// SMTP connection test
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready");
  }
});

// ==========================
// HEALTH CHECK
// ==========================

app.get("/", (req, res) => {
  res.send("Backend running");
});

// ==========================
// SEND OTP TO CLIENT
// ==========================

app.post("/send-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const mailOptions = {
      from: '"Brightways KYC" <imtwebdevelopment@gmail.com>',
      to: email,
      subject: "Email Verification OTP",
      html: `
        <h2>Email Verification</h2>
        <p>Your OTP Code:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 2 minutes.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.log("OTP Error:", error);
    res.status(500).json({ success: false });
  }
});

// ==========================
// SEND KYC TO ADMIN
// ==========================

app.post("/send-kyc", async (req, res) => {
  try {
    const {
      fullName,
      gender,
      dob,
      mobile,
      email,
      address,
      pdfBase64,
      panBase64,
    } = req.body;

    const mailOptions = {
      from: '"Brightways KYC" <imtwebdevelopment@gmail.com>',
      to: process.env.ADMIN_EMAIL,
      subject: `New KYC Submission - ${fullName}`,
      html: `
        <h2>New KYC Submission</h2>

        <p><b>Name:</b> ${fullName}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>DOB:</b> ${dob}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>
      `,
     attachments: [
  {
    filename: "signed_kyc.pdf",
    content: Buffer.from(pdfBase64.split("base64,")[1], "base64"),
  },
  ...(panBase64
    ? [
        {
          filename: "pan_card.png",
          content: Buffer.from(panBase64.split("base64,")[1], "base64"),
        },
      ]
    : []),
]
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.log("KYC Error:", error);
    res.status(500).json({ success: false });
  }
});

// ==========================
// SERVER START
// ==========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});