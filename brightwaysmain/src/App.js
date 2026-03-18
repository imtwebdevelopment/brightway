import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DisclosureDisclaimer from "./Components/DisclosureDisclaimer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Kyc from "./Components/Kyc";
import Policy from "./Components/Policy";
import Service from "./Components/Service";
import Complaint from "./Components/Complaint";
import Investor from "./Components/Investor";
import Complaint2 from "./Components/Complaint2";
import BasicStockCash from "./Components/BasicStockCash";
import BasicIndexOption from "./Components/BasicIndexOption";
import HniIndexOption from "./Components/HniIndexOption";
import HniStockOption from "./Components/HniStockOption";
import MomentumTrade from "./Components/MomentumTrade";
import ProCommodity from "./Components/ProCommodity";
import StockCashPro from "./Components/StockCashPro";
import HNIStockFuturePro from "./Components/HNIStockfuturepro";

/* ⭐ Added Import */
import PaymentPage from "./Components/Payment";

function App() {
  return (
    <>
      <div style={{ overflow: "clip" }}>
        <BrowserRouter>

          {/* ✅ SKIP LINK ADDED */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <Home />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <About />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/service"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <Service />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/investor"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <Investor />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/complaint"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <Complaint2 />
                  </div>
                  <Footer />
                </>
              }
            />

            {/* Service Dropdown */}

            <Route
              path="/basic-stock-cash"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <BasicStockCash />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/basic-index-option"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <BasicIndexOption />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/hni-index-option"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <HniIndexOption />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/hni-stock-option"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <HniStockOption />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/momentum-trade"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <MomentumTrade />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/hni-stock-future-pro"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <HNIStockFuturePro />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/pro-commodity"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <ProCommodity />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/stock-cash-pro"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <StockCashPro />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <Contact />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/policy"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <Policy />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/disclosure-disclaimer"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <DisclosureDisclaimer />
                  </div>
                  <Footer />
                </>
              }
            />

            <Route
              path="/kyc"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <Kyc />
                  </div>
                  <Footer />
                </>
              }
            />

            {/* ⭐⭐⭐ Payment Route Added */}
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <div id="main-content">
                    <PaymentPage />
                  </div>
                  <Footer />
                </>
              }
            />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;