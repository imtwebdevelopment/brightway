import React from "react";

function Footer() {
  return (
    <footer
      className="footer-0"
      role="contentinfo"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="footer-about">
          <div className="row">

            {/* COMPANY INFO */}
            <div className="col-md-4">
              <section className="hero--f">
                <div className="hero-img">
                  <h2>BrightWays</h2>
                </div>
                <p>
                  Brightways financial research house carrying out operations
                  in the intraday as well as delivery calls in Indian Equities
                  and Derivatives market
                </p>
              </section>
            </div>

            {/* NAVIGATION */}
            <div className="col-md-4">
              <nav aria-label="Footer Navigation">

                {/* visually hidden heading */}
                <h2
                  style={{
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: "0",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0,0,0,0)",
                    border: "0"
                  }}
                >
                  Quick Links
                </h2>

                <ul className="jghf">
                  <li>
                    <a href="/">
                      <span aria-hidden="true">➤</span> Home
                    </a>
                  </li>
                  <li>
                    <a href="/service">
                      <span aria-hidden="true">➤</span> Service
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <span aria-hidden="true">➤</span> About us
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <span aria-hidden="true">➤</span> Contact us
                    </a>
                  </li>
                  <li>
                    <a href="/policy">
                      <span aria-hidden="true">➤</span> Refund Policy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CTA */}
            <div className="col-md-4">
              <section>

                {/* visually hidden heading */}
                <h2
                  style={{
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: "0",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0,0,0,0)",
                    border: "0"
                  }}
                >
                  Call to Action
                </h2>

                <ul>
                  <li className="jghf kk">
                    GET EXPERT ADVICE
                  </li>
                </ul>
              </section>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;