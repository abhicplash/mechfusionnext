"use client";

import { useState } from "react";
import styles from "@/styles/contact.module.css";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BannerContact from "@/components/BannerContact";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://mechfusion.in/api/contact-us.php", {
        method: "POST",
        body: formData,
      });

      setSuccess("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className={styles.contactPage}>
      {/* <BannerContact /> */}
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Connect With Our Engineering Experts</h1>
        <p>
          Connect with our experienced engineers to discuss your design,
          manufacturing, and product development requirements. We’re committed
          to delivering precise and efficient solutions.
        </p>
      </div>

      {/* INFO CARDS */}
      <div className={styles.cardWrapper}>
        <a href="tel:+918792220030" className={styles.card}>
          <IoPhonePortraitOutline />
          <h3>Call Us</h3>
          <p>+91 879 222 0030</p>
        </a>

        <div className={styles.card}>
          <IoLocationOutline />
          <h3>Location</h3>
          <p>Bengaluru, Karnataka, India</p>
        </div>

        <a href="mailto:enquiry@mechfusion.in" className={styles.card}>
          <MdMailOutline />
          <h3>Email</h3>
          <p>enquiry@mechfusion.in</p>
        </a>
      </div>

      {/* FORM */}
      <div className={styles.formSection}>
        <div className={styles.left}>
          <h2>Get In Touch</h2>
          <p>
            Contact us for precision engineering consultation, product design,
            and technical innovation.
          </p>

          <div className={styles.socials}>
            <a href="https://www.instagram.com/mechfusion_/">
              <FaInstagram />
            </a>
            <a href="https://x.com/Mechfusion30088">
              <FaXTwitter />
            </a>
            <a href="https://www.facebook.com/MechfusionEngineeringSolutions">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/company/mechfusion/">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form onSubmit={sendEmail} className={styles.form}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="text"
            name="user_number"
            placeholder="Phone Number"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />

          <textarea name="message" placeholder="Your Message"></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <span>{success}</span>}
        </form>
      </div>

      {/* MAP */}
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.097049932634!2d77.57903677660894!3d13.093035479312379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae193404657709%3A0x49c4bac5a2e86574!2sMechfusion%20Engineering%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1751117227460!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
