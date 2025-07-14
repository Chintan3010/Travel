import React from "react";
import { Link } from "react-router-dom";
import '../styles/Registration.css'; // For custom background and card styling

function Registration() {
  return (
    <>
      {/* Registration Form Section */}
      <div className="registration-page-bg d-flex justify-content-center align-items-center py-5">
        <div className="card registration-card shadow-lg border-0">
          <div className="card-body p-4 p-md-5">
            {/* Logo */}
            <div className="text-center mb-4">
              {/* Ensure your logo path is correct, e.g., in public folder */}
              <img src="/travel-dmc-logo.png" alt="Travel-DMC Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
            </div>

            <h4 className="text-center fw-bold mb-1">REGISTER AS TRAVEL AGENT</h4>
            <p className="text-center text-muted mb-4">
              Create your dmcquote.com account
            </p>

            <form>
              {/* Account Details */}
              <h6 className="text-primary mt-3 mb-3 border-bottom pb-2">Account Details</h6>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-user text-secondary"></i></span>
                <input type="text" className="form-control border-start-0" placeholder="Name" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-envelope text-secondary"></i></span>
                <input type="email" className="form-control border-start-0" placeholder="Email" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-lock text-secondary"></i></span>
                <input type="password" className="form-control border-start-0" placeholder="Password" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-lock text-secondary"></i></span>
                <input type="password" className="form-control border-start-0" placeholder="Confirm Password" />
              </div>

              {/* Personal Info */}
              <h6 className="text-primary mt-4 mb-3 border-bottom pb-2">Personal Info</h6>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-phone text-secondary"></i></span>
                <input type="text" className="form-control border-start-0" placeholder="Mobile Number" />
              </div>

              {/* Company Info */}
              <h6 className="text-primary mt-4 mb-3 border-bottom pb-2">Company Info</h6>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-building text-secondary"></i></span>
                <input type="text" className="form-control border-start-0" placeholder="Company Name" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-mobile-alt text-secondary"></i></span>
                <input type="text" className="form-control border-start-0" placeholder="Company Mobile Number" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-light border-end-0"><i className="fas fa-envelope text-secondary"></i></span>
                <input type="email" className="form-control border-start-0" placeholder="Company Email" />
              </div>

              {/* Uploads */}
              <h6 className="text-primary mt-4 mb-3 border-bottom pb-2">Uploads</h6>

              <div className="mb-3">
                <label className="form-label text-muted"><i className="fas fa-image me-2"></i>Upload Company Logo</label>
                <input type="file" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label text-muted"><i className="fas fa-id-card me-2"></i>Upload Visiting Card</label>
                <input type="file" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label text-muted"><i className="fas fa-file-alt me-2"></i>Upload Govt. Document</label>
                <input type="file" className="form-control" />
              </div>

              <button className="btn btn-primary btn-lg w-100 mt-4 custom-gradient-btn">
                <i className="fas fa-user-plus me-2"></i>Sign Up
              </button>

              <p className="text-center mt-3 text-muted">
                Already have an account? <Link to="/" className="text-primary fw-bold text-decoration-none">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section - unchanged, good to go as is */}
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row text-center text-md-start align-items-start">
            {/* Newsletter Column */}
            <div className="col-md-4 mb-4">
              <h5>Your Travel Journey Starts Here</h5>
              <p className="text-muted">
                Sign up and we’ll send the best deals to you
              </p>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Your Email"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-md-2 mb-4">
              <h6>Contact Us</h6>
              <p className="mb-1">Toll Free Customer Care</p>
              <p>+91 123 456 7890</p>
              <p>Need live support?</p>
              <p>help@skymytravel.com</p>
            </div>

            {/* Company Column */}
            <div className="col-md-3 mb-4">
              <h6>Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">About Us</a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="col-md-3 mb-4">
              <h6>Support</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-light" />

          <div className="d-flex flex-column flex-md-row justify-content-between text-muted small">
            <div>&copy; 2025 by SkyMyTravel. All rights reserved.</div>
            <div>
              <a href="#" className="text-muted me-3">Privacy</a>
              <a href="#" className="text-muted me-3">Terms</a>
              <a href="#" className="text-muted">Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Registration;