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
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                  <Footer />
                </>
              }
            />

            <Route
              path="/service"
              element={
                <>
                  <Header />
                  <Service />
                  <Footer />
                </>
              }
            />

            <Route
              path="/investor"
              element={
                <>
                  <Header />
                  <Investor />
                  <Footer />
                </>
              }
            />

            <Route
              path="/complaint"
              element={
                <>
                  <Header />
                  <Complaint2 />
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
                  <BasicStockCash />
                  <Footer />
                </>
              }
            />

            <Route
              path="/basic-index-option"
              element={
                <>
                  <Header />
                  <BasicIndexOption />
                  <Footer />
                </>
              }
            />

            <Route
              path="/hni-index-option"
              element={
                <>
                  <Header />
                  <HniIndexOption />
                  <Footer />
                </>
              }
            />

            <Route
              path="/hni-stock-option"
              element={
                <>
                  <Header />
                  <HniStockOption />
                  <Footer />
                </>
              }
            />

            <Route
              path="/momentum-trade"
              element={
                <>
                  <Header />
                  <MomentumTrade />
                  <Footer />
                </>
              }
            />

            <Route
              path="/hni-stock-future-pro"
              element={
                <>
                  <Header />
                  <HNIStockFuturePro />
                  <Footer />
                </>
              }
            />

            <Route
              path="/pro-commodity"
              element={
                <>
                  <Header />
                  <ProCommodity />
                  <Footer />
                </>
              }
            />

            <Route
              path="/stock-cash-pro"
              element={
                <>
                  <Header />
                  <StockCashPro />
                  <Footer />
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Contact />
                  <Footer />
                </>
              }
            />

            <Route
              path="/policy"
              element={
                <>
                  <Header />
                  <Policy />
                  <Footer />
                </>
              }
            />

            <Route
              path="/disclosure-disclaimer"
              element={
                <>
                  <Header />
                  <DisclosureDisclaimer />
                  <Footer />
                </>
              }
            />

            <Route
              path="/kyc"
              element={
                <>
                  <Header />
                  <Kyc />
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
                  <PaymentPage />
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
