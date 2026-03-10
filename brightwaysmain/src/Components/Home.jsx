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
  return (
    <>
      <div
        class="at-homesliderarea"
        style={{
          backgroundImage: "url('/3.avif')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "451px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="at- at-homeslidervthree col-md-7 ">
              <div class="hiddenmobile">
                <div
                  class=""
                  data-in="slideRight"
                  data-out="slideLeft"
                  data-duration="1800"
                >
                  <div class="at-slidercontent">
                    <div class="at-titleborder">
                      <h2>
                        <span>SEBI Registered </span>
                        <em>
                          <b>Research Analyst </b>
                        </em>
                      </h2>
                    </div>
                    <div class="at-description">
                      <div style={{ color: "white", fontSize: "20px" }}>
                        SEBI Reg No:( INH000010566)
                      </div>
                      <p style={{ color: "white" }}>
                        A Leading Research Analyst Firm With Strong Focus On
                        Markets
                      </p>
                    </div>
                    <div class="at-btns">
                      <a class="at-btn at-btnactive" href="">
                        Read More
                      </a>
                      <a
                        class="at-btn"
                        href="/contact"
                        style={{ color: "white" }}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="at- at-homeslidervthree col-md-5">
              <div class="">
                <div
                  class="at-slidercontent"
                  data-in="slideRight"
                  data-out="slideLeft"
                  data-duration="1800"
                >
                  <h3 style={{ color: "white" }}>Get an Expert Advice!</h3>
                  <p style={{ color: "white" }}>
                    Your Information will never be shared with any third party
                  </p>
                  <form id="expert" class="at-formtheme at-formrequestcallback">
                    <fieldset>
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control-00"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control-00"
                          placeholder="Email Address"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="mobile"
                          class="form-control-00"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div class="at-btns">
                        <div id="expertForM_ErrOR" align="center"></div>
                        <button class="at-btn at-btnactive" type="submit">
                          Submit
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="wpb_wrapper">
                <marquee
                  style={{
                    marginTop: "5px",
                    fontSize: "17px",
                    color: " #0F6D41",
                  }}
                >
                  <b style={{ color: "white" }}>
                    {" "}
                    <span
                      class="blink_me"
                      style={{ color: "red", fontSize: " 19px" }}
                    >
                      <b>Important Note!!</b>
                    </span>
                    &nbsp;::&nbsp;&nbsp; [1] Brightways Financial Services is a{" "}
                    <span style={{ color: "red" }}>
                      SEBI Reg No:( INH000010566)
                    </span>{" "}
                    Based Having a Registered Office In Bangalore [2] Our
                    Official Website is &nbsp;
                    <a href="http://brightwaysfinancial.com/">
                      https://brightwaysfinancial.com/
                    </a>
                    , E-Mail Id: support@bightwaysfinancial.com,{" "}
                    Brightwaysfinhelp@gmail.com, Phone Number : 6363360542 ,{" "}
                    {/* <a href="https://scores.sebi.gov.in/" target="_blank">
                      https://scores.seb/
                    </a>{" "}
                    ,{" "}
                    <a href="https://smartodr.in/login" target="_blank">
                      https://smartodr.in
                    </a> */}
                    [3] Never Share Your Debit Card/Credit Card/Net banking
                    Credential/ And Demat Credential With Any Of Our Employee.
                    [4] We accept Payment Only In Registered Bank Account. [5]
                    We Do Not Offer Any Assured/ 100% Profitable Calls and we
                    are not taking profit sharing. [6] Investing In The Market
                    Is subject To market Risk. Hence Read Our Disclosure &
                    Disclaimer. And Taking Care Before Investing.
                  </b>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* avfuhhhhhhhhhhhhhhhhhxck m, */}
      <section class="at-sectionspace at-overflowhidden at-haslayout">
        <div class="container">
          <div class="row">
            <div class="col-md-4 pull-left">
              <section
                id="at-companyhistory"
                class="at-companyhistory at-aboutsection"
              >
                <div class="at-sectionhead">
                  <div class="at-description">
                    <img
                      src="/25.jpg"
                      class="img-responsive"
                      style={{ height: "330px" }}
                    />
                  </div>
                </div>
              </section>
            </div>
            <div class="col-md-8 col-lg-8 pull-left">
              <section
                id="at-companyhistory"
                class="at-companyhistory at-aboutsection"
              >
                <div class="at-sectionhead">
                  <div class="at-description">
                    <h2>Who we are?</h2>
                    <p>
                      Brightways financial research house carrying out
                      operations in the intraday as well as delivery calls in
                      Indian Equities and Derivatives market. NSE & BSE
                      recommendations Live through SMS & Chat services we
                      provide proper technical and fundamental calls to the our
                      clients and helps blinding wealth and increasing their
                      capitals.
                    </p>
                    <p>
                      Bright ways is a SEBI registered (Securities and Exchange
                      Board of India) registered Research Analyst firm{" "}
                      <b> SEBI Reg No: INH000010566based</b> in Bangalore, we
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
            <div class="col-md-6 col-lg-6 pull-left">
              <h4>
                <b>PRICING SYSTEM</b>
              </h4>
              <p>
                In our unique package pricing method, we have Daily Special
                discount offers available
              </p>
              <br />
            </div>
            <div class="col-md-6 col-lg-6 pull-left">
              <h4>
                <b>PREMIUM SERVICES</b>
              </h4>
              <p>Customised services available for HNI clients.</p>
              <p>
                In the event of you looking for stock tips for today or NSE
                Intraday trading tips we at Brightways provide the same expert
                advisory services in Equity, Future ,Options ,Nifty & Bank
                Nifty, these trading tips will be Intraday as well as
                positional.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*++++++++++++++++++++++++++++++++++++++++++ */}
      <section id="panel5" class="at-testimonialsvtwo at-haslayout">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="at-testimonials mb-5">
                <div class="at-sectionhead">
                  <div class="at-sectiontitleborder">
                    <h2>Our goals</h2>
                  </div>
                </div>
              </div>

              <p className="mb-5">
                We aim to do this by being responsive towards our clients and
                strive relentlessly to improve. We at Bright ways Financials
                want to be worthy of our customer’s trust and provide them with
                the finest Stock market tips and gain more with us
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 2ofi0ijrwdkms===================== */}
      <section>
        <div className="container at-services mt-5 mb-3">
          <div class="at-sectiontitleborder">
            <h2>Our Services</h2>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={15}
            nav={false}
            responsive={responsive}
          >
            <div class="item">
              <div class="at-service">
                <figure class="at-featureimg">
                  <a href="#">
                    <img
                      src="/Image/6.jpg"
                      height="325"
                      width="397"
                      alt="Commodities"
                    />
                  </a>
                </figure>
                <div class="at-title">
                  <h3>Commodities</h3>
                </div>
                <div class="at-description">
                  <p>Commodities - Gold and Sliver.</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="at-service">
                <figure class="at-featureimg">
                  <a href="#">
                    <img
                      src="/Image/2.jpg"
                      height="325"
                      width="397"
                      alt="Commodities"
                    />
                  </a>
                </figure>
                <div class="at-title">
                  <h3>Commodities</h3>
                </div>
                <div class="at-description">
                  <p>Commodities - Gold and Sliver.</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="at-service">
                <figure class="at-featureimg">
                  <a href="#">
                    <img
                      src="/Image/3.jpg"
                      height="325"
                      width="397"
                      alt="Commodities"
                    />
                  </a>
                </figure>
                <div class="at-title">
                  <h3>Commodities</h3>
                </div>
                <div class="at-description">
                  <p>Commodities - Gold and Sliver.</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="at-service">
                <figure class="at-featureimg">
                  <a href="#">
                    <img
                      src="/Image/4.jpg"
                      height="325"
                      width="397"
                      alt="Commodities"
                    />
                  </a>
                </figure>
                <div class="at-title">
                  <h3>Commodities</h3>
                </div>
                <div class="at-description">
                  <p>Commodities - Gold and Sliver.</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="at-service">
                <figure class="at-featureimg">
                  <a href="#">
                    <img
                      src="/Image/5.jpg"
                      height="325"
                      width="397"
                      alt="Commodities"
                    />
                  </a>
                </figure>
                <div class="at-title">
                  <h3>Commodities</h3>
                </div>
                <div class="at-description">
                  <p>Commodities - Gold and Sliver.</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="at-service">
                <figure class="at-featureimg">
                  <a href="#">
                    <img
                      src="/Image/7.jpg"
                      height="325"
                      width="397"
                      alt="Commodities"
                    />
                  </a>
                </figure>
                <div class="at-title">
                  <h3>Commodities</h3>
                </div>
                <div class="at-description">
                  <p>Commodities - Gold and Sliver.</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* ========================================================= */}
      <section>
        <section
          class="at-parallex at-parallexwhychooseus padding0px mt-5 mb-5"
          style={{
            backgroundImage: `linear-gradient(rgb(2 5 18 / 52%),rgb(12 12 12 / 54%)),
        url('/2.avif')`,
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="at-sectionhead">
                  <h2>Are You Ready to Succeed? Be ready with us!</h2>
                  <p>
                    No fluff, no ‘advanced trainings’, Just real trades that
                    either work or not. Honest and simple. Why Delay The Life
                    You Want?{" "}
                  </p>
                  <a
                    href="#"
                    class="btn btn-success"
                    style={{ textDecoration: "none", fontSize: "18px" }}
                  >
                    Start Receiving Our Trade Alerts Today{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ============================== */}
      <section>
        <div className="container at-services mt-5 mb-3">
          <div class="at-sectiontitleborder mb-4">
            <h2>Client Testimonials</h2>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={25}
            nav={false}
            responsive={responsive}
          >
            <div class="item">
              <div class="at-testimonial">
                <blockquote>
                  <q>excellent tips provided in banknifty with good support</q>
                </blockquote>
                <h3>Nagbushan</h3>
              </div>
            </div>
            <div class="item">
              <div class="at-testimonial">
                <blockquote>
                  <q>good Advisory in India</q>
                </blockquote>
                <h3>Kumar S</h3>
              </div>
            </div>
            <div class="item">
              <div class="at-testimonial">
                <blockquote>
                  <q>Best services and affordable rate.</q>
                </blockquote>
                <h3>'Ramesh'</h3>
              </div>
            </div>
            <div class="item">
              <div class="at-testimonial">
                <blockquote>
                  <q>Good Features of services and quick response</q>
                </blockquote>
                <h3>Ranjan Singh</h3>
              </div>
            </div>
            <div class="item">
              <div class="at-testimonial">
                <blockquote>
                  <q>excellent tips provided in banknifty with good support</q>
                </blockquote>
                <h3>Nagbushan</h3>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      {/* modal */}
      {/* <Button variant="success" className="fds" onClick={handleShow}>
        Complaint Board
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Number Of Complaints</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="" style={{ overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>At the beginning of the month</th>
                  <th>Received during the month</th>
                  <th>Resolved during the month</th>
                  <th>Pending at the end of the month</th>
                  <th>Reasons for pendency</th>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
