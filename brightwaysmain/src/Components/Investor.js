import React from 'react';
import './DisclosureDisclaimer.css';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        {title}
      </div>
      <div className={`accordion-content ${isActive ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default function Investor() {
  return (
    <div className="disclaimer-container">
      <div>
        <img
          src="../investor.jpg"
          alt="Investor"
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      <h1 className="disclaimer-title">
        Investor Charter in respect of Research Analyst (RA)
      </h1>

      <div className="accordion">
        <AccordionItem
          title="A. Vision and Mission Statements for investors"
          content={
            <div>
              <h3>VISION:</h3>
              <ul>
                <li>Invest with knowledge & safety.</li>
              </ul>
              <h3>MISSION:</h3>
              <ul>
                <li>
                  Every investor should be able to invest in right investment
                  products based on their needs, manage and monitor them to meet
                  their goals, access reports and enjoy financial wellness.
                </li>
              </ul>
            </div>
          }
        />

        <AccordionItem
          title="B. Details of business transacted by the Research Analyst with respect to the ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566:"
          content={
            <ul>
              <li>To provide an independent, unbiased view on securities.</li>
              <li>
                To offer unbiased recommendations, disclosing the financial
                interests in recommended securities.
              </li>
              <li>
                To provide research recommendations, based on analysis of
                publicly available information and known observations.
              </li>
              <li>To conduct audit annually</li>
              <li>
                To ensure that all advertisements/ marketing/ promotional
                material are in adherence to the provisions of the Advertisement
                Code for Research Analysts.
              </li>
              <li>
                To maintain records of interactions, with all clients including
                prospective clients (prior to onboarding), where any
                conversation related to the research services has taken place.
              </li>
            </ul>
          }
        />

        <AccordionItem
          title="C. Details of services provided to investors (No Indicative Timelines)"
          content={
            <div>
              <h4>Onboarding of Clients</h4>
              <ul>
                <li>Sharing of terms and conditions of research services</li>
                <li>Completing KYC of clients</li>
              </ul>
              <h4>Disclosure to Clients</h4>
              <ul>
                <li>
                  To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any
                </li>
                <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
                <li>To disclose, while distributing a third-party research report, any material conflict of interest of such third-party research provider or provide web address that directs a recipient to the relevant disclosures</li>
                <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>

                <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                <li>To maintain confidentiality w.r.t publication of the research report until it is made available in the public domain.</li>
                li
              </ul>
            </div>
          }
        />

        <AccordionItem
          title="D. Details of grievance redressal mechanism and how to access it"
          content={
            <div>
              <h4>
                1. Investor can lodge complaint/grievance against Research
                Analyst in the following ways:
              </h4>
              <p>
                <strong>
                  Mode of filing the complaint with research analyst:
                </strong>
              </p>
              <p>
                In case of any grievance / complaint, an investor may approach
                the concerned Research Analyst who shall strive to redress the
                grievance immediately, but not later than 21 days of the receipt
                of the grievance.
              </p>

              <p>
                <strong>
                  Mode of filing the complaint on SCORES or with Research
                  Analyst Administration and Supervisory Body (RAASB):
                </strong>
              </p>
              <ol type="i">
                <li>
                  SCORES 2.0 (a web based centralized grievance redressal system
                  of SEBI for facilitating effective grievance redressal in
                  time-bound manner) (
                  <a
                    href="https://scores.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://scores.sebi.gov.in
                  </a>
                  )
                  <p>
                    Two level review for complaint/grievance against Research
                    Analyst:
                  </p>
                  <ul>
                    <li>First review done by designated body (RAASB)</li>
                    <li>Second review done by SEBI</li>
                  </ul>
                </li>
                <li>Email to designated email ID of RAASB</li>
              </ol>

              <h4>
                2. If the Investor is not satisfied with the resolution provided
                by the Market Participants, then the Investor has the option to
                file the complaint/ grievance on SMARTODR (
                <a
                  href="https://smartodr.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://smartodr.in/
                </a>
                ) platform for its resolution through online conciliation or
                arbitration.
              </h4>

              <p>
                With regard to physical complaints, investors may send their
                complaints to:
              </p>
              <p>
                Office of Investor Assistance and Education,
                <br />
                Securities and Exchange Board of India,
                <br />
                SEBI Bhavan, Plot No. C4-A, 'G' Block,
                <br />
                Bandra-Kurla Complex, Bandra (E),
                <br />
                Mumbai - 400 051
              </p>
            </div>
          }
        />

        <AccordionItem
          title="E. Rights of investors"
          content={
            <ul>
              <li>Right to Privacy and Confidentiality</li>
              <li>Right to Transparent Practices</li>
              <li>Right to fair and Equitable Treatment</li>
              <li>Right to Adequate Information</li>
              <li>
                Right to Initial and Continuing Disclosure - Right to receive
                information about all the statutory and regulatory disclosures
              </li>
              <li>Right to Fair & True Advertisement</li>
              <li>
                Right to Awareness about Service Parameters and Turnaround Times
              </li>
              <li>Right to be informed of the timelines for each service</li>
              <li>Right to be Heard and Satisfactory Grievance Redressal</li>
              <li>Right to have timely redressal</li>
              <li>Right to Exit from Financial product or service</li>
              <li>
                Right to receive clear guidance and caution notice when dealing
                in Complex and High-Risk Financial Products and Services
              </li>
              <li>
                Additional Rights to vulnerable consumers - Right to get access
                to services in a suitable manner even if differently abled
              </li>
              <li>
                Right to provide feedback on the financial products and services
                used
              </li>
              <li>
                Right against coercive, unfair, and one-sided clauses in
                financial agreements
              </li>
              <>
                Right to enforceability and holding the Research Analyst
                responsible for monitoring, enforcing investor rights.
              </>
            </ul>
          }
        />

        <AccordionItem
          title="F. Expectations from the investors (Responsibilities of investors)"
          content={
            <ul>
              <h2>Do’s:</h2>
              <li>Always deal with SEBI-registered Research Analysts.</li>
              <li>
                Ensure that the Research Analyst has a valid registration
                certificate.
              </li>
              <li>
                Check for SEBI registration number. Please refer to the list of
                all SEBI registered Research Analyst which is available on SEBI
                website in the following{" "}
                <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi =yes&intmId=14.">
                  https://scores.sebi.gov.in
                </a>
              </li>
              <li>
                Always pay attention towards disclosures made in the research
                reports before investing.
              </li>
              <li>
                Pay your Research Analyst through banking channels only and
                maintain duly signed receipts mentioning the details of your
                payments. You may make payment of fees through Centralized Fee
                Collection Mechanism (CeFCoM) of RAASB if research analyst has
                opted for the mechanism.
              </li>
              <li>
                Before buying/ selling securities or applying in public offer,
                check for the research recommendation provided by your Research
                Analyst.
              </li>
              <li>
                Ask all relevant questions and clear your doubts with your
                Research Analyst before acting on recommendation.
              </li>
              <li>
                Seek clarifications and guidance on research recommendations
                from your Research Analyst, especially if it involves complex
                and high risk financial products and services.
              </li>
              <li>
                Always be aware that you have the right to stop availing the
                service of a Research Analyst as per the terms of service agreed
                between you and your Research Analyst.
              </li>
              <li>
                Always be aware that you have the right to provide feedback to
                your Research Analyst in respect of the services received.
              </li>
              <li>
                Always be aware that you will not be bound by any clause,
                prescribed by the research analyst, which is contravening any
                regulatory provisions.
              </li>
              <li>
                Inform SEBI about Research Analyst offering assured or
                guaranteed returns.
              </li>

              <h2>Don’ts:</h2>
              <li>
                Do not provide funds for investment to the Research Analyst.
              </li>
              <li>
                {" "}
                Don’t fall prey to luring advertisements or market rumours.
              </li>
              <li>
                Do not get attracted to limited period discount or other
                incentive, gifts, etc. offered by Research Analyst.
              </li>
              <li>
                Do not share login credential and password of your trading,
                demat or bank accounts with the Research Analyst.
              </li>
            </ul>
          }
        />
      </div>
      <br />
      {/* <a className='main'>Investor Charter in respect of Research Analyst (RA) <h6>:(ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566)</h6></a> */}
      <a>
        {" "}
        <h3 style={{ color: "green" }}> Research Analyst (RA)</h3>{" "}
        <h6>
          :ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566
        </h6>
      </a>

      <p>
        For details about Customer Support, Compliance Officer, Research
        Services, Risk Disclosures, Disclaimers, Refund Policies, Terms and
        Conditions, and Others, visit our website:{" "}
        <a href=" https://www.brightwaysfinancial.com/">
          https://www.brightwaysfinancial.com
        </a>{" "}
      </p>
    </div>
  );
}
