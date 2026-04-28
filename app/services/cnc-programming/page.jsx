// app/services/cnc-programming/page.jsx

import Image from "next/image";
import Link from "next/link";

import Sidebar from "@/components/Sidebar";
import ServiceBanner from "@/components/ServiceBanner";
import HomeContact from "@/components/HomeContact";

import cncprogramming from "@/public/images/cncprogramming.webp";
import styles from "@/styles/Services.module.css";

export const metadata = {
  title: "CNC Programming Services for Milling & Multi-Axis Machining",
  description:
    "Mechfusion provides professional CNC programming services for milling, turning, and multi-axis machining to improve precision, speed, and production efficiency.",
  keywords: ["CNC Programming"],
  alternates: {
    canonical: "/services/cnc-programming",
  },
};

export default function CncProgrammingPage() {
  return (
    <>
      <ServiceBanner
        title="CNC Programming Services"
        subtitle="Precision toolpaths, faster machining cycles, and reliable production output."
      />

      <section className={styles.page}>
        <div className={styles.wrapper}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className={styles.content}>
            <h1 className={styles.title}>CNC Programming Services</h1>

            {/* Hero */}
            <div className={styles.heroBlock}>
              <div className={styles.imageWrap}>
                <Image
                  src={cncprogramming}
                  alt="CNC Programming Services"
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.textWrap}>
                <p>
                  Mechfusion delivers professional CNC Programming Services
                  designed for real manufacturing environments. We help
                  manufacturers improve machining accuracy, reduce cycle time,
                  and achieve stable production results.
                </p>

                <p>
                  From prototypes to production batches, we convert part designs
                  into optimized machine instructions that balance speed,
                  precision, and tool life.
                </p>

                <Link
                  href="mailto:enquiry@mechfusion.in"
                  className={styles.button}
                >
                  Submit Your Machining Requirement
                </Link>
              </div>
            </div>

            {/* Sections */}
            <div className={styles.section}>
              <h2>Programming Built for Manufacturing</h2>
              <p>
                Our CNC programming follows a production-first approach. We
                study CAD files, machine setup, tooling, materials, and
                tolerances to ensure programs run smoothly on actual machines.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Milling, Turning & Multi-Axis Capability</h2>
              <p>
                We support 2-axis, 3-axis, 4-axis, and 5-axis machining for
                milling centers, lathes, mill-turn machines, and complex
                machining centers.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Improve Accuracy & Productivity</h2>
              <p>
                Our CNC Programming Services reduce setup time, improve tool
                efficiency, minimize machining errors, and help maintain tight
                tolerances across production runs.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Request CNC Programming Support
              </Link>
            </div>

            <div className={styles.section}>
              <h2>Complex Components & Advanced Toolpaths</h2>
              <p>
                We handle intricate geometries, deep cavities, undercuts, and
                precision surfaces using advanced machining strategies and
                multi-axis programming.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Why Manufacturers Choose Mechfusion</h2>

              <ul className={styles.list}>
                <li>Production-focused programming</li>
                <li>Cycle time optimization</li>
                <li>Multi-axis machining expertise</li>
                <li>Reliable remote support</li>
                <li>Consistent machining quality</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Our Engineering Services</h2>

              <ul className={styles.list}>
                <li>
                  <Link href="/services/mechanical-design">
                    Mechanical Design Services
                  </Link>
                </li>

                <li>Mechanical CAD / CAM Services</li>

                <li>CNC Programming Services</li>

                <li>
                  <Link href="/services/engineering-documentation">
                    Engineering Documentation Services
                  </Link>
                </li>

                <li>Manufacturing Drawing Services</li>
                <li>Mold Flow Analysis Services</li>
                <li>Part & Fixture Costing Services</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Let’s Strengthen Your CNC Machining Process</h2>

              <p>
                Whether you need milling, turning, multi-axis programming, or
                outsourced CNC support, our team is ready to help.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Contact CNC Programming Engineer
              </Link>
            </div>
          </main>
        </div>
      </section>

      <HomeContact />
    </>
  );
}