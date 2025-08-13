import React from "react";
import {
  FormInput,
  FormTextarea,
  SubmitButton,
  FormAlert,
} from "../components/ui/FormComponents";
import { useFormSubmit } from "../hooks/useFormSubmit";

const FreeQuoteForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSent,
    error,
    validationRules,
  } = useFormSubmit("quote");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 lg:p-20 p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="lg:text-5xl text-3xl font-bold text-center text-[#1a2b6b]">
          Get a Free Quote
        </h2>
        <p className="text-gray-600 text-center lg:my-6 my-2">
          Fill out the form and we will get back to you.
        </p>

        {isSent && (
          <FormAlert
            type="success"
            title="Thank you!"
            message="We've received your request and will contact you shortly."
          />
        )}

        {error && <FormAlert type="error" title="Error" message={error} />}

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Your Name"
            name="name"
            register={register}
            validation={validationRules.name}
            errors={errors}
            placeholder="Emma Johnson"
          />

          <FormInput
            label="Email Address"
            type="email"
            name="email"
            register={register}
            validation={validationRules.email}
            errors={errors}
            placeholder="emma@company.com"
          />

          <FormInput
            label="Phone Number"
            type="tel"
            name="phone"
            register={register}
            validation={validationRules.phone}
            errors={errors}
            placeholder="+1 555 123 4567"
          />

          <FormTextarea
            label="Project Details"
            name="message"
            register={register}
            validation={validationRules.message}
            errors={errors}
            placeholder="Please describe your project needs and timeline..."
          />

          <SubmitButton isSubmitting={isSubmitting} text="Send Request" />
        </form>
      </div>
    </div>
  );
};

export default FreeQuoteForm;
