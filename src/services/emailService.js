import emailjs from "@emailjs/browser";

const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  TEMPLATES: {
    ADMIN: import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE,
    USER: import.meta.env.VITE_EMAILJS_USER_TEMPLATE,
  },
  ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL,
};

/**
 * Send emails to both admin and user
 * @param {Object} data - Form data
 * @param {string} data.name - Sender's name
 * @param {string} data.email - Sender's email
 * @param {string} data.phone - Sender's phone
 * @param {string} data.message - Message content
 * @param {string} formType - Type of form ("quote" or "contact")
 * @returns {Promise} - Promise that resolves when both emails are sent
 */
export const sendFormEmails = async (data, formType) => {
  // Configure subject and message based on form type
  const isQuote = formType === "quote";
  const subjectPrefix = isQuote ? "Quote Request" : "Contact Request";
  const userMessage = isQuote
    ? "Thank you for reaching out to GlobalWorks. We have received your quote request and will review it promptly. Our team will get back to you within 24-48 business hours. If you have any urgent questions, please feel free to reply to this email."
    : "Thank you for reaching out to GlobalWorks. We have received your message and will get back to you shortly. Our team will respond within 24-48 business hours. If you have any urgent questions, please feel free to reply to this email.";

  // Admin email parameters
  const adminTemplateParams = {
    to_name: "GlobalWorks Admin",
    to_email: EMAIL_CONFIG.ADMIN_EMAIL,
    from_name: data.name,
    from_email: data.email,
    from_phone: data.phone,
    message: data.message,
    reply_to: data.email,
    subject: `New ${subjectPrefix} from Website`,
  };

  // User auto-response parameters
  const userTemplateParams = {
    to_name: data.name,
    to_email: data.email,
    reply_to: EMAIL_CONFIG.ADMIN_EMAIL,
    subject: `Thank you for your ${
      isQuote ? "quote request" : "message"
    } - GlobalWorks`,
    message: userMessage,
  };

  try {
    // Send auto-response to user
    await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATES.USER,
      userTemplateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    // Send email to admin
    await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATES.ADMIN,
      adminTemplateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    throw new Error(error.text);
  }
};
