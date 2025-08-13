import React from "react";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import {
  FormInput,
  FormTextarea,
  SubmitButton,
  FormAlert,
  SocialLink,
} from "../components/ui/FormComponents";
import { useFormSubmit } from "../hooks/useFormSubmit";

// Contact information centralized for easy updates
const CONTACT_INFO = {
  address: "Sharjah, Dubai",
  hours: "Monday - Friday, 9:00 AM - 6:00 PM",
  email: "globalwork907@gmail.com",
  phone: "+19 299 334 325",
  social: [
    {
      href: "https://x.com/devverseorg?s=21",
      icon: "fab fa-twitter",
      hoverColor: "hover:bg-blue-400",
    },
    {
      href: "https://www.instagram.com/globalwork907/",
      icon: "fab fa-instagram",
      hoverColor: "hover:bg-pink-500",
    },
    {
      href: "https://www.linkedin.com/company/devverse-01/",
      icon: "fab fa-linkedin",
      hoverColor: "hover:bg-blue-700",
    },
    {
      href: "http://www.youtube.com/@Globalwork-de",
      icon: "fab fa-youtube",
      hoverColor: "hover:bg-red-400",
    },
  ],
};

/**
 * Contact info item component
 */
const ContactInfoItem = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-4">
    <Icon className="w-6 h-6 text-[#1a2b6b] mt-1 flex-shrink-0" />
    <p className="text-black text-lg font-[500]">{text}</p>
  </div>
);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSent,
    error,
    validationRules,
  } = useFormSubmit("contact");

  return (
    <div className="min-h-screen p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-1 gap-12 relative order-none">
        {/* Contact Information Section */}
        <div className="lg:order-none order-2">
          <h2 className="text-3xl font-medium text-[#1a2b6b] mb-8">Visit us</h2>

          <div className="space-y-6">
            <ContactInfoItem icon={MapPin} text={CONTACT_INFO.address} />
            <ContactInfoItem icon={Clock} text={CONTACT_INFO.hours} />
            <ContactInfoItem icon={Mail} text={CONTACT_INFO.email} />
            <ContactInfoItem icon={Phone} text={CONTACT_INFO.phone} />

            <div className="flex items-center space-x-2 mt-[5px]">
              {CONTACT_INFO.social.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  hoverColor={link.hoverColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:order-none order-1">
          <h2 className="text-3xl font-medium text-[#1a2b6b] mb-8">
            Question? Send us a message.
          </h2>

          {isSent && (
            <FormAlert
              type="success"
              title="Thank you!"
              message="We've received your message and will contact you shortly."
            />
          )}

          {error && <FormAlert type="error" title="Error" message={error} />}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <FormInput
              label="Name"
              name="name"
              register={register}
              validation={validationRules.name}
              errors={errors}
              placeholder="Jane Smith"
              className="text-black text-lg font-[400]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Email"
                type="email"
                name="email"
                register={register}
                validation={validationRules.email}
                errors={errors}
                placeholder="jane@framer.com"
                className="text-black text-lg font-[400]"
              />

              <FormInput
                label="Phone"
                type="tel"
                name="phone"
                register={register}
                validation={validationRules.phone}
                errors={errors}
                placeholder="Enter Your Phone Number"
                className="text-black text-lg font-[400]"
              />
            </div>

            <FormTextarea
              label="Message"
              name="message"
              register={register}
              validation={validationRules.message}
              errors={errors}
              placeholder="Your Message"
              rows="6"
              className="text-black text-lg font-[400]"
            />

            <SubmitButton isSubmitting={isSubmitting} text="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
