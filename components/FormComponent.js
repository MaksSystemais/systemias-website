import React, { useState } from 'react';

const FormComponent = ({ 
  formType = 'download',  // 'download' or 'contact'
  appName = 'weekly-timesheets',
  title,
  description,
  submitButtonText,
  successRedirect,
  showCompanyField = true,
  showMessageField = false,
  additionalFields = {}
}) => {
  // Set defaults based on form type
  const defaults = {
    download: {
      title: 'Download Weekly Timesheets App',
      description: 'Enter your details below to get instant access to the Power App package and installation guide.',
      submitButtonText: 'Get Instant Access',
      successRedirect: `/download-success?app=${appName}`,
      formName: 'download-form'
    },
    contact: {
      title: 'Get in Touch',
      description: 'Have a question or want to discuss a project? Fill out the form below and we&apos;ll get back to you soon.',
      submitButtonText: 'Send Message',
      successRedirect: '/contact-success',
      formName: 'contact-form'
    }
  };

  const config = defaults[formType] || defaults.download;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    appName: appName,
    ...additionalFields
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const iframeRef = React.useRef(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    // Validate form
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate message field if it's required (for contact form)
    if (showMessageField && !formData.message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault(); // Only prevent if validation fails
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Allow form to submit naturally to hidden iframe
    // Netlify will handle the submission
    setTimeout(() => {
      const redirectUrl = successRedirect || config.successRedirect;
      window.location.href = redirectUrl;
    }, 1000); // Give Netlify time to process the submission
  };

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        {title || config.title}
      </h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {description || config.description}
      </p>
      
      <iframe 
        name="hidden_iframe" 
        ref={iframeRef}
        style={{ display: 'none' }}
        title="hidden iframe"
      ></iframe>
      
      <form 
        name={config.formName}
        method="POST"
        action="/"
        target="hidden_iframe"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Hidden fields for Netlify Forms */}
        <input type="hidden" name="form-name" value={config.formName} />
        {formType === 'download' && <input type="hidden" name="app-name" value={appName} />}
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white ${
                errors.email 
                  ? 'border-red-500 dark:border-red-500' 
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="your.email@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          {/* Company Field */}
          {showCompanyField && (
            <div>
              <label 
                htmlFor="company" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                placeholder="Your company name"
              />
            </div>
          )}

          {/* Message Field */}
          {showMessageField && (
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required={showMessageField}
                rows={5}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white ${
                  errors.message 
                    ? 'border-red-500 dark:border-red-500' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Tell us about your project or question..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 text-white font-semibold rounded-md transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[rgb(22,163,74)] hover:bg-[rgb(21,128,61)] hover:shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              submitButtonText || config.submitButtonText
            )}
          </button>

          {errors.submit && (
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              {errors.submit}
            </p>
          )}
        </div>
      </form>

      {formType === 'download' && (
        <p className="mt-4 text-xs text-gray-600 dark:text-gray-400 text-center">
          By downloading, you agree to receive occasional updates about our products. You can unsubscribe at any time.
        </p>
      )}
    </div>
  );
};

export default FormComponent;

