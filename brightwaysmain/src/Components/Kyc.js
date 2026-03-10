import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";

import SignatureCanvas from "react-signature-canvas";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import consentPdf from "../assets/consent.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Kyc() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const [timer, setTimer] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [otpExpiry, setOtpExpiry] = useState(null);

  const [panPreview, setPanPreview] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [panBase64, setPanBase64] = useState(null);

  const [numPages, setNumPages] = useState(null);
  const [isPdfRead, setIsPdfRead] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const sigRef = useRef();
  const [isSigned, setIsSigned] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    mobile: "",
    address: "",
  });

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (panFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPanBase64(reader.result);
      };
      reader.readAsDataURL(panFile);
    }
  }, [panFile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ======================
  // SEND OTP (NODEMAILER)
  // ======================
  const sendOtp = async (e) => {

    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter valid email address");
      return;
    }

    if (timer > 0) {
      alert("Please wait before requesting another OTP");
      return;
    }

    const randomOtp = Math.floor(100000 + Math.random() * 900000);

    setGeneratedOtp(randomOtp);
    setOtpExpiry(Date.now() + 2 * 60 * 1000);
    setTimer(30);

    try {

      const response = await fetch("http://localhost:5000/send-otp", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          otp: randomOtp,
        }),

      });

      const data = await response.json();

      if (data.success) {
        setOtpSent(true);
        alert("OTP Sent Successfully");
      }

    } catch (error) {

      console.error(error);
      alert("Server error while sending OTP");

    }

  };

  // ======================
  // VERIFY OTP
  // ======================
  const verifyOtp = (e) => {

    e.preventDefault();

    if (!generatedOtp) {
      alert("Please request OTP first");
      return;
    }

    if (Date.now() > otpExpiry) {
      alert("OTP expired. Request new OTP.");
      return;
    }

    if (otp === generatedOtp.toString()) {

      setIsOtpVerified(true);
      alert("OTP Verified Successfully");

    } else {

      alert("Invalid OTP");

    }

  };

  const handlePdfScroll = (e) => {

    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setIsPdfRead(true);
    }

  };

  // ======================
  // BUILD SIGNED PDF
  // ======================
  const buildSignedPdfBytes = async () => {

    const existingPdfBytes = await fetch(consentPdf).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const signatureData = sigRef.current
      .getCanvas()
      .toDataURL("image/png");

    const base64Data = signatureData.replace(/^data:image\/png;base64,/, "");

    const signatureBytes = Uint8Array.from(atob(base64Data), (c) =>
      c.charCodeAt(0)
    );

    const pngImage = await pdfDoc.embedPng(signatureBytes);

    const pages = pdfDoc.getPages();
    const lastPage = pages[pages.length - 1];

    const { width } = lastPage.getSize();

    lastPage.drawText(`Digitally Signed by: ${formData.fullName}`, {
      x: 50,
      y: 145,
      size: 10,
      font: fontRegular,
      color: rgb(0, 0, 0),
    });

    lastPage.drawText(`Email: ${email}`, {
      x: 50,
      y: 130,
      size: 10,
      font: fontRegular,
      color: rgb(0, 0, 0),
    });

    lastPage.drawText(`Date: ${new Date().toLocaleString()}`, {
      x: 50,
      y: 115,
      size: 10,
      font: fontRegular,
      color: rgb(0, 0, 0),
    });

    lastPage.drawText(`Mobile: ${formData.mobile}`, {
      x: 50,
      y: 100,
      size: 10,
      font: fontRegular,
      color: rgb(0, 0, 0),
    });

    const sigWidth = 180;
    const sigHeight = 70;

    const sigX = width - sigWidth - 40;
    const sigY = 105;

    lastPage.drawImage(pngImage, {
      x: sigX,
      y: sigY,
      width: sigWidth,
      height: sigHeight,
    });

    lastPage.drawText("Candidate Sign", {
      x: sigX + 30,
      y: sigY - 15,
      size: 9,
      font: font,
    });

    return await pdfDoc.save();
  };
  const handlePreview = async () => {

    if (sigRef.current.isEmpty()) {
      alert("Please provide your signature first.");
      return;
    }

    setIsGeneratingPreview(true);

    try {

      const pdfBytes = await buildSignedPdfBytes();

      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      if (previewUrl) URL.revokeObjectURL(previewUrl);

      setPreviewUrl(URL.createObjectURL(blob));

    } catch (error) {

      console.error("Preview Error:", error);
      alert("Error generating preview");

    } finally {

      setIsGeneratingPreview(false);

    }

  };

  // ======================
  // SEND KYC DATA
  // ======================
  const sendKycToServer = async (pdfBytes) => {

  try {

    const uint8Array = new Uint8Array(pdfBytes);
    let binary = "";
    const chunkSize = 0x8000;

    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }

    const pdfBase64 = btoa(binary);

    const response = await fetch("http://localhost:5000/send-kyc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        gender: formData.gender,
        dob: formData.dob,
        mobile: formData.mobile,
        email: email,
        address: formData.address,
        pdfBase64: `data:application/pdf;base64,${pdfBase64}`,
        panBase64: panBase64
      }),
    });

    return await response.json();

  } catch (error) {

    console.error("KYC API error:", error);

    return { success: false };

  }

};

  // ======================
  // SUBMIT
  // ======================
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.gender ||
      !formData.dob ||
      !formData.mobile ||
      !formData.address
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!isOtpVerified) {
      alert("Please verify OTP first");
      return;
    }

    if (!isAgree) {
      alert("Please read and agree to the consent document");
      return;
    }

    if (sigRef.current.isEmpty()) {
      alert("Please provide signature");
      return;
    }

    setIsSubmitting(true);

    try {

      const pdfBytes = await buildSignedPdfBytes();

      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = `KYC_Signed_${formData.fullName}_${Date.now()}.pdf`;

      link.click();

      URL.revokeObjectURL(url);

      const result = await sendKycToServer(pdfBytes);

      if (result.success) {

        setFormData({
          fullName: "",
          gender: "",
          dob: "",
          mobile: "",
          address: "",
        });

        setEmail("");
        setOtp("");
        setIsOtpVerified(false);
        setOtpSent(false);

        setPanPreview(null);
        setPanFile(null);
        setPanBase64(null);
        setPreviewUrl(null);

        sigRef.current.clear();

        alert("KYC Submitted Successfully! Email sent to admin.");
      } else {

        alert("KYC Submitted but email failed.");

      }

    } catch (error) {

      console.error(error);
      alert("Error submitting KYC");

    } finally {

      setIsSubmitting(false);

    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {

    setNumPages(numPages);

  };

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h4>KYC Details Of Clients</h4>
          <p>As Per SEBI Norms KYC is Mandatory for All Clients.</p>
        </div>

        <div className="mt-5 mb-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <label>Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label>Gender *</label>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </div>

              <div className="col-md-4">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  pattern="^[0-9]{10}$"
                  title="Please enter 10 digit mobile number"
                  required
                />
              </div>

              {/* EMAIL + OTP */}
              <div className="col-md-12 mt-3">
                <label>Email Address *</label>
                <input
                  type="email"
                  className="form-control mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <Button
                    type="button"
                    variant="outline-danger"
                    onClick={sendOtp}
                    disabled={timer > 0 || isOtpVerified}
                  >
                    {timer > 0 ? `Resend OTP (${timer}s)` : "Send OTP"}
                  </Button>

                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="form-control"
                    style={{ maxWidth: "200px" }}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    disabled={!email}
                  />

                  <Button
                    type="button"
                    variant="outline-danger"
                    onClick={verifyOtp}
                    disabled={!otp || !otpSent}
                  >
                    Verify OTP
                  </Button>

                  {isOtpVerified && (
                    <span className="text-success mt-2">✓ Email Verified</span>
                  )}
                </div>
              </div>

              {/* ADDRESS */}
              <div className="col-md-8 mt-3">
                <label>Address *</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* PAN UPLOAD */}
              <div className="col-md-4 mt-3">
                <label>PAN Card Upload</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files[0]) {

                      const file = e.target.files[0];

                      if (!file.type.startsWith("image/")) {
                        alert("Only image files allowed");
                        return;
                      }

                      if (file.size > 2 * 1024 * 1024) {
                        alert("PAN image must be less than 2MB");
                        return;
                      }

                      setPanFile(file);
                      if (panPreview) URL.revokeObjectURL(panPreview);
setPanPreview(URL.createObjectURL(file));
                    }
                  }}
                />
                {panPreview && (
                  <img
                    src={panPreview}
                    alt="PAN Preview"
                    style={{
                      width: "200px",
                      marginTop: "10px",
                      border: "1px solid #ddd",
                    }}
                  />
                )}
              </div>

              {/* PDF VIEWER */}
              <div className="col-md-12 mt-4">
                <h5>Client Consent Document</h5>
                <div
                  onScroll={handlePdfScroll}
                  style={{
                    height: "400px",
                    overflowY: "scroll",
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <Document
                    file={consentPdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading="Loading PDF..."
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={700}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    ))}
                  </Document>
                </div>

                <p className="mt-2">
                  If the PDF doesn&apos;t display,{" "}
                  <a href={consentPdf} download="consent_document.pdf">
                    download it here
                  </a>
                </p>

                <Form.Check
                  type="checkbox"
                  label="I confirm I have read the full document and agree to the terms."
                  disabled={!isPdfRead}
                  checked={isAgree}
                  onChange={(e) => setIsAgree(e.target.checked)}
                  className={!isPdfRead ? "text-muted" : ""}
                />
                {!isPdfRead && (
                  <small className="text-muted">
                    Please scroll to the bottom of the document to enable
                    agreement
                  </small>
                )}
              </div>

              {/* SIGNATURE PAD */}
              <div className="col-md-12 mt-4">
                <label>Signature *</label>
                <div
                  style={{
                    background: "#fff",
                    border: "2px solid #000",
                    width: "402px",
                    borderRadius: "4px",
                  }}
                >
                  <SignatureCanvas
                    ref={sigRef}
                    penColor="blue"
                    onEnd={() => {
                      setIsSigned(true);
                      setPreviewUrl(null);
                    }}
                    canvasProps={{
                      width: 400,
                      height: 150,
                      className: "sigCanvas",
                    }}
                  />
                </div>

                {/* Buttons row */}
                <div className="mt-2 d-flex gap-2 align-items-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      sigRef.current.clear();
                      setIsSigned(false);
                      setPreviewUrl(null);
                    }}
                  >
                    Clear Signature
                  </Button>

                  {/* Preview button */}
                  {isSigned && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handlePreview}
                      disabled={isGeneratingPreview}
                    >
                      {isGeneratingPreview
                        ? "Generating Preview…"
                        : "👁 Preview Signed Document"}
                    </Button>
                  )}
                </div>

                {/* Inline PDF Preview */}
                {previewUrl && (
                  <div className="mt-4">
                    <h6 className="mb-2 text-primary">📄 Signed Document Preview</h6>
                    <iframe
                      src={previewUrl}
                      title="Signed PDF Preview"
                      style={{
                        width: "100%",
                        height: "1000px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                      }}
                    />
                    <p className="text-muted mt-1" style={{ fontSize: "12px" }}>
                      ✅ This is how your signature will appear in the final document.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <Button
              type="submit"
              variant="success"
              className="mt-4"
              disabled={!isOtpVerified || !isAgree || !isSigned || isSubmitting}
              size="lg"
            >
              {isSubmitting ? "Submitting KYC..." : "Submit KYC"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Kyc;