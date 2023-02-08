import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div className="Auth">
        <div className="row">
          <div className="col-md-12 right">
            <div className="registration_img">
              <Link to={"/"}>
                <img
                  src="/assets/images/Logo1.png"
                  alt="Logo"
                  className="registration_img_main"
                />
              </Link>
            </div>
            <form
              className="infoForm authForm"
              onSubmit={handleSubmit(handleLogin)}
            >
              {/* <img src={Logo} alt="" /> */}

              <div className="form">
                <input
                  type="email"
                  className="infoInput"
                  placeholder="Username or Email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                <input
                  type="password"
                  className="infoInput"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <button className="def-btn btn-border w-100">Continue</button>
            </form>
            <span className="devider">or</span>
            <div className="social-login-box">
              <button className="def-btn btn-fb w-100">
                Sign Up with your facebook
              </button>
              <button className="def-btn btn-gl w-100 mt-3">
                Sign Up with your google+
              </button>
            </div>
            <div className="mt-5">
              <p>
                By continuing, you agree to Korbojoy's Conditions of Use and
                Privacy Notice.
              </p>
              <p>New to Korbojoy? </p>
            </div>
            <Link
              to={"/register"}
              className="def-btn btn-gl w-100 mt-3 text-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
