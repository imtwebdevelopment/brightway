require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "10mb" }));

// ==========================
// HEALTH CHECK
// ==========================

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/api", (req, res) => {
  res.send("Hello from backend API");
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

   const result = await resend.emails.send({

      from:"onboarding@resend.dev",
      to: [email],
      subject: "Email Verification OTP",

      html: `
      <h2>Email Verification</h2>

      <p>Your OTP Code:</p>

      <h1 style="color:#007bff">${otp}</h1>

      <p>This OTP valid for 2 minutes.</p>
      `,

    });

    res.json({
      success: true,
      message: "OTP Sent Successfully",
    });

    console.log(result);

  } catch (error) {

    console.log("OTP Error:", error);

    res.status(500).json({
      success: false,
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

    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: [process.env.ADMIN_EMAIL],

      subject: `New KYC Submission - ${fullName}`,

      html: `
      <h2>New KYC Submission</h2>

      <table border="1" cellpadding="8">

      <tr><td>Name</td><td>${fullName}</td></tr>
      <tr><td>Gender</td><td>${gender}</td></tr>
      <tr><td>DOB</td><td>${dob}</td></tr>
      <tr><td>Mobile</td><td>${mobile}</td></tr>
      <tr><td>Email</td><td>${email}</td></tr>
      <tr><td>Address</td><td>${address}</td></tr>

      </table>
      `,

      attachments: [

        {
          filename: "signed_kyc.pdf",
          content: pdfBase64.split("base64,")[1],
        },

        ...(panBase64
          ? [
              {
                filename: "pan_card.png",
                content: panBase64.split("base64,")[1],
              },
            ]
          : []),
      ],

    });

    res.json({
      success: true,
    });

  } catch (error) {

    console.log("KYC Error:", error);

    res.status(500).json({
      success: false,
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