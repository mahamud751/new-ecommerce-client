import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";
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
      <div className="register py-120">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-xl-10 col-md-12">
              <div className="author-area">
                <h2>Become an Author</h2>
                <p>
                  There are no enrollment fees or shipping quotas. Simp vide
                  your contact information, create a user ID and word.
                </p>
                <form
                  className="login-form"
                  onSubmit={handleSubmit(handleSignUp)}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is Required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                  <input
                    type="email"
                    placeholder="Username or Email"
                    {...register("email", {
                      required: true,
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                  <input
                    type="password"
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
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                  <div className="form-check">
                    <input
                      className="form-check-input shipping-check"
                      type="checkbox"
                      name="shippingMode"
                      id="agreeToTerm"
                    />
                    <span className="sub-input">
                      <i className="fa-regular fa-check" />
                    </span>
                    {/* <label className="form-check-label" htmlFor="agreeToTerm">
                      Agree to the <a href="#">Terms and Conditions</a>
                    </label> */}
                  </div>
                  <button className="def-btn btn-border">Register</button>
                </form>
                <span className="devider">or</span>
                <div className="social-login-box">
                  <button className="def-btn btn-fb">
                    Sign Up with your facebook
                  </button>
                  <button className="def-btn btn-gl">
                    Sign Up with your google+
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

export default Registration;
