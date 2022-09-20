import React from "react";
import GLAlogo from "./assets/images/GLA_Logo.png";
import { Button } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {useAppContext} from './AppContext'


import "./assets/styles/cert.css";


function Cert() {

  const {partnerData} = useAppContext()

  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear()

  const downloadPdf = async() => {
    const pdf = new jsPDF('l', 'pt');
    const doc = document.querySelector("#cert_container");

    await html2canvas(doc, {
      allowTaint: true,
      useCORS: true,
      width: 950
    }).then((canvas) => {
      pdf.addImage(canvas.toDataURL("image/png"), 'PNG', 0, 0, 888, 600)
    })

    pdf.save(`${partnerData.fullname}.pdf`)
}


  return (
    <React.Fragment>
      <div className="cert_page" id="cert_page">
        <span className="thank_you_text">
          Thank You for completing this Course you can now Download your
          cerficate{" "}
        </span>
        <Button
          variant="contained"
          id="downloadbtn"
          color="error"
          onClick={downloadPdf}
        >
          Download Certificate
        </Button>
      </div>
      <div className="cert_container" id="cert_container">
        <div className="content">
          <img src={GLAlogo} alt="GLA Logo" />
          <div className="cert_title">
            <span> Certificate of Participation </span>
            <span className="cert_sub_title">This is to certify that</span>
          </div>

          <div className="cert_holder">{partnerData.fullname}</div>
          <div className="empowered">
            has been empowered with our <b>Leadership Development Course</b>
            <br />
            titled{" "}
            <span className="course">
              <b>{partnerData.program_title} </b>
            </span>
          </div>

          <div className="date_signature">
            <div className="cert_date">
              <b>{month + " " + year}</b>
            </div>
            <div className="sig">
              <span className="sig_space"></span>
              <span className="authorizer">
                Director of People Development and Applied Knwoledge
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cert;
