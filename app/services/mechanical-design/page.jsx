// app/services/mechanical-design/page.jsx

import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import ServiceBanner from "@/components/ServiceBanner";
import HomeContact from "@/components/HomeContact";
import styles from "@/styles/Services.module.css";

import mechanical from "@/public/images/2.webp";

export const metadata = {
  title: "Mechanical Design Services | Precision Engineering | Mechfusion",
  description:
    "Mechfusion offers custom mechanical design services including product design, jigs & fixtures, mould design, reverse engineering, and CAD solutions.",
  alternates: {
    canonical: "/services/mechanical-design",
  },
};

export default function MechanicalDesignPage() {
  return (
    <>
      <ServiceBanner
        title="Mechanical Design Services"
        subtitle="Production-ready engineering solutions built for performance, manufacturability, and growth."
      />

      <section className={styles.page}>
        <div className={styles.wrapper}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>

          {/* Content */}
          <main className={styles.content}>
            <h1 className={styles.title}>Mechanical Design Services</h1>

            {/* Intro */}
            <div className={styles.heroBlock}>
              <div className={styles.imageWrap}>
                <Image
                  src={mechanical}
                  alt="Mechanical Design Services"
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.textWrap}>
                <p>
                  Mechfusion delivers professional Mechanical Design Services
                  focused on real manufacturing outcomes. We help companies
                  reduce design risk, improve manufacturability, and move from
                  concept to production with confidence.
                </p>

                <p>
                  From early ideas to final manufacturing drawings, our team
                  transforms sketches, concepts, and technical requirements into
                  production-ready mechanical solutions.
                </p>

                <Link
                  href="mailto:enquiry@mechfusion.in"
                  className={styles.button}
                >
                  Discuss Your Requirement
                </Link>
              </div>
            </div>

            {/* Sections */}
            <div className={styles.section}>
              <h2>End-to-End Mechanical Design Capability</h2>
              <p>
                We cover the complete lifecycle of product and system
                development—concept creation, CAD modelling, prototyping,
                detailing, validation, and production support.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Built for Manufacturing</h2>
              <p>
                Our designs consider machining, fabrication, molding, assembly,
                tolerance stack-up, and inspection requirements from the start.
              </p>
            </div>

            <div className={styles.section}>
              <h2>CAD / 3D Design Services</h2>
              <p>
                Accurate 2D drawings and intelligent 3D models help improve
                collaboration between engineering, suppliers, and production
                teams.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Get CAD Design Support
              </Link>
            </div>

            <div className={styles.section}>
              <h2>Reverse Engineering & Legacy Data</h2>
              <p>
                We modernize legacy drawings and recreate components using
                reverse engineering for redesign, replacement, or documentation
                recovery.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Why Mechfusion?</h2>
              <ul className={styles.list}>
                <li>Production-focused engineering</li>
                <li>Global remote support</li>
                <li>Fast turnaround time</li>
                <li>Scalable outsourcing model</li>
                <li>Clear technical communication</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Let’s Build Together</h2>
              <p>
                Whether you need CAD modelling, product design, manufacturing
                drawings, or complete mechanical development support—we are
                ready to help.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Contact Mechanical Engineer
              </Link>
            </div>
          </main>
        </div>
      </section>

      <HomeContact />
    </>
  );
}
