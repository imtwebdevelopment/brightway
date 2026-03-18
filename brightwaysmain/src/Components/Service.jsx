import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Images
import basicstockcash from "../assets/basicstackcash.png";
import indexoption from "../assets/indexoption.png";
import momentumtrading from "../assets/momentumtrading.png";
import stockoptiontrading from "../assets/stockoptionhni.png";
import HNIStockFuturePro from "../assets/HNI Stock Future Pro.png";
import CommodityPro from "../assets/commoditypro.webp";
import stockcashpro from "../assets/stockoptionhni.png";
import hniindexoption from "../assets/HNI Stock Future Pro.png";

const services = [
  { name: "Basic Stock Cash", description: "Get expert recommendations on stock trading with real-time insights.", link: "/basic-stock-cash", image: basicstockcash },
  { name: "Stock Cash Pro", description: "Advanced stock cash analysis with GST 18% applied for professional traders.", link: "/stock-cash-pro", image: stockcashpro },
  { name: "Basic Index Option", description: "Simplified index options strategies to maximize your portfolio returns.", link: "/basic-index-option", image: indexoption },
  { name: "HNI Index Option Pro", description: "High Net Worth Individual (HNI) tailored index trading solutions.", link: "/hni-index-option", image: hniindexoption },
  { name: "HNI Stock Option Pro", description: "Exclusive stock option strategies designed for elite investors.", link: "/hni-stock-option", image: stockoptiontrading },
  { name: "HNI Stock Future Pro", description: "Futures trading insights for HNI investors with premium support.", link: "/hni-stock-future-pro", image: HNIStockFuturePro },
  { name: "Pro Commodity", description: "Expert commodity trading recommendations for diversified investments.", link: "/pro-commodity", image: CommodityPro },
  { name: "Momentum Trade", description: "Short-term trade setups focusing on momentum-based strategies.", link: "/momentum-trade", image: momentumtrading }
];

function Service() {
  return (
    <>
      {/* ✅ Skip Link (VERY IMPORTANT for accessibility) */}
      <a href="#main-content" className="visually-hidden-focusable">
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-primary text-white text-center py-4">
        <h1>Our Services</h1>
        <p>Explore our premium financial research services</p>
      </header>

      {/* Main Content */}
      <main id="main-content">
        <Container className="mt-5">

          {/* Who We Are */}
          <section aria-labelledby="who-we-are">
            <Row className="mb-4">
              <Col>
                <h2 id="who-we-are" className="text-center">
                  Who We Are?
                </h2>
                <p>
                  Brightways financial research house operates in intraday and delivery calls in the Indian Equities and Derivatives market. We provide NSE & BSE recommendations via SMS & chat services, offering both technical and fundamental calls to help our clients build wealth and increase capital.
                </p>
                <p>
                  Brightways is a SEBI-registered Research Analyst firm (SEBI Reg No: INH000010566) based in Bangalore. Our goal is to provide quality advice on intraday and positional trading, ensuring maximum returns for our clients.

                </p>
              </Col>
            </Row>
          </section>

          {/* Services Title */}
          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-center my-4">
              Empower Your Business with Our Services
            </h2>

            <Row className="mt-3">
              {services.map((service, index) => (
                <Col md={4} sm={6} xs={12} key={index} className="mb-4">

                  {/* ✅ Article for each card */}
                  <article>
                    <Card className="shadow text-center h-100">

                      {/* Image */}
                      <div
                        className="bg-light"
                        style={{
                          height: "150px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <img
                          src={service.image}
                          alt={`${service.name} service`}
                          style={{ maxHeight: "100%", maxWidth: "100%" }}
                        />
                      </div>

                      <Card.Body>
                        {/* ✅ Proper heading hierarchy */}
                        <h3 className="h5">{service.name}</h3>

                        <p>{service.description}</p>

                        {/* ✅ Accessible button name */}
                        <Button
                          variant="primary"
                          href={service.link}
                          aria-label={`Know more about ${service.name}`}
                        >
                          Know More
                        </Button>
                      </Card.Body>

                    </Card>
                  </article>

                </Col>
              ))}
            </Row>
          </section>

        </Container>
      </main>
    </>
  );
}

export default Service;