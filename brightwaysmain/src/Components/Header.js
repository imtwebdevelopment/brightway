import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import "./header.css";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navigation, setnavigation] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setnavigation("fixed top-0 left-0 z-50")
        : setnavigation("relative");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="header-0">
        <nav className="navigation">
          <a href="/" className="brand-name">
            <img
              src="/logo2.jpg"
              className="roy"
              alt="logo"
              style={{
                width: "151px",
                height: "101px",
              }}
            />
          </a>

          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
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
                    variant=""
                    id="dropdown-basic"
                    className="text-dark"
                  >
                    <a href="#" className="text-dark">Service ▼</a>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white">
                    <Dropdown.Item href="/service">
                      All Services
                    </Dropdown.Item>
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
                <a href="/disclosure-disclaimer">
                  Disclosure & Disclaimer
                </a>
              </li>

              <li>
                <a href="/contact">Contact us</a>
              </li>

              {/* ⭐ Payment Button Added */}
              <li>
                <a href="/payment">
                  <Button variant="warning">Payment</Button>
                </a>
              </li>

              <li>
                <a href="/kyc">
                  <Button variant="success">KYC</Button>
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
