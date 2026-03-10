require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.get("/api", (req, res) => {
  res.send("Hello from backend API");
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// ==========================
// MAIL TRANSPORTER
// ==========================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// SMTP TEST
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready");
  }
});

// ==========================
// OTP SEND API
// ==========================

app.post("/send-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP required",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification OTP",
      html: `
        <div style="font-family:Arial">
        <h2>Email Verification</h2>
        <p>Your OTP code is:</p>
        <h1 style="color:#007bff">${otp}</h1>
        <p>This OTP is valid for 2 minutes.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "OTP Sent Successfully",
    });

  } catch (error) {

    console.log("OTP Error:", error);

    res.status(500).json({
      success: false,
      message: "OTP sending failed",
    });

  }
});

// ==========================
// KYC SUBMIT API
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
      panBase64
    } = req.body;

    if (!pdfBase64) {
      return res.status(400).json({
        success: false,
        message: "Signed PDF missing",
      });
    }

    const mailOptions = {

      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: `New KYC Submission - ${fullName}`,

      html: `
      <h2 style="color:#007bff">New KYC Submission</h2>

      <table border="1" cellpadding="8" cellspacing="0">

      <tr>
      <td><b>Name</b></td>
      <td>${fullName}</td>
      </tr>

      <tr>
      <td><b>Gender</b></td>
      <td>${gender}</td>
      </tr>

      <tr>
      <td><b>DOB</b></td>
      <td>${dob}</td>
      </tr>

      <tr>
      <td><b>Mobile</b></td>
      <td>${mobile}</td>
      </tr>

      <tr>
      <td><b>Email</b></td>
      <td>${email}</td>
      </tr>

      <tr>
      <td><b>Address</b></td>
      <td>${address}</td>
      </tr>

      </table>

      <br/>

      <p>Signed PDF and PAN card attached.</p>
      `,

      attachments: [

        // SIGNED PDF
        {
          filename: "signed_kyc.pdf",
          content: pdfBase64.split("base64,")[1],
          encoding: "base64",
        },

        // PAN CARD
        ...(panBase64
          ? [
              {
                filename: "pan_card.png",
                content: panBase64.split("base64,")[1],
                encoding: "base64",
              },
            ]
          : []),
      ],
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "KYC Email Sent Successfully",
    });

  } catch (error) {

    console.log("KYC Error:", error);

    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });

  }
});

// ==========================
// SERVER START
// ==========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
