// app/services/other-services/page.jsx

import Image from "next/image";
import Link from "next/link";

import Sidebar from "@/components/Sidebar";
import ServiceBanner from "@/components/ServiceBanner";
import HomeContact from "@/components/HomeContact";

import otherservices from "@/public/images/others.webp";
import styles from "@/styles/Services.module.css";

export const metadata = {
  title: "Engineering Support Services | CAD/CAM, Costing & Prototyping",
  description:
    "Mechfusion offers comprehensive engineering services including CAD/CAM, mold flow analysis, prototyping, costing, and engineering documentation.",
};

export default function OtherServicesPage() {
  return (
    <>
      <ServiceBanner
        title="Engineering Support Services"
        subtitle="Integrated engineering solutions for design, manufacturing, costing, and production success."
      />

      <section className={styles.page}>
        <div className={styles.wrapper}>
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>

          <main className={styles.content}>
            <h1 className={styles.title}>Other Services</h1>

            <div className={styles.heroBlock}>
              <div className={styles.imageWrap}>
                <Image
                  src={otherservices}
                  alt="Engineering Support Services"
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.textWrap}>
                <p>
                  Mechfusion delivers professional engineering services that
                  support design, development, and manufacturing requirements
                  across industries.
                </p>

                <p>
                  We help companies improve efficiency, reduce cost, and
                  minimize technical risk through practical engineering support.
                </p>

                <Link
                  href="mailto:enquiry@mechfusion.in"
                  className={styles.button}
                >
                  Submit Your Engineering Requirement
                </Link>
              </div>
            </div>

            <div className={styles.section}>
              <h2>All-Encompassing Engineering Solutions</h2>
              <p>
                Our capabilities include CAD/CAM, engineering documentation,
                costing, prototyping, mold flow analysis, and production
                support.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Mechanical CAD / CAM Services</h2>
              <p>
                Accurate 2D drawings, intelligent 3D models, and CAM workflows
                that streamline design-to-manufacturing processes.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Mold Flow Analysis</h2>
              <p>
                Identify air traps, weld lines, shrinkage, and cooling issues
                before tooling production begins.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Part & Fixture Costing</h2>
              <p>
                Detailed costing based on material, machining, tooling, and
                labor for smarter engineering decisions.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Get Costing Support
              </Link>
            </div>

            <div className={styles.section}>
              <h2>Why Choose Mechfusion?</h2>

              <ul className={styles.list}>
                <li>Multi-disciplinary engineering expertise</li>
                <li>Global remote support</li>
                <li>Fast turnaround</li>
                <li>Production-focused execution</li>
                <li>Reliable communication</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Let’s Build Your Engineering Solution</h2>

              <p>
                Whether you need CAD/CAM, costing, prototyping, or technical
                support—our team is ready to assist.
              </p>

              <Link
                href="mailto:enquiry@mechfusion.in"
                className={styles.button}
              >
                Contact Engineering Specialist
              </Link>
            </div>
          </main>
        </div>
      </section>

      <HomeContact />
    </>
  );
}