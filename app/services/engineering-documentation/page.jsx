// app/services/engineering-documentation/page.jsx

import Image from "next/image";
import Link from "next/link";

import Sidebar from "@/components/Sidebar";
import ServiceBanner from "@/components/ServiceBanner";
import HomeContact from "@/components/HomeContact";

import engineeringdocumentation from "@/public/images/engineeringdocumentation.webp";
import styles from "@/styles/Services.module.css";

export const metadata = {
  title: "Engineering Documentation Services | Accuracy & Compliance",
  description:
    "Get reliable engineering documentation services from Mechfusion to ensure precise drawings, clear communication, and compliant project records.",
};

export default function EngineeringDocumentationPage() {
  return (
    <>
      <ServiceBanner
        title="Engineering Documentation Services"
        subtitle="Structured technical documentation that improves clarity, compliance, and operational efficiency."
      />

      <section className={styles.page}>
        <div className={styles.wrapper}>
          
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>

          <main className={styles.content}>
            <h1 className={styles.title}>
              Engineering Documentation Services
            </h1>

            {/* HERO */}
            <div className={styles.heroBlock}>
              <div className={styles.imageWrap}>
                <Image
                  src={engineeringdocumentation}
                  alt="Engineering Documentation"
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.textWrap}>
                <p>
                  Mechfusion delivers professional Engineering Documentation
                  Services that help organizations maintain accuracy,
                  consistency, and compliance across the engineering lifecycle.
                </p>

                <p>
                  We create clear technical documents, drawings, manuals,
                  specifications, and records trusted by production, quality,
                  and compliance teams.
                </p>

                <Link
                  href="mailto:enquiry@mechfusion.in"
                  className={styles.button}
                >
                  Submit Your Requirement
                </Link>
              </div>
            </div>

            {/* Sections */}

            <div className={styles.section}>
              <h2>Built on Engineering Expertise</h2>
              <p>
                Our documentation specialists understand engineering workflows,
                technical standards, manufacturing requirements, and revision
                control systems.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Accuracy & Compliance</h2>
              <p>
                Every document is prepared carefully to reduce errors, improve
                traceability, and support customer or regulatory compliance.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Documentation Services We Provide</h2>

              <ul className={styles.list}>
                <li>Engineering Drawings</li>
                <li>Bill of Materials (BOM)</li>
                <li>Technical Manuals</li>
                <li>SOP Documentation</li>
                <li>Manufacturing Work Instructions</li>
                <li>Revision Management</li>
                <li>Compliance Documentation</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Global Support</h2>
              <p>
                We support USA, India, and international engineering teams with
                structured documentation workflows and fast remote delivery.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Speak With Specialist
              </Link>
            </div>

            <div className={styles.section}>
              <h2>Let’s Build Reliable Documentation</h2>
              <p>
                Whether you need technical manuals, manufacturing records, or
                full documentation support—we are ready to help.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Contact Now
              </Link>
            </div>
          </main>
        </div>
      </section>

      <HomeContact />
    </>
  );
}