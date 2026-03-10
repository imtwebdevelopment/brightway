import React from "react";

function Contact() {

const tableData = [
    {
      designation: "Customer Care",
      name: "Anitha M",
      address: "Site No:06, 2nd Floor, 13th Cross,  1st Main Ramaiah Reddy Road,Near Shopping Land Super Market Rupena Agrahara ,Bangalore 560068",
      contact: "+91 6363 360542",
      email: "support@brightwaysfinancial.com",
      hours: "From 10:00 AM to 5:00 PM (Holidays Off)",
    },
    {
      designation: "Head of Customer Care",
      name: "Anitha M",
      address: "Site No:06, 2nd Floor, 13th Cross,  1st Main Ramaiah Reddy Road,Near Shopping Land Super Market Rupena Agrahara ,Bangalore 560068",
      contact: "+91 6363 360542",
      email: "support@brightwaysfinancial.com",
      hours: "From 10:00 AM to 5:00 PM (Holidays Off)",
    },
    {
      designation: "Compliance Officer",
      name: "Anitha M",
      address: "Site No:06, 2nd Floor, 13th Cross,  1st Main Ramaiah Reddy Road,Near Shopping Land Super Market Rupena Agrahara ,Bangalore 560068",
      contact: "+91 6363 360542",
      email: "support@brightwaysfinancial.com",
      hours: "From 10:00 AM to 5:00 PM (Holidays Off)",
    },
    {
      designation: "CEO",
      name: "Anitha M",
      address: "Site No:06, 2nd Floor, 13th Cross,  1st Main Ramaiah Reddy Road,Near Shopping Land Super Market Rupena Agrahara ,Bangalore 560068",
      contact: "+91 6363 360542",
      email: "support@brightwaysfinancial.com",
      hours: "From 10:00 AM to 5:00 PM (Holidays Off)",
    },
    {
      designation: "Principal Officer",
      name: "Anitha M",
      address: "Site No:06, 2nd Floor, 13th Cross,  1st Main Ramaiah Reddy Road,Near Shopping Land Super Market Rupena Agrahara ,Bangalore 560068",
      contact: "+91 6363 360542",
      email: "support@brightwaysfinancial.com",
      hours: "From 10:00 AM to 5:00 PM (Holidays Off)",
    },
  ]

  return (
    <>
      <div className="contact_us mt-5">
        

{/* Updated Code 27/1/2025 */}
 {/* Responsive Table Section */}
         <div className="p-3 row bg-danger mt-5">
             <h1 className="text-white text-center">NOTICE</h1>
        </div>
        <div className="container mt-4">
            
            <h4>GRIEVANCE REDRESSAL / ESCALATION MATRIX</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr className="text-center bg-danger text-white">
              <th className="text-danger">Details of Designation</th>
              <th className="text-danger">Contact Person Name</th>
              <th className="text-danger">Address</th>
              <th className="text-danger">Contact No.</th>
              <th className="text-danger">Email ID</th>
              <th className="text-danger">Working Hours</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="text-primary">{row.designation}</td>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.contact}</td>
                <td>{row.email}</td>
                <td>{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

          <div className="row p-4 bg-primary"> 
            <h3 className="text-center text-white">RA ANITHA M PROPERTIES OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566</h3>
          </div>
       

        <div className="row me-0">
          <div className="col-lg-6 col-md-6 p-0 ">
            <div className="map-contact">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.218525420249!2d77.62803499612643!3d12.92027487109164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14865feb290f%3A0x3e6a119cb3b97490!2sAgara%20Village%2C%201st%20Sector%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678266890061!5m2!1sen!2sin"
                style={{ width: "100%", height: "350px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 col-md-6 p-0">
            <div className="at-contactusvfour">
              <div class="at-sectiontitleborder">
                <h2>Contact Us</h2>
              </div>
              <fieldset>
                <ul class="at-contactinfo">
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span className="px-2">+91 6363 360542</span>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="px-2">
                      <a href="#" style={{ color: "white" }}>
                        Support@brightwaysfinancial.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="px-2">
                      <a href="#" style={{ color: "white" }}>
                        info@brightwaysfinancial.com
                      </a>
                    </span>
                  </li>

                  <li className="d-flex">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <address className="px-2">
                     Brightways Financial Services 

                      <br />
                      #Site No6, 2nd Floor, 13th Cross
                      <br /> 1st Main Ramaiah Reddy Road,  
                      <br />
                      Near Shopping Land Super Market Rupena Agrahara 
                      <br />
                      Bangalore 560068.
                    </address>
                  </li>
                </ul>
              </fieldset>
              {/* <div>
                {" "}
                SEBI SCORES :{" "}
                <a href="https://scores.sebi.gov.in/" target="_blank">
                  https://scores.sebi.gov.in/
                </a>
              </div>
              <div>
                {" "}
                SEBI ODR :{" "}
                <a href="https://smartodr.in/login" target="_blank">
                  https://smartodr.in/
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
