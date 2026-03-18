import React from 'react';
import './Investor.css';

const AccordionItem = ({ id, title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="accordion-item">
      <h2 className="accordion-heading">
        <button
          className="accordion-header"
          onClick={() => setIsActive(!isActive)}
          aria-expanded={isActive}
          aria-controls={`section-${id}`}
          id={`accordion-${id}`}
        >
          {title}
        </button>
      </h2>

      <div
        id={`section-${id}`}
        role="region"
        aria-labelledby={`accordion-${id}`}
        className={`accordion-content ${isActive ? 'active' : ''}`}
        hidden={!isActive}
      >
        {content}
      </div>
    </div>
  );
};

export default function Investor() {
  return (
    <div className="disclaimer-container">

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <img
          src="../investor.jpg"
          alt="Investor related financial services banner"
          className="banner-img"
        />
      </header>

      <main id="main-content">
        <h1 className="disclaimer-title">
          Investor Charter in respect of Research Analyst (RA)
        </h1>

        <div className="accordion">

          <AccordionItem
            id="a"
            title="A. Vision and Mission Statements for investors"
            content={
              <div>
                <h3>Vision</h3>
                <ul>
                  <li>Invest with knowledge & safety.</li>
                </ul>

                <h3>Mission</h3>
                <ul>
                  <li>
                    Every investor should be able to invest in right investment
                    products based on their needs.
                  </li>
                </ul>
              </div>
            }
          />

          <AccordionItem
            id="b"
            title="B. Details of business transacted by the Research Analyst"
            content={
              <ul>
                <li>Independent view on securities</li>
                <li>Unbiased recommendations</li>
                <li>Research based analysis</li>
                <li>Annual audit</li>
              </ul>
            }
          />

          <AccordionItem
            id="c"
            title="C. Details of services provided to investors"
            content={
              <div>
                <h3>Onboarding</h3>
                <ul>
                  <li>Terms & conditions</li>
                  <li>KYC completion</li>
                </ul>
              </div>
            }
          />

          <AccordionItem
            id="d"
            title="D. Grievance redressal mechanism"
            content={
              <div>
                <p>Raise complaints within 21 days.</p>

                <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer">
                  SEBI SCORES
                </a>
              </div>
            }
          />

          <AccordionItem
            id="e"
            title="E. Rights of investors"
            content={
              <ul>
                <li>Privacy</li>
                <li>Transparency</li>
                <li>Fair treatment</li>
              </ul>
            }
          />

          <AccordionItem
            id="f"
            title="F. Responsibilities of investors"
            content={
              <div>
                <h3>Do’s</h3>
                <ul>
                  <li>Verify registration</li>
                  <li>Check disclosures</li>
                </ul>

                <h3>Don’ts</h3>
                <ul>
                  <li>Don't share credentials</li>
                </ul>
              </div>
            }
          />

        </div>

        <section className="ra-section">
          <h2>Research Analyst Details</h2>
          <p>
            ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566
          </p>
        </section>
        <p>
          For details about Customer Support, Compliance Officer, Research Services, Risk Disclosures, Disclaimers, Refund Policies, Terms and Conditions, and Others, visit our
        </p>
        <p className="footer-link">
          Visit:
          <a href="https://www.brightwaysfinancial.com/" target="_blank" rel="noopener noreferrer">
            Brightways Financial
          </a>
        </p>

      </main>
    </div>
  );
}