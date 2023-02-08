import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";
import "./Registration.css";
const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email, password) => {
    const user = { name, email, password };
    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
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
              onSubmit={handleSubmit(handleSignUp)}
            >
              {/* <img src={Logo} alt="" /> */}

              <div className="form">
                <input
                  type="text"
                  className="infoInput"
                  placeholder="Name"
                  {...register("name", {
                    required: "Name is Required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
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

              <button className="def-btn btn-border w-100">Register</button>
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
              <div className="d-flex">
                <p className="me-2">Already have an account? </p>
                <Link to={"/login"}>Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
