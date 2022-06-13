import React from "react";
// import {Link} from "react-router-dom";

class FAQ extends React.Component {
  render() {
    return (
        <div id="faq">
            <div id="FAQSection" className="">
        <div className="container">
          <h2 className="text-center position-relative py-5 ">
            Frequently Asked Questions
          </h2>
          <div id="Faqs">
            <div id="accordion" className="py-5">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span> How do I Post advertisement here? </span>
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Click top right button "Post an Ad" and fill out the info asked in
                    sections and Admin will approve your post before it goes live.
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span> Is it safe to deal on PakDrive </span>
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Its quite safe as PakDrive management tries best to make clean
                    advertisement by taking enough details and pictures of customer
                    and car and rectify before approving an ad.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <span> Who Developed PakDrive? </span>
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">Rahul &amp; Tayyab.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default FAQ;