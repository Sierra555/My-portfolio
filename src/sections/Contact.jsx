import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion.js";
import { SectionWrapper } from '../hoc/index.js';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import RobotCanvas from "../components/canvas/Robot.jsx";

const contactsContent = {
  title: "Let’s talk",
  text: "If you're looking to create a new website, enhance your current platform, or bring a unique project to fruition, I'm here to assist you."
}

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
       await emailjs.send(
        'service_rxt4cnl',
        'template_f3j8gad',
         {
          from_name: form.name,
          to_name: 'Daryna Stotska',
          from_email: form.email,
          to_email: 'dara6234@gmail.com',
          message: form.message,
        },
        'vJQJKnQbSdYZGS2ig',
      )
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message!',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
    } catch (error) {
        setLoading(false);
        console.error(error);

        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: 'danger',
        });
      }
  };

  return (
    <>
    <div className="flex gap-5 overflow-hidden">
      {alert.show && <Alert {...alert} />}
        <motion.form variants={slideIn('left', 'spring', .2, 2)} ref={formRef} onSubmit={handleSubmit}
         className="bg-tertiary rounded-2xl border border-gray-100 flex flex-col space-y-7 min-w-xl lg:max-w-xl w-full relative z-10 sm:p-10 p-5 mt-12">
          <label className="space-y-3">
            <span className="field-label">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="e.g., Jane Smith"
              />
          </label>

          <label className="space-y-3">
            <span className="field-label">Email address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="e.g., janesmith@gmail.com"
              />
          </label>

          <label className="space-y-3">
            <span className="field-label">Your message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Share your message or inquiry..."
            />
          </label>

          <button className="field-btn" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
        <motion.div className="hidden lg:block grow" variants={slideIn('right', 'spring', .2, 2)}>
         <RobotCanvas />      
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact', contactsContent);