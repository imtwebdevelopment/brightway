import React from 'react';
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

const Complaint = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h5>Data For the Month ending: August, 2024</h5>
      </div>

      <Table striped bordered hover responsive="sm">
        <thead className="text-center">
          <tr>
            <th>Sr No</th>
            <th>Received From</th>
            <th>Pending at the end of Last Month</th>
            <th>Received</th>
            <th>Resolved</th>
            <th>Total Pending</th>
            <th>Pending Complaint &#x276F; 3 Months</th>
            <th>Average Resolution Time in Days</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>Directly from Investors</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SEBI (SCORES)</td>
            <td>0</td>
            <td>1</td>
            <td>-</td>
            <td>1</td>
            <td>0</td>
            <td>-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Other Sources (If Any)</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td></td>
            <td>Grand Total</td>
            <td>0</td>
            <td>1</td>
            <td>-</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>

      {/* <div className="text-center my-4">
        <h5>Data For the Month ending: JUNE, 2024</h5>
      </div>

      <Table striped bordered hover responsive="sm">
        <thead className="text-center">
          <tr>
            <th>Sr No</th>
            <th>Received From</th>
            <th>Pending at the end of Last Month</th>
            <th>Received</th>
            <th>Resolved</th>
            <th>Total Pending</th>
            <th>Pending Complaint &#x276F; 3 Months</th>
            <th>Average Resolution Time in Days</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>Directly from Investors</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SEBI (SCORES)</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Other Sources (If Any)</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td></td>
            <td>Grand Total</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table> */}

      <div className="container mt-3">
        <h5 className="text-center mb-4">Trend of Monthly disposal of complaints :</h5>
        <div className="px-lg-5">
          <Table striped bordered hover responsive="sm">
            <thead className="text-center">
              <tr>
                <th>Sr No</th>
                <th>Month</th>
                <th>Carried Forward from Previous Month</th>
                <th>Received</th>
                <th>Resolved</th>
                <th>Pending</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>1</td>
                <td>August, 2024</td>
                <td>0</td>
                <td>1</td>
                <td>-</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>July, 2024</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>3</td>
                <td>June, 2024</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td></td>
                <td>Grand Total</td>
                <td>0</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="container mt-3">
        <h5 className="text-center mb-4">Trend of Annual disposal of complaints :</h5>
        <div className="px-lg-5">
          <Table striped bordered hover responsive="sm">
            <thead className="text-center">
              <tr>
                <th>Sr No</th>
                <th>Year</th>
                <th>Carried Forward from Previous Year</th>
                <th>Received</th>
                <th>Resolved</th>
                <th>Pending</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>1</td>
                <td>2024-25</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2023-24</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td></td>
                <td>Grand Total</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
