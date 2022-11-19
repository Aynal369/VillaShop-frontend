import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import signUp from "../images/register.jpg";
import useAuth from "../hook/useAuth";
import useDatabase from "../hook/useDatabase";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createNewUser } = useAuth();
  const { isClick, setIsClick, buttonRefresh } = useDatabase();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    setIsClick(true);
    const fullName = data.fullName;
    const email = data.email;
    const password = data.password;
    createNewUser(fullName, email, password, navigate);
    buttonRefresh();
  };
  return (
    <main>
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="container card rounded-5 border-0 shadow p-3 m-3">
          <div className="row justify-content-center">
            <div className="col-lg-6 p-0 align-self-center">
              <div className="text-center mb-4">
                <Link to="/">
                  <img src={signUp} alt="host ambit" width={300} />
                </Link>
              </div>
              <div className="text-center px-2 px-md-5">
                <h2>Hello Friends!</h2>
                <p className="fw-semibold text-muted">
                  Enter your details and start a journey with us.
                </p>
              </div>
            </div>
            <div className="col-lg-6 p-3 p-md-0">
              <div className="card border-0 py-5">
                <h3 className="text-center mb-4">Create Account</h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row g-4 justify-content-center px-2 px-md-5"
                >
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      className="form-control rounded-5"
                      {...register("fullName", {
                        required: "this field is required",
                        minLength: {
                          value: 4,
                          message: "min length 4 characters",
                        },
                      })}
                    />
                    {errors.fullName && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="form-control rounded-5"
                      {...register("email", {
                        required: "this field is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "does't match email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter strong password"
                        className="form-control rounded-5 rounded-end"
                        {...register("password", {
                          required: "this field is required",
                          minLength: {
                            value: 8,
                            message: "min length is 8",
                          },
                        })}
                      />
                      <button
                        className="btn border text-muted rounded-5 rounded-start"
                        type="button"
                        id="password"
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      >
                        {!showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                      </button>
                    </div>
                    {errors.password && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Enter confirm password"
                        className="form-control rounded-5 rounded-end"
                        {...register("confirm_password", {
                          required: "this field is required",
                          validate: (value) =>
                            value === getValues("password") ||
                            "password doesn't match",
                        })}
                      />
                      <button
                        className="btn border text-muted rounded-5 rounded-start"
                        type="button"
                        id="confirm_password"
                        onClick={() =>
                          setShowConfirmPassword((prevState) => !prevState)
                        }
                      >
                        {!showConfirmPassword ? (
                          <BsEyeFill />
                        ) : (
                          <BsEyeSlashFill />
                        )}
                      </button>
                    </div>
                    {errors.confirm_password && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.confirm_password.message}
                      </span>
                    )}
                  </div>
                  <div className="text-center">
                    {isClick ? (
                      <div className="text-center">
                        <button
                          className="btn btn-danger rounded-5 px-5"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Loading ...
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-danger rounded-5 px-5"
                        >
                          Create Now
                        </button>
                      </div>
                    )}
                  </div>
                </form>
                <div className="text-center mt-4">
                  <p>
                    <span className="text-muted me-2">
                      Already have an account?
                    </span>
                    <button
                      type="button"
                      className="btn btn-light rounded-5 px-5"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
