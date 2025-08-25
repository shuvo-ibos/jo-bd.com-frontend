'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";
import { api } from "@/env";
import axios from "axios";

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string().required().label("Subject"),
  // remember: Yup.bool()
  //   .oneOf([true], "You must agree to the terms and conditions to proceed.")
  //   .label("Terms and Conditions"),
});

const ContactForm = () => {
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

    // react hook form
    const {register,handleSubmit,formState: { errors },reset} = useForm({
      resolver: yupResolver(schema),
    });
    // on submit
    const onSubmit = async (data) => {
      console.log(data)
      setLoading(true);
      try {
      await axios.post(`${api.baseUrl}/api/contact`, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      setLoading(false);
      setMessage("Message sent successfully!");
      reset();
      setError("");
    } catch (error) {
      const msg =
        error?.response?.data?.message || "Something went wrong. Please try again.";
      // notifyError(msg);
      setError(msg);
      console.log(msg)
      setLoading(false);
      setMessage("");
    }

    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="tp-contact-input-wrapper">
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("name", { required: `Name is required!` })} name="name" id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="name">Your Name</label>
          </div>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("email", { required: `Email is required!` })} name="email" id="email" type="email" placeholder="example@mail.com" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="email">Your Email</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("subject", { required: `Subject is required!` })} name="subject" id="subject" type="text" placeholder="Write your subject" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="subject">Subject</label>
          </div>
          <ErrorMsg msg={errors.subject?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <textarea {...register("message", { required: `Message is required!` })} id="message" name="message" placeholder="Write your message here..."/>
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="message">Your Message</label>
          </div>
          <ErrorMsg msg={errors.message?.message} />
        </div>
      </div>
      {/* <div className="tp-contact-suggetions mb-20">
        <div className="tp-contact-remeber">
          <input  {...register("remember", {required: `Terms and Conditions is required!`})} name="remember" id="remember" type="checkbox" />
          <label htmlFor="remember">Save my name, email, and website in this browser for the next time I comment.</label>
          <ErrorMsg msg={errors.remember?.message} />
        </div>
      </div> */}
      <div className="tp-contact-btn">
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ContactForm;