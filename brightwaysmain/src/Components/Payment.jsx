import React from "react";
import qr from "../assets/payment-qr.jpeg";
import scanImg from "../assets/scan-illustration.jpg";

const PaymentPage = () => {

  const copyUPI = () => {
    navigator.clipboard.writeText("bright.ra@validkpay");
    alert("UPI ID Copied!");
  };

  return (
    <div
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
          <div className="col-lg-6 text-center mb-4">

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
                alt="Scan Illustration"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </div>

          </div>


          {/* RIGHT PAYMENT CARD */}
          <div className="col-lg-6">

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

              <h2 className="fw-bold mb-2">
                Scan & Pay
              </h2>

              <p className="text-muted">
                Scan the QR code using any UPI application and
                complete your payment safely through our verified account.
              </p>

              {/* QR */}
              <div className="text-center my-3">
                <img
                  src={qr}
                  alt="QR"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "200px" }}
                />
              </div>

              {/* UPI */}
              <div className="input-group mb-3">
                <input
                  className="form-control text-center fw-bold"
                  value="bright.ra@validkpay"
                  readOnly
                />

                <button
                  className="btn btn-success"
                  onClick={copyUPI}
                >
                  Copy
                </button>
              </div>

              {/* Warning */}
              <div className="alert alert-warning py-2">
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

          </div>

        </div>

      </div>
    </div>
  );
};

export default PaymentPage;
