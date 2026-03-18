import React, { useState } from "react";
import "./About.css";

function About() {
  const [active, setActive] = useState(0);

  return (
    <>
      <header
        className="about-pages mt-4"
        style={{
          backgroundImage: `linear-gradient(rgb(2 5 18 / 52%),rgb(12 12 12 / 54%)),
          url('/1.avif')`,
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="banner"
        aria-label="About our company banner"
      >
        <div className="container">
          <div className="pagetitle">
            <h1>About Our Company</h1>
          </div>
        </div>
      </header>

      <main>
        <section className="gkw">
          <div className="container">
            <div className="row">

              <div className="col-lg-6">
                <div className="at-sectionhead">
                  <div className="at-description">
                    <img
                      src="/25.jpg"
                      className="img-responsive about-img"
                      alt="Brightways financial research team"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="at-sectionhead">
                  <div className="at-description">
                    <h2>Who we are?</h2>
                    <p>Brightways financial research house carrying out operations in the intraday as well as delivery calls in Indian Equities and Derivatives market. NSE & BSE recommendations Live through SMS & Chat services we provide proper technical and fundamental calls to the our clients and helps blinding wealth and increasing their capitals.

                      Bright ways is a SEBI registered (Securities and Exchange Board of India) registered Research Analyst firm SEBI Reg No: INH000010566based in Bangalore, we have vast experience in Indian stock market; the sole objective is to give our subscribers quality advice on intraday and positional trading. You can avail an expert advice in any of this segment; Our goal is to make our clients accumulate maximum returns on investment by providing authentic advice with Support & Service.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 🔥 GOAL SECTION */}
        <section className="goal-section">
          <div className="container">

            <h2 className="goal-title">Our Goal</h2>

            <div className="row">

              {/* CARD 1 */}
              <div className="col-md-4">
                <div
                  className={`goal-card text-center ${active === 0 ? "active-card" : ""}`}
                  onMouseEnter={() => setActive(0)}
                >
                  <div className="goal-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <h3>Best Intraday tips</h3>
                  <p>Get Best in class Intraday tips, get 5 Jackpot tips in a month, Register yourself to enjoy services for 2 days.</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-4">
                <div
                  className={`goal-card text-center ${active === 1 ? "active-card" : ""}`}
                  onMouseEnter={() => setActive(1)}
                >
                  <div className="goal-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <h3>High Accuracy , Low Risk</h3>
                  <p>Quality is what we believe in, Get Premium services , Less Tips but high profitability tips which involves very low risk.</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-md-4">
                <div
                  className={`goal-card text-center ${active === 2 ? "active-card" : ""}`}
                  onMouseEnter={() => setActive(2)}
                >
                  <div className="goal-icon">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <h3>Qualified and Experienced team</h3>
                  <p>We have best in class team at your service , experienced Share Advisor helps you guide through this financial jungle.</p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}

export default About;