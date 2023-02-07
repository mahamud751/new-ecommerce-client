import React from "react";

const Login = () => {
  return (
    <div>
      <div className="register py-120">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-xl-12 col-md-12">
              <div className="login-area">
                <h2>Log in your Account</h2>
                <p>
                  There are no enrollment fees or shipping quotas. Simp vide
                  your contact information, create a user ID and word.
                </p>
                <form className="login-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Username or Email Address"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <button className="def-btn btn-border">Login</button>
                </form>
                <span className="devider">or</span>
                <div className="social-login-box">
                  <button className="def-btn btn-fb">
                    Login with your facebook
                  </button>
                  <button className="def-btn btn-gl">
                    Login with your google+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
