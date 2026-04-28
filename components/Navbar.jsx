"use client";

import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

import {
  FaXTwitter,
  FaBars,
  FaXmark,
  FaChevronDown,
} from "react-icons/fa6";

import mfLogo from "@/public/logo.png";

const NavBar = () => {
  const [view, setView] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const closeMenu = () => {
    setView(false);
    setMobileServiceOpen(false);
  };

  return (
    <header className={styles.NavBarContainer}>
      <div className={styles.navInner}>
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image src={mfLogo} alt="logo" className={styles.logomf} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.listdesk}>
          <Link href="/" className={styles.listdeskone}>
            Home
          </Link>

          <Link href="/about" className={styles.listdeskone}>
            About Us
          </Link>

          {/* Dropdown */}
          <div className={styles.navDropdown}>
            <span className={styles.dropdownTitle}>
              Services <FaChevronDown size={12} />
            </span>

            <div className={styles.dropdownMenu}>
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
          </div>

          <Link href="/career" className={styles.listdeskone}>
            Career
          </Link>

          <Link href="/blog" className={styles.listdeskone}>
            Blog
          </Link>

          <Link href="/contact" className={styles.listdeskone}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Icon */}
        <button
          className={styles.mobileBtn}
          onClick={() => setView(!view)}
          aria-label="menu"
        >
          {view ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {view && (
        <div className={styles.mobileWrapper}>
          <ul className={styles.listmob}>
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>

            {/* Mobile Services */}
            <li>
              <button
                className={styles.mobileServiceBtn}
                onClick={() =>
                  setMobileServiceOpen(!mobileServiceOpen)
                }
              >
                Services
                <FaChevronDown
                  className={
                    mobileServiceOpen
                      ? styles.rotateIcon
                      : ""
                  }
                />
              </button>

              {mobileServiceOpen && (
                <div className={styles.mobileSubMenu}>
                  <Link
                    href="/services/mechanical-design"
                    onClick={closeMenu}
                  >
                    Mechanical Design
                  </Link>

                  <Link
                    href="/services/cnc-programming"
                    onClick={closeMenu}
                  >
                    CNC Programming
                  </Link>

                  <Link
                    href="/services/engineering-documentation"
                    onClick={closeMenu}
                  >
                    Engineering Documentation
                  </Link>

                  <Link
                    href="/services/other-services"
                    onClick={closeMenu}
                  >
                    Other Services
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/career" onClick={closeMenu}>
                Career
              </Link>
            </li>

            <li>
              <Link href="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Social */}
          <div className={styles.listaddons}>
            <div className={styles.navbarSocioLinks}>
              <FaFacebookSquare className={styles.icon} />
              <FaInstagram className={styles.icon} />
              <FaLinkedin className={styles.icon} />
              <FaXTwitter className={styles.icon} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;