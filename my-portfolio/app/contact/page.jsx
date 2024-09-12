"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "filomenamurgo@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Slough, UK",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        console.error('Server responded with an error:', data);
        setSubmitStatus('error');
        setErrorMessage(data.message || 'An error occurred while sending the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Please, fill in the tabs if you want to reach out.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstname" 
                  placeholder="Firstname" 
                  value={formData.firstname} 
                  onChange={handleChange} 
                  required 
                  className="text-white bg-transparent border-white/20 focus:border-accent"
                />
                <Input 
                  type="text" 
                  name="lastname" 
                  placeholder="Lastname" 
                  value={formData.lastname} 
                  onChange={handleChange} 
                  required 
                  className="text-white bg-transparent border-white/20 focus:border-accent"
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="text-white bg-transparent border-white/20 focus:border-accent"
                />
                <Input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="text-white bg-transparent border-white/20 focus:border-accent"
                />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px] text-white bg-transparent border-white/20 focus:border-accent"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500">{errorMessage}</p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;