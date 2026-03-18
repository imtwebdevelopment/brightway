
import React, { useState } from 'react';
import './DisclosureDisclaimer.css';

// ✅ Accessible Accordion Item
const AccordionItem = ({ title, content, id }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      {/* ✅ button for keyboard accessibility */}
      <button
        className="accordion-header"
        onClick={toggleAccordion}
        aria-expanded={isActive}
        aria-controls={`section-${id}`}
        id={`accordion-${id}`}
      >
        {title}
      </button>

      {/* ✅ Accessible content region */}
      <div
        id={`section-${id}`}
        role="region"
        aria-labelledby={`accordion-${id}`}
        hidden={!isActive}
        className={`accordion-content ${isActive ? 'active' : ''}`}
      >
        {content}
      </div>
    </div>
  );
};

export default function DisclosureDisclaimer() {
  return (
    <>
      {/* ✅ Skip Link */}
      <a href="#main-content" className="visually-hidden-focusable">
        Skip to main content
      </a>

      {/* ✅ Main Landmark */}
      <main className="disclaimer-container" id="main-content">
        <h1 className="disclaimer-title">Disclaimer and Disclosures</h1>

        <div className="card">
          <h2 className="card-title">Market Risks and Warnings</h2>
          <div className="card-content">
            <ul>
              <li>MARKET RISKS WARNING: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing."</li>
              <li>LOSS POSSIBILITY: Market risks may result in partial or permanent loss of investments under certain market conditions.</li>
              <li>ILLUSTRATIVE PURPOSES: Securities mentioned are for illustration only and are not recommendations.</li>
              <li>SEBI REGISTRATION: Registration granted by SEBI and certification from NISM do not guarantee the performance of the intermediary nor assure returns to investors.</li>
              <li>PAST PERFORMANCE: Past performance is not indicative of future results.</li>
              <li>EDUCATIONAL PURPOSES: The information on social media is for educational purposes, not investment advice. Investors should consult their advisor before making decisions.</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">SEBI Specified Mechanism</h2>
          <div className="card-content">
            <p>
              All fee payments for research services must be made through online mode and in 
              "ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES" Bank account. 
              Payments made outside this mechanism are not considered as payment for services 
              under SEBI regulations. No grievances in this regard will be entertained by SEBI 
              or its recognized regulatory bodies.
            </p>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Important Notices</h2>
          <div className="card-content">
            <ul>
              <li>NO WARRANTIES: The Research Analyst does not guarantee the accuracy, results, or reliability of content on its website, including merchantability, suitability, and non-infringement.</li>
              <li>EXERCISE CAUTION: We provide research analysis and specific securities recommendations but do not offer portfolio management services, personal account handling, profit sharing, or risk-profiling-based investment advisory services.</li>

              <li>
                Report any unethical practices to our support/compliance team:{" "}
                <a href="mailto:support@brightwaysfinancial.com">
                  support@brightwaysfinancial.com
                </a>{" "}
                |{" "}
                <a href="tel:+916363360542">
                  +91 6363360542
                </a>{" "}
                or SEBI Toll-Free Number{" "}
                <a href="tel:1800227575">1800227575</a>
              </li>

              <li>
                Any unethical practice contact our mail id{" "}
                <a href="mailto:support@brightwaysfinancial.com">
                  support@brightwaysfinancial.com
                </a>{" "}
                contact:{" "}
                <a href="tel:+916363360542">
                  +91 6363360542
                </a>
              </li>

              <li>Research analyst or his associates or his relatives have no financial interest in the subject company.</li>

              <li>Research analyst or his associates or relatives have no actual/beneficial ownership of one percent or more securities of the subject company, at the end of the month immediately preceding the date of publication of the research report or date of the public appearance or research recommendation.</li>

              <li>Research analyst or his associates or relatives has no connection or association of any sort with any issuer of products/securities recommended herein.</li>

              <li>Research analyst or his associates or his relatives has no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/securities, including any material information or facts that might compromise his objectivity or independence in the carrying on of research and recommendations services.</li>

              <li>Research analyst or his associates has not received any kind of remuneration or consideration form the products/securities recommended herein.</li>

              <li>Research analyst or his associates have not received any compensation from the subject company in past 12 months.</li>

              <li>Research analyst or his associates have not managed or co-managed the public offering of Subject Company in past 12 months.</li>

              <li>Research analyst or his associates have not received any compensation for investment banking or merchant banking or brokerage services from the subject company in past 12 months.</li>

              <li>Research analyst or his associates have received any compensation for products or services other than investment banking or merchant banking or brokerage services from the subject company in past twelve months.</li>

              <li>Research analyst or his associates have not received any compensation or other benefits from the subject company or third party in connection with the research report or research recommendations.</li>

              <li>Research analyst or his associates have not received any compensation for products or services from the subject company in past 12 months.</li>

              <li>The subject company is or was not a client of Research analyst or his associates during twelve months preceding the date of distribution of the research report and recommendation services provided.</li>

              <li>Research Analysts or his associates has not served as an officer, director or employee of the subject company.</li>

              <li>Research Analysts has not been engaged in market making activity of the subject company.</li>

              <li>Research Analysts services is not having 100% accuracy package. Investment in securities market are subject to risk, Read all the related documents carefully before investing.</li>

              <li>There is no avenue for claiming profit/losses incurred based on the recommendations in the research report and Financial Interest; NO, and past performance is not indicative of future results.</li>

              <li>
                For more disclosure & disclaimers, visit:{" "}
                <a href="https://www.brightwaysfinancial.com" target="_blank" rel="noopener noreferrer">
                  www.brightwaysfinancial.com
                </a>
              </li>

              <li>
                Registration granted by SEBI and certification from NISM We do not provide any assurances or guarantees regarding returns on investments or trading., If anyone claims to do so on our behalf, don’t hesitate to get in touch with our Compliance Officer through our mail:{" "}
                <a href="mailto:support@brightwaysfinancial.com">
                  support@brightwaysfinancial.com
                </a>{" "}
                for assistance.
              </li>

              <li>We strongly recommend that you read all information carefully to avoid any future conflict of interest.</li>
            </ul>
          </div>
        </div>

        {/* ✅ Accessible Accordion */}
        <div className="accordion">
          <AccordionItem
            id="1"
            title="Business Activity"
            content={
              <>
                <p>"ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES" is engaged in the business of Research Analyst activities by providing Buy/Sell/Hold calls or other ratings defined to their clients.</p>
                <p>"ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES" is registered as a Research Analyst under SEBI (Research Analyst) Regulations, 2014. SEBI Reg. No. INH000010566</p>
              </>
            }
          />

          <AccordionItem
            id="2"
            title="Disciplinary History"
            content={
              <p>There has been no instance of any Disciplinary action, penalty, etc. levied/passed by any regulation/administrative agencies against ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566 and its Partners.</p>
            }
          />

          <AccordionItem
            id="3"
            title="Terms & Conditions of Research Report"
            content={
              <ul>
                <li>The Research report is issued to the registered clients.</li>
                <li>The Research Report or Research recommendations is based on facts, figures, and information that are considered true, correct, and reliable.</li>
                <li>We have also reviewed the research report or Research recommendations for any untrue statements of material facts or any false or misleading information.</li>
                <li>The report or recommendations are prepared solely for informational purposes and do not constitute an offer document or solicitation to buy or sell or hold or subscribe for securities or other financial instruments for clients.</li>
              </ul>
            }
          />

          <AccordionItem
            id="4"
            title="Risk Disclosures"
            content={
              <ul>
                <li>ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566, its partners, employees, officers, and its affiliates are not responsible for any loss or damage that may arise.</li>
                <li>Investors may lose his/her entire amount or Investments under certain market conditions.</li>
                <li>The research report does not take into account any specific investment objective.</li>
                <li>The client should act according to his/her own risk appetite and financial position.</li>
              </ul>
            }
          />

          <AccordionItem
            id="5"
            title="Disclosures of Material Information"
            content={
              <ul>
                <li>No direct or indirect financial interest in the subject company.</li>
                <li>No material conflict of interest at the time of publication.</li>
                <li>No ownership of 1% or more securities.</li>
                <li>No compensation received from the subject company.</li>
                <li>No investment banking services provided.</li>
                <li>No market-making activity involvement.</li>
              </ul>
            }
          />
        </div>
      </main>
    </>
  );
}
