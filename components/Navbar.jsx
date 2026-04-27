"use client";

import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaBars } from "react-icons/fa6";

import mfLogo from "@/public/logo.png";

const NavBar = () => {
  const [view, setView] = useState(false);

  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.navInner}>
        
        {/* Logo */}
        <Link href="/">
          <Image src={mfLogo} alt="logo" className={styles.logomf} />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.listdesk}>
          <Link href="/" className={styles.listdeskone}>Home</Link>
          <Link href="/about" className={styles.listdeskone}>About us</Link>

          {/* Dropdown */}
          <div className={styles.navDropdown}>
            <span className={styles.dropdownTitle}>
              <Link href="/services">Services ▾</Link>
            </span>

            <div className={styles.dropdownMenu}>
              <Link href="/services/mechanical-design">Mechanical Design</Link>
              <Link href="/services/cnc-programming">CNC Programming</Link>
              <Link href="/services/engineering-documentation">Engineering Documentation</Link>
              <Link href="/services/other-services">Other Services</Link>
            </div>
          </div>

          <Link href="/career" className={styles.listdeskone}>Career</Link>
          <Link href="/blog" className={styles.listdeskone}>Blog</Link>
          <Link href="/contact" className={styles.listdeskone}>Contact us</Link>
        </div>

        {/* Mobile Icon */}
        <FaBars
          className={styles.navIcon}
          onClick={() => setView(!view)}
        />
      </div>

      {/* Mobile Menu */}
      {view && (
        <ul className={styles.listmob}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/career">Career</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact us</Link></li>

          <div className={styles.listaddons}>
            <div className={styles.navbarSocioLinks}>
              <FaFacebookSquare className={styles.icon} />
              <FaInstagram className={styles.icon} />
              <FaLinkedin className={styles.icon} />
              <FaXTwitter className={styles.icon} />
            </div>
          </div>
        </ul>
      )}

    </div>
  );
};

export default NavBar;