import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendFormEmails } from "../services/emailService";

/**
 * Custom hook for form submission handling
 * @param {string} formType - Type of form ("quote" or "contact")
 * @param {Object} defaultValues - Default form values
 * @returns {Object} Form state and handlers
 */
export const useFormSubmit = (formType, defaultValues = {}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await sendFormEmails(data, formType);
      setIsSent(true);
      setIsSubmitting(false);
      reset();
      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      console.log("Error sending email:", err);
      setError(
        err.message ||
          "An error occurred while sending your message. Please try again later."
      );
      setIsSubmitting(false);
    }
  };

  // Common validation rules
  const validationRules = {
    name: {
      required: "Name is required",
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Please enter a valid email address",
      },
    },
    phone: {
      required: "Phone number is required",
    },
    message: {
      required: "Message is required",
    },
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    isSent,
    error,
    validationRules,
  };
};
