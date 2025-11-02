import React from 'react';

const FormContact = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Get in Touch
      </h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Have a question or want to discuss a project? Fill out the form below and we will get back to you soon.
      </p>
      
      <form 
        name="contact-form" 
        method="POST" 
        action="/contact-success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Hidden field for Netlify Forms */}
        <input type="hidden" name="form-name" value="contact-form" />
        
        {/* Honeypot field for spam prevention */}
        <p className="hidden">
          <label>
            Do not fill this out if you are human: <input name="bot-field" />
          </label>
        </p>

        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="Your name"
              required
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="your.email@company.com"
              required
            />
          </div>

          {/* Company Field */}
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="Your company name"
            />
          </div>

          {/* Message Field */}
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
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="Tell us about your project or question..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[rgb(22,163,74)] text-white font-semibold rounded-md hover:bg-[rgb(21,128,61)] hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;

