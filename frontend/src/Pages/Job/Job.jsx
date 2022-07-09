import React from "react";
import { Link } from "react-router-dom";
import "./Job.css";

const Job = () => {
  return (
    <div className="container pt-5 mt-5 mb-5 pb-5">
      <div className="row">
        <div className="col-md-4">
          <h3>Management</h3>
          {/* <div className="col-md-12">
                    <button className='btn btn-primary'>Management</button>
                </div> */}
          <div className="col-md-12">
            <Link to="/management" className="job_button text-white">
              <button className="btn btn-secondary job_button">
                Mega Photo Manager
              </button>
            </Link>
          </div>
          <div className="col-md-12">
            <button className="job_button btn btn-warning">
              <Link to="/management" className="job_button text-white">
                Green LTD PVD
              </Link>
            </button>
          </div>
          <div className="col-md-12">
            <button className="btn btn-warning job_button">
              <Link to="/management" className="job_button text-white">
                Black Chain Inc
              </Link>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Photography</h3>
          {/* <div className="col-md-12">
                    <button className='btn btn-primary'>Photography</button>
                </div> */}
          <div className="col-md-12">
            <button className="btn btn-secondary job_button">
              <Link to="/management" className="text-white job_button">
                M&S VMAG
              </Link>
            </button>
          </div>
          <div className="col-md-12">
            <button className="btn btn-warning job_button">
              <Link to="/management" className="text-white job_button">
                Saptahik
              </Link>
            </button>
          </div>
          <div className="col-md-12">
            <button className="btn btn-warning job_button">
              <Link to="/management" className="text-white job_button">
                Wave
              </Link>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Videography</h3>
          {/* <div className="col-md-12">
                    <button className='btn btn-primary'>Videography</button>
                </div> */}
          <div className="col-md-12">
            <button className="btn btn-secondary job_button">
              <Link to="/management" className="text-white job_button">
                Kantpur
              </Link>
            </button>
          </div>
          <div className="col-md-12">
            <button className="btn btn-warning job_button">
              <Link to="/management" className="text-white job_button">
                AV News
              </Link>
            </button>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary job_button">
              <Link to="/management" className="text-white job_button">
                New Cast Nepal
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
