'use client';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter,redirect } from "next/navigation";
// internal
import { CloseEye, OpenEye } from "@/svg";
import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  remember: Yup.bool()
    .oneOf([true], "You must agree to the terms and conditions to proceed.")
    .label("Terms and Conditions"),
});

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setError] = useState([]);
  const [successMsg, setSuccess] = useState(null);
  const [registerUser, {}] = useRegisterUserMutation();
  const router = useRouter();
  // react hook form
  const {register,handleSubmit,formState: { errors },reset} = useForm({
    resolver: yupResolver(schema),
  });
  // on submit
  const onSubmit = (data) => {
    console.log(data)
    registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    }).then((result) => {
      console.log(result)
      if (result?.error) {
        // notifyError("Register Failed");
        setError(result?.error?.data?.errorMessages);
      } else {
        // notifySuccess(result?.data?.message);
        // setError(result?.data?.message);
        // router.push('/checkout');
        setSuccess(result?.data);
      }
    });
    // reset();
  };
  console.log(errorMsg)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-login-input-wrapper">
        {
          successMsg && (
            <div className="tp-login-input-box">
              <div className="tp-login-input">
                <p style={{ color: "green", textAlign: "center", fontSize: "20px",fontWeight:"bold" }}>{successMsg?.message}</p>
              </div>
            </div>
          )
        }
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            <input
              {...register("name", { required: `Name is required!` })}
              id="name"
              name="name"
              type="text"
              placeholder="Shahnewaz Sakil"
            />
          </div>
          <div className="tp-login-input-title">
            <label htmlFor="name">Your Name</label>
          </div>
          {errorMsg && (
          <ErrorMsg
            msg={
              errorMsg.find((error) => error?.path === 'name')?.message
            }
          />
        )}
        </div>
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            <input
              {...register("email", { required: `Email is required!` })}
              id="email"
              name="email"
              type="email"
              placeholder="shofy@mail.com"
            />
          </div>
          <div className="tp-login-input-title">
            <label htmlFor="email">Your Email</label>
          </div>
          {errorMsg && (
          <ErrorMsg
            msg={
              errorMsg.find((error) => error?.path === 'email')?.message
            }
          />
        )}
        </div>
        <div className="tp-login-input-box">
          <div className="p-relative">
            <div className="tp-login-input">
              <input
                {...register("password", { required: `Password is required!` })}
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Min. 6 character"
              />
            </div>
            <div className="tp-login-input-eye" id="password-show-toggle">
              <span className="open-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? <CloseEye /> : <OpenEye />}
              </span>
            </div>
            <div className="tp-login-input-title">
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message} />
        </div>
      </div>
      <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
        <div className="tp-login-remeber">
          <input
            {...register("remember", {
              required: `Terms and Conditions is required!`,
            })}
            id="remember"
            name="remember"
            type="checkbox"
          />
          <label htmlFor="remember">
            I accept the terms of the Service & <a href="#">Privacy Policy</a>.
          </label>
          <ErrorMsg msg={errors.remember?.message} />
        </div>
      </div>
      <div className="tp-login-bottom">
        <button type="submit" className="tp-login-btn w-100">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
