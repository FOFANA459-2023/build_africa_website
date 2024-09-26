import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace this with actual form handling
  };

  return (
    <div className="container mx-auto py-12 px-6 sm:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto"
      >
        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-red-600 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-red-600 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Subject Field */}
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-lg font-medium text-red-600 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Subject"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-red-600 mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <p className="text-yellow-500 text-lg">
          You can also reach us via email at{' '}
          <span className="font-semibold text-red-600">buildafrica@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
