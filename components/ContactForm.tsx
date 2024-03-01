"use client";

import { useState } from "react";

import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import styles from "../styles/ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  company?: string;
  startDate?: string;
  details: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitSuccessful },
  }: UseFormReturn<FormData> = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    sendEmail(data);

    // Simulate a delay of 3 seconds before resetting isSubmitting
    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={styles.title}>Contact Form</div>
      <div className={styles.labelWrapper}>
        <label htmlFor="name" className={styles.formHeader}>
          Full Name*
        </label>
        <input
          type="text"
          placeholder="full name"
          className={styles.formInput}
          autoComplete="name"
          {...register("name", { required: true })}
        />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="email" className={styles.formHeader}>
          Email Address*
        </label>
        <input
          type="email"
          placeholder="email address"
          className={styles.formInput}
          autoComplete="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="company" className={styles.formHeader}>
          Company Name
        </label>
        <input
          type="text"
          placeholder="company name"
          className={styles.formInput}
          autoComplete="organization"
          {...register("company", { required: false })}
        />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="startDate" className={styles.formHeader}>
          Target Start Date
        </label>
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          className={styles.formInput}
          {...register("startDate", { required: false })}
        />
      </div>

      <div className={styles.labelWrapper}>
        <label htmlFor="details" className={styles.formHeader}>
          Details*
        </label>
        <textarea
          rows={4}
          placeholder="additional details"
          className={styles.formInputDetails}
          {...register("details", { required: false })}
        ></textarea>
      </div>
      <div>
        <button
          className={`${styles.button} ${
            !isValid ? styles.buttonInactive : styles.buttonActive
          }`}
          disabled={isSubmitSuccessful}
        >
          <span className={styles.buttonText}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
