import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "./header.css";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <>
      <div className="header-0">
        <nav
          className="navigation"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a href="/" className="brand-name">
            <img
              src="/logo2.jpg" 
              className="roy"
              alt="Brightways"
              style={{ width: "160px" }}
            />
          </a>

          {/* Hamburger for Mobile */}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    bsPrefix="custom-dropdown-toggle"
                    id="dropdown-basic"
                  >
                    Service ▼
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/service">All Services</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <a href="/investor">Investor Charter</a>
              </li>

              <li>
                <a href="/complaint">Complaint Table</a>
              </li>

              <li>
                <a href="/about">About us</a>
              </li>

              <li>
                <a href="/disclosure-disclaimer">Disclosure & Disclaimer</a>
              </li>

              <li>
                <a href="/contact">Contact us</a>
              </li>

              {/* Payment Button (Yellow) */}
              <li>
                <a href="/payment" className="btn-payment">
                  Payment
                </a>
              </li>

              {/* KYC Button (Green) */}
              <li>
                <a href="/kyc" className="btn-kyc">
                  KYC
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;