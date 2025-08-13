import React from "react";
/**
 * Reusable form input component
 */
export const FormInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  validation,
  errors,
  className = "",
}) => (
  <div className={className}>
    <label className="text-black font-medium">{label}</label>
    <input
      type={type}
      {...register(name, validation)}
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm">{errors[name].message}</p>
    )}
  </div>
);

/**
 * Reusable form textarea component
 */
export const FormTextarea = ({
  label,
  placeholder,
  register,
  name,
  validation,
  errors,
  rows = "4",
  className = "",
}) => (
  <div className={className}>
    <label className="text-black font-medium">{label}</label>
    <textarea
      {...register(name, validation)}
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      rows={rows}
    ></textarea>
    {errors[name] && (
      <p className="text-red-500 text-sm">{errors[name].message}</p>
    )}
  </div>
);

/**
 * Reusable submit button component
 */
export const SubmitButton = ({ isSubmitting, text = "Submit" }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={`flex items-center justify-center gap-1 cursor-pointer mt-4 w-full lg:h-[68px] h-[38px] bg-gradient-to-r from-[#061C38] to-[#114F9E] text-white font-inter font-[500] lg:text-[24px] text-[12px] lg:rounded-[75px] rounded-[45px] ${
      isSubmitting ? "opacity-70" : ""
    }`}
  >
    {isSubmitting ? "Sending..." : text}
    {!isSubmitting && (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
        className="lg:w-[25px] lg:h-[25px] w-[17px] h-[17px] lg:ml-0 ml-1"
      >
        <path
          d="M6 18L18 6M18 6H9M18 6V15"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </button>
);

/**
 * Alert component for success and error messages
 */
export const FormAlert = ({ type = "success", title, message }) => {
  const colors = {
    success: {
      bg: "bg-green-100",
      border: "border-green-500",
      text: "text-green-700",
    },
    error: {
      bg: "bg-red-100",
      border: "border-red-500",
      text: "text-red-700",
    },
  };

  const style = colors[type];

  return (
    <div
      className={`${style.bg} border-l-4 ${style.border} ${style.text} p-4 mb-4`}
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  );
};

/**
 * Social link component for contact page
 */
export const SocialLink = ({ href, icon, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-[#1a2b6b] ${hoverColor} hover:text-[#FFF5E1] p-2 rounded-full transition-colors duration-300`}
  >
    <i className={`${icon} text-lg`}></i>
  </a>
);
