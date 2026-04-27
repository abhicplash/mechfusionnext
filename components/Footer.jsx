import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import mfLogo from "@/public/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.brand}>
          <Link href="/">
            <Image
              src={mfLogo}
              alt="Mechfusion Logo"
              className={styles.logo}
            />
          </Link>

          <p>
            Delivering precision-focused engineering solutions for global
            manufacturing industries.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.column}>
          <h3>Navigation</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className={styles.column}>
          <h3>Services</h3>
          <Link href="/services/mechanical-design">
            Mechanical Design
          </Link>
          <Link href="/services/cnc-programming">
            CNC Programming
          </Link>
          <Link href="/services/engineering-documentation">
            Engineering Documentation
          </Link>
          <Link href="/services/other-services">
            Other Services
          </Link>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3>Contact</h3>
          <span>+91 879 222 0030</span>
          <a href="mailto:enquiry@mechfusion.in">
            enquiry@mechfusion.in
          </a>

          <div className={styles.socials}>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        © 2026 Mechfusion Engineering Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;