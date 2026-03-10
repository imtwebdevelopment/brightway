import React from "react";

function About() {
  return (
    <>
      <div
        className="about-pages mt-4"
        style={{
          backgroundImage: `linear-gradient(rgb(2 5 18 / 52%),rgb(12 12 12 / 54%)),
        url('/1.avif')`,
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="pagetitle">
            <h1>About Our Company</h1>
          </div>
        </div>
      </div>
      <div className="gkw">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div class="at-sectionhead">
                <div class="at-description">
                  <img src="/25.jpg" class="img-responsive" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="at-sectionhead">
                <div class="at-description">
                  <h2>Who we are?</h2>
                  <p>
                    Brightways financial research house carrying out operations
                    in the intraday as well as delivery calls in Indian Equities
                    and Derivatives market. NSE & BSE recommendations Live
                    through SMS & Chat services we provide proper technical and
                    fundamental calls to the our clients and helps blinding
                    wealth and increasing their capitals.
                  </p>
                  <p>
                    Bright ways is a SEBI registered (Securities and Exchange
                    Board of India) registered Research Analyst firm SEBI Reg
                    No: INH000010566based in Bangalore, we have vast experience
                    in Indian stock market; the sole objective is to give our
                    subscribers quality advice on intraday and positional
                    trading. You can avail an expert advice in any of this
                    segment; Our goal is to make our clients accumulate maximum
                    returns on investment by providing authentic advice with
                    Support & Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* plslfbd */}
      <div
        className=""
        style={{ backgroundColor: "#fff", overflow: "overlay" }}
      >
        <div className="container">
          <div class="at-sectionhead">
            <div class="at-sectionhead padding0px">
              <div class="at-sectiondtitleborder text-center">
                <h2>Our Goal</h2>
              </div>
            </div>
            <div class="at-description">
              <div class="at-features">
                <div class="row">
                  <div class="col-md-4 col-lg-4 ">
                    <div class="at-feature text-center">
                      <span class="at-featureicon">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                      <div class="at-title">
                        <h3>Best Intraday tips</h3>
                      </div>
                      <div class="at-description">
                        <p>
                          Get Best in class Intraday tips, get 5 Jackpot tips in
                          a month, Register yourself to enjoy services for 2
                          days.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="at-feature text-center">
                      <span class="at-featureicon">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                      <div class="at-title">
                        <h3>High Accuracy , Low Risk</h3>
                      </div>
                      <div class="at-description">
                        <p>
                          Quality is what we believe in, Get Premium services ,
                          Less Tips but high profitability tips which involves
                          very low risk.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-md-3 col-lg-3 ">
                    <div class="at-feature text-center">
                      <span class="at-featureicon">
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                      <div class="at-title">
                        <h3>Thousands of satisfied clients</h3>
                      </div>
                      <div class="at-description">
                        <p>
                          Our clients are our best assets, there references are
                          our main source of income and our core strategy to
                          grow business.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div class="col-md-4 col-lg-4 ">
                    <div class="at-feature text-center">
                      <span class="at-featureicon">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                      <div class="at-title">
                        <h3>Qualified and Experienced team</h3>
                      </div>
                      <div class="at-description">
                        <p>
                          We have best in class team at your service ,
                          experienced Share Advisor helps you guide through this
                          financial jungle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
