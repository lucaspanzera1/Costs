import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form sent:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h1>Get in touch!</h1>
          <p>We are here to help. Send us a message!</p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <span>contato@exemplo.com</span>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <span>(31) 9999-9999</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} />
              <span>Belo Horizonte, Brasil</span>
            </div>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your nome"
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required 
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            <Send className={styles.buttonIcon} />
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;