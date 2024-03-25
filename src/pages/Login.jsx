import React from "react";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="text-center">
                <img
                  src={require("../assests/smage_Systems_Logo1.jpg")}
                  width="40%"
                  alt="logo"
                />
              </div>
              <div style={{ padding: "0px 100px" }}>
                <div className="logheader">Login</div>
                <div className="logsubtext">
                  Login with your credential received from Smude Systems.
                </div>
                <form autoComplete="off">
                  <div className="px-2">
                    <div className="row mt-3 logsubtext">Email</div>

                    <div className="row mt-2">
                      <input
                        type="text"
                        id="email"
                        placeholder="john@abc.com"
                        autoFocus
                        maxLength="40"
                      />
                    </div>
                    <div className="row mt-3 logsubtext">Password</div>

                    <div className="row mt-2">
                      <input
                        type="password"
                        id="email"
                        placeholder=".........."
                        maxLength="40"
                      />
                    </div>
                    <div className="row mt-2">
                      <div className="col-6">
                        <input type="checkbox" />{" "}
                        <span className="logsubtext">Remember me</span>
                      </div>
                      <div className="col-6" style={{ textAlign: "right" }}>
                        <a href="javascript:void(0)">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button className="btn">Login</button>
                    </div>
                    <div className="text-center mt-3 subtext">
                      Dont have an account? Click here to{" "}
                      <a href="javascript:void(0)">Sign Up</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div style={{ marginLeft: "-55px" }}>
              <img
                src={require("../assests/smage_Systems_Icon1.jpg")}
                height={"200px"}
                alt="login"
                style={{ opacity: "0.3" }}
              />
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="mt-5 pt-5">
              <img
                src={require("../assests/smage_login_ui_cover1.jpg")}
                width={"100%"}
                alt="login"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
