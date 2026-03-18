import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

function Home() {
  const responsive = {
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form validation logic here
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;

    // Simple validation
    if (!name || !email || !mobile) {
      // Show error message
      const errorDiv = document.getElementById('expertForM_ErrOR');
      if (errorDiv) {
        errorDiv.textContent = 'Please fill in all required fields';
        errorDiv.setAttribute('role', 'alert');
      }
    }
  };

  return (
    <>
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-content" style={{
        position: 'absolute',
        left: '-9999px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }} onFocus={(e) => {
        e.target.style.position = 'fixed';
        e.target.style.top = '10px';
        e.target.style.left = '10px';
        e.target.style.width = 'auto';
        e.target.style.height = 'auto';
        e.target.style.backgroundColor = 'white';
        e.target.style.padding = '10px';
        e.target.style.zIndex = '9999';
        e.target.style.textDecoration = 'none';
        e.target.style.color = 'black';
        e.target.style.border = '2px solid black';
      }} onBlur={(e) => {
        e.target.style.position = 'absolute';
        e.target.style.left = '-9999px';
        e.target.style.top = 'auto';
        e.target.style.width = '1px';
        e.target.style.height = '1px';
      }}>
        Skip to main content
      </a>

      <div
        className="at-homesliderarea"
        style={{
          backgroundImage: "url('/3.avif')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "auto",
          minHeight: "520px",
          padding: "40px 0",
        }}
        role="region"
        aria-label="Hero section"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="at- at-homeslidervthree col-md-7 ">
              <div className="hiddenmobile">
                <div
                  className=""
                  data-in="slideRight"
                  data-out="slideLeft"
                  data-duration="1800"
                >
                  <div className="at-slidercontent">
                    <div className="at-titleborder">
                      <h1 style={{ lineHeight: "1.2", fontSize: "2.8rem" }}>
                        <span style={{ color: "#ffffff", fontWeight: "700" }}>
                          SEBI REGISTERED
                        </span>
                        <br />

                        <span
                          style={{
                            color: "#00a651",
                            fontWeight: "800",
                            fontStyle: "italic",
                            letterSpacing: "1px"
                          }}
                        >
                          RESEARCH ANALYST
                        </span>
                      </h1>
                    </div>
                    <div className="at-description">
                      <div style={{ color: "white", fontSize: "20px" }}>
                        SEBI Reg No:( INH000010566)
                      </div>
                      <p style={{ color: "white", fontSize: "1.1rem" }}>
                        A Leading Research Analyst Firm With Strong Focus On
                        Markets
                      </p>
                    </div>
                    <div className="at-btns">
                      <a
                        className="at-btn at-btnactive"
                        href="/about"
                        aria-label="Read more about our company"
                      >
                        Read More
                      </a>
                      <a
                        className="at-btn"
                        href="/contact"
                        style={{ color: "white" }}
                        aria-label="Contact us for more information"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="at- at-homeslidervthree col-md-5">
              <div className="">
                <div
                  className="at-slidercontent at-expertform"
                  data-in="slideRight"
                  data-out="slideLeft"
                  data-duration="1800"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    padding: "25px",
                    borderRadius: "10px"
                  }}
                >
                  <h2 style={{ color: "white" }}>Get an Expert Advice!</h2>
                  <p style={{ color: "white" }}>
                    Your Information will never be shared with any third party
                  </p>
                  <form
                    id="expert"
                    className="at-formtheme at-formrequestcallback"
                    onSubmit={handleFormSubmit}
                    noValidate
                  >
                    <fieldset>
                      <div className="form-group">
                        <label htmlFor="name" style={{ color: "#ffffff", fontWeight: "600" }}>
                          Your Name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="form-control-00"
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            border: "1px solid #ccc",
                            padding: "8px",
                            width: "100%",
                            marginBottom: "10px"
                          }}
                          required
                          aria-required="true"
                          aria-describedby="name-error"
                        />
                        <div id="name-error" className="error-message" role="alert" aria-live="polite"></div>

                        <label htmlFor="email" style={{ color: "#ffffff", fontWeight: "600" }}>
                          Email Address <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control-00"
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            border: "1px solid #ccc",
                            padding: "8px",
                            width: "100%",
                            marginBottom: "10px"
                          }}
                          required
                          aria-required="true"
                          aria-describedby="email-error"
                        />
                        <div id="email-error" className="error-message" role="alert" aria-live="polite"></div>

                        <label htmlFor="mobile" style={{ color: "#ffffff", fontWeight: "600" }}>
                          Mobile Number <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="mobile"
                          type="tel"
                          name="mobile"
                          className="form-control-00"
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            border: "1px solid #ccc",
                            padding: "8px",
                            width: "100%",
                            marginBottom: "5px"
                          }}
                          pattern="[0-9]{10}"
                          required
                          aria-required="true"
                          aria-describedby="mobileHelp mobile-error"
                        />
                        <small id="mobileHelp" style={{ color: "#ddd" }}>Enter 10 digit mobile number</small>
                        <div id="mobile-error" className="error-message" role="alert" aria-live="polite"></div>
                      </div>
                      <div className="at-btns ">
                        <div id="expertForM_ErrOR" align="center" role="alert" style={{ color: "#ffcccc" }}></div>
                        <button
                          type="submit"
                          aria-label="Submit expert advice form"
                          style={{
                            backgroundColor: "#00a651",
                            color: "#ffffff",
                            border: "none",
                            padding: "12px 30px",
                            fontWeight: "600",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "1rem",
                            marginTop: "10px"
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5">
              <div className="wpb_wrapper">
                <div
                  role="region"
                  aria-label="Important announcements"
                  style={{ marginTop: "15px", fontSize: "15px", color: "#0F6D41", background: "rgba(255,255,255,0.85)", padding: "15px", borderRadius: "8px" }}
                >
                  <div style={{ color: "#333" }}>
                    <b>
                      <span className="blink_me"
                        style={{ color: "red", fontSize: " 18px" }}
                        aria-label="Important Note"
                      >
                        <b>Important Note!!</b>
                      </span>
                      &nbsp;::&nbsp;&nbsp; [1] Brightways Financial Services is a{" "}
                      <span style={{ color: "red" }}> SEBI Reg No:( INH000010566) </span>Based Having a Registered Office In Bangalore. [2] Our Official Website is &nbsp;
                      <a href="http://brightwaysfinancial.com/" aria-label="Visit our official website" style={{ color: "#0066c0" }}>
                        https://brightwaysfinancial.com/
                      </a>
                      , E-Mail Id: support@bightwaysfinancial.com,{" "}
                      Brightwaysfinhelp@gmail.com, Phone Number : 6363360542 ,{" "}
                      [3] Never Share Your Debit Card/Credit Card/Net banking Credential/ And Demat Credential With Any Of Our Employee. [4] We accept Payment Only In Registered Bank Account. [5] We Do Not Offer Any Assured/ 100% Profitable Calls and we are not taking profit sharing. [6] Investing In The Market Is subject To market Risk. Hence Read Our Disclosure & Disclaimer. And Taking Care Before Investing.
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main id="main-content" tabIndex="-1">
        <section className="at-sectionspace at-overflowhidden at-haslayout py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 pull-left">
                <section
                  id="companyhistory-image"
                  className="companyhistory-image at-aboutsection"
                  aria-labelledby="company-image-heading"
                >
                  <div className="at-sectionhead">
                    <div className="at-description">
                      <img
                        src="/25.jpg"
                        alt="Brightways Financial company office and team"
                        className="img-responsive"
                        style={{ height: "330px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                      />
                      <h2 id="company-image-heading" className="sr-only">Company Overview Image</h2>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-8 col-lg-8 pull-left">
                <section
                  id="companyhistory-content"
                  className="companyhistory-content at-aboutsection"
                  aria-labelledby="who-we-are-heading"
                >
                  <div className="at-sectionhead">
                    <div className="at-description">
                      <h2 id="who-we-are-heading" style={{ color: "#1a3e60" }}>Who we are?</h2>
                      <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                        Brightways financial research house carrying out
                        operations in the intraday as well as delivery calls in
                        Indian Equities and Derivatives market. NSE & BSE
                        recommendations Live through SMS & Chat services we
                        provide proper technical and fundamental calls to the our
                        clients and helps blinding wealth and increasing their
                        capitals.
                      </p>
                      <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                        Bright ways is a SEBI registered (Securities and Exchange
                        Board of India) registered Research Analyst firm{" "}
                        <b> SEBI Reg No: INH000010566</b> based in Bangalore, we
                        have vast experience in Indian stock market; the sole
                        objective is to give our subscribers quality advice on
                        intraday and positional trading. You can avail an expert
                        advice in any of this segment; Our goal is to make our
                        clients accumulate maximum returns on investment by
                        providing authentic advice with Support & Service.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 col-lg-6 pull-left">
                <div style={{ background: "#f0f6fa", padding: "20px", borderRadius: "10px" }}>
                  <h3 style={{ color: "#1a3e60", borderBottom: "2px solid #2a7f62", paddingBottom: "10px" }}>
                    <b>PRICING SYSTEM</b>
                  </h3>
                  <p style={{ fontSize: "1rem" }}>
                    In our unique package pricing method, we have Daily Special
                    discount offers available
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 pull-left">
                <div style={{ background: "#f0f6fa", padding: "20px", borderRadius: "10px" }}>
                  <h3 style={{ color: "#1a3e60", borderBottom: "2px solid #2a7f62", paddingBottom: "10px" }}>
                    <b>PREMIUM SERVICES</b>
                  </h3>
                  <p>Customised services available for HNI clients.</p>
                  <p style={{ fontSize: "0.95rem" }}>
                    In the event of you looking for stock tips for today or NSE
                    Intraday trading tips we at Brightways provide the same expert
                    advisory services in Equity, Future ,Options ,Nifty & Bank
                    Nifty, these trading tips will be Intraday as well as
                    positional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="panel5" className="at-testimonialsvtwo at-haslayout py-4">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="at-testimonials mb-4">
                  <div className="at-sectionhead">
                    <div className="at-sectiontitleborder">
                      <h2 style={{ color: "#1a3e60" }}>Our goals</h2>
                    </div>
                  </div>
                </div>

                <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                  We aim to do this by being responsive towards our clients and
                  strive relentlessly to improve. We at Bright ways Financials
                  want to be worthy of our customer's trust and provide them with
                  the finest Stock market tips and gain more with us
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container at-services mt-5 mb-3">
            <div className="at-sectiontitleborder mb-4">
              <h2 style={{ color: "#1a3e60" }}>Our Services</h2>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop
              margin={15}
              nav
              dots
              autoplay={true}
              autoplayTimeout={3000}
              autoplayHoverPause={true}
              responsive={responsive}
              aria-label="Our Services Carousel"
              aria-roledescription="carousel"
              tabIndex="0"
            >
              <div className="item" role="group" aria-roledescription="slide" aria-label="1 of 6">
                <div className="at-service" style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <figure className="at-featureimg">
                    <a href="/services" aria-label="Learn more about Commodities service">
                      <img
                        src="/Image/6.jpg"
                        height="200"
                        width="100%"
                        alt="Commodities trading - Gold and Silver"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </figure>
                  <div className="at-title p-3">
                    <h3 style={{ color: "#1a3e60" }}>Commodities</h3>
                  </div>
                  <div className="at-description px-3 pb-3">
                    <p>Commodities - Gold and Silver.</p>
                  </div>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="2 of 6">
                <div className="at-service" style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <figure className="at-featureimg">
                    <a href="/services" aria-label="Learn more about Commodities service">
                      <img
                        src="/Image/2.jpg"
                        height="200"
                        width="100%"
                        alt="Equity trading - Shares & Stocks"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </figure>
                  <div className="at-title p-3">
                    <h3 style={{ color: "#1a3e60" }}>Equity</h3>
                  </div>
                  <div className="at-description px-3 pb-3">
                    <p>Equity - Shares & Stocks.</p>
                  </div>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="3 of 6">
                <div className="at-service" style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <figure className="at-featureimg">
                    <a href="/services" aria-label="Learn more about Derivatives service">
                      <img
                        src="/Image/3.jpg"
                        height="200"
                        width="100%"
                        alt="Derivatives trading"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </figure>
                  <div className="at-title p-3">
                    <h3 style={{ color: "#1a3e60" }}>Derivatives</h3>
                  </div>
                  <div className="at-description px-3 pb-3">
                    <p>Futures & Options.</p>
                  </div>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="4 of 6">
                <div className="at-service" style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <figure className="at-featureimg">
                    <a href="/services" aria-label="Learn more about Currency service">
                      <img
                        src="/Image/4.jpg"
                        height="200"
                        width="100%"
                        alt="Currency trading"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </figure>
                  <div className="at-title p-3">
                    <h3 style={{ color: "#1a3e60" }}>Currency</h3>
                  </div>
                  <div className="at-description px-3 pb-3">
                    <p>Currency Markets.</p>
                  </div>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="5 of 6">
                <div className="at-service" style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <figure className="at-featureimg">
                    <a href="/services" aria-label="Learn more about MCX service">
                      <img
                        src="/Image/5.jpg"
                        height="200"
                        width="100%"
                        alt="MCX Commodities"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </figure>
                  <div className="at-title p-3">
                    <h3 style={{ color: "#1a3e60" }}>MCX</h3>
                  </div>
                  <div className="at-description px-3 pb-3">
                    <p>Multi Commodity Exchange.</p>
                  </div>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="6 of 6">
                <div className="at-service" style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <figure className="at-featureimg">
                    <a href="/services" aria-label="Learn more about IPO services">
                      <img
                        src="/Image/7.jpg"
                        height="200"
                        width="100%"
                        alt="IPO"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </figure>
                  <div className="at-title p-3">
                    <h3 style={{ color: "#1a3e60" }}>IPO</h3>
                  </div>
                  <div className="at-description px-3 pb-3">
                    <p>Initial Public Offerings.</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>

        <section>
          <section
            className="at-parallex at-parallexwhychooseus padding0px mt-5 mb-5"
            style={{
              backgroundImage: `linear-gradient(rgb(2 5 18 / 70%),rgb(12 12 12 / 70%)),
          url('/2.avif')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "60px 0"
            }}
            aria-label="Call to action section"
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                  <div className="at-sectionhead text-white">
                    <h2 className="text-white" style={{ fontSize: "2.2rem" }}>Are You Ready to Succeed? Be ready with us!</h2>
                    <p className="text-white" style={{ fontSize: "1.2rem" }}>
                      No fluff, no 'advanced trainings', Just real trades that
                      either work or not. Honest and simple. Why Delay The Life
                      You Want?{" "}
                    </p>
                    <a
                      href="/contact"
                      className="btn btn-success btn-lg"
                      style={{
                        textDecoration: "underline",
                        fontSize: "18px",
                        color: "#ffffff",
                        backgroundColor: "#28a745",
                        borderColor: "#28a745",
                        padding: "12px 30px"
                      }}
                      aria-label="Start receiving our trade alerts today"
                    >
                      Start Receiving Our Trade Alerts Today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section>
          <div className="container at-services mt-5 mb-3">
            <div className="at-sectiontitleborder mb-4">
              <h2 style={{ color: "#1a3e60" }}>Client Testimonials</h2>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop
              margin={15}
              nav
              dots
              autoplay={true}
              autoplayTimeout={3000}
              autoplayHoverPause={true}
              responsive={responsive}
              aria-label="Client Testimonials Carousel"
              aria-roledescription="carousel"
              tabIndex="0"
            >
              <div className="item" role="group" aria-roledescription="slide" aria-label="1 of 5">
                <div className="at-testimonial p-4" style={{ background: "#f8fafc", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <blockquote>
                    <q style={{ fontSize: "1rem" }}>Excellent tips provided in banknifty with good support</q>
                  </blockquote>
                  <h3 style={{ color: "#1a3e60", marginTop: "10px" }}>Nagbushan</h3>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="2 of 5">
                <div className="at-testimonial p-4" style={{ background: "#f8fafc", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <blockquote>
                    <q>Good Advisory in India</q>
                  </blockquote>
                  <h3 style={{ color: "#1a3e60", marginTop: "10px" }}>Kumar S</h3>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="3 of 5">
                <div className="at-testimonial p-4" style={{ background: "#f8fafc", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <blockquote>
                    <q>Best services and affordable rate.</q>
                  </blockquote>
                  <h3 style={{ color: "#1a3e60", marginTop: "10px" }}>'Ramesh'</h3>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="4 of 5">
                <div className="at-testimonial p-4" style={{ background: "#f8fafc", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <blockquote>
                    <q>Good Features of services and quick response</q>
                  </blockquote>
                  <h3 style={{ color: "#1a3e60", marginTop: "10px" }}>Ranjan Singh</h3>
                </div>
              </div>
              <div className="item" role="group" aria-roledescription="slide" aria-label="5 of 5">
                <div className="at-testimonial p-4" style={{ background: "#f8fafc", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <blockquote>
                    <q>Excellent tips provided in banknifty with good support</q>
                  </blockquote>
                  <h3 style={{ color: "#1a3e60", marginTop: "10px" }}>Nagbushan</h3>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
      </main>

      <Modal show={show} onHide={handleClose} aria-labelledby="modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Number Of Complaints</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="" style={{ overflow: "auto" }}>
            <Table striped bordered hover aria-label="Complaints statistics table">
              <thead>
                <tr>
                  <th scope="col">At the beginning of the month</th>
                  <th scope="col">Received during the month</th>
                  <th scope="col">Resolved during the month</th>
                  <th scope="col">Pending at the end of the month</th>
                  <th scope="col">Reasons for pendency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} aria-label="Close modal">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;