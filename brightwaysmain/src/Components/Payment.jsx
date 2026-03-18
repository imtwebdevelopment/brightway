import React, { useState } from "react";
import qr from "../assets/payment-qr.jpeg";
import scanImg from "../assets/scan-illustration.jpg";

const PaymentPage = () => {

  const [copied, setCopied] = useState(false);

  const copyUPI = () => {
    navigator.clipboard.writeText("bright.ra@validkpay");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main
      className="container-fluid"
      style={{
        background:
          "radial-gradient(circle at top left,#ffffff,#e6f0ff,#f6f9fc)",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <section className="col-lg-6 text-center mb-4">

            <div
              className="p-3"
              style={{
                background: "white",
                borderRadius: "18px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={scanImg}
                alt="Illustration showing how to scan QR code using mobile payment apps"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </div>

          </section>


          {/* RIGHT PAYMENT CARD */}
          <section className="col-lg-6">

            <div
              className="card border-0 p-4"
              style={{
                borderRadius: "18px",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 15px 50px rgba(0,0,0,0.12)",
              }}
            >

              <span className="badge bg-success mb-2 w-25">
                Secure Payment
              </span>

              <h1 className="fw-bold mb-2">
                Scan & Pay
              </h1>

              <p className="text-muted">
                Scan the QR code using any UPI application and
                complete your payment safely through our verified account.
              </p>

              {/* QR */}
              <div className="text-center my-3">
                <img
                  src={qr}
                  alt="QR code for UPI payment to bright.ra@validkpay"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "200px" }}
                />
              </div>

              {/* ✅ LABEL ADDED */}
              <label htmlFor="upi-id" className="form-label fw-bold">
                UPI ID
              </label>

              <div className="input-group mb-3">

                <input
                  id="upi-id"
                  className="form-control text-center fw-bold"
                  value="bright.ra@validkpay"
                  readOnly
                  aria-describedby="upi-help"
                />

                <button
                  className="btn btn-success"
                  onClick={copyUPI}
                  aria-label="Copy UPI ID to clipboard"
                >
                  Copy
                </button>
              </div>

              {/* ✅ Screen reader feedback */}
              <div id="upi-help" className="visually-hidden">
                Use this UPI ID to complete your payment
              </div>

              {copied && (
                <div
                  className="alert alert-success py-2"
                  role="status"
                  aria-live="polite"
                >
                  UPI ID Copied Successfully!
                </div>
              )}

              {/* Warning */}
              <div
                className="alert alert-warning py-2"
                role="alert"
              >
                ⚠ We are not responsible for payments made to other accounts
              </div>

              {/* Steps */}
              <ul className="list-group list-group-flush mt-2">

                <li className="list-group-item">
                  ✅ Open Google Pay / PhonePe / Paytm
                </li>

                <li className="list-group-item">
                 ✅ Scan QR Code
                </li>

                <li className="list-group-item">
                  ✅ Confirm Transaction
                </li>

                <li className="list-group-item">
                  ✅ Share Screenshot with Support
                </li>

              </ul>

            </div>

          </section>

        </div>

      </div>
    </main>
  );
};

export default PaymentPage;