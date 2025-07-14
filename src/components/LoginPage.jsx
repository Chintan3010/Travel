import React from 'react';
import "../styles/Login.css";

export default function LoginPage() {
return (
    <div className="login-page d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-box p-4 shadow text-center rounded-4">
        <img
          src="https://dmcquote.com/assets/logo-dmc.png"
          alt="Travel-DMC Logo"
          height="40"
          className="mb-3"
        />
        <h4 className="fw-bold">WELCOME BACK</h4>
        <p className="text-muted">Sign in to your dmcquote.com account</p>

        <form className="text-start">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username or Email"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          {/* <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#" className="text-purple text-decoration-none small">
              <i className="fas fa-key me-1" />
              Forgot Password?
            </a>
          </div> */}

          <button type="submit" className="btn gradient-btn w-100">
            <i className="fas fa-sign-in-alt me-2"></i>
            Sign In
          </button>
        </form>

        <div className="mt-4">
          <a href="/register" className="text-purple text-decoration-none">
            <i className="fas fa-users me-1" />
            Register as Travel Agent
          </a>
        </div>
      </div>
    </div>
  );
}
