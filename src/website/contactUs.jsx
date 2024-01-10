import React from "react";
import { useForm } from 'react-hook-form';
import './contactUs.css';
import ContactUsImg from '../assets/contactUs_img.png';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here, e.g., send data to backend or process it
    console.log(data); // Output form data to console (for testing purposes)
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} />
            {errors.name && <span className="error-message">Name is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className="error-message">Valid email is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" {...register("message", { required: true })}></textarea>
            {errors.message && <span className="error-message">Message is required</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-us-image">
        <img src={ContactUsImg} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
