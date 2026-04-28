"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineArrowRight } from "react-icons/md";
import styles from "@/styles/ServiceCommon.module.css";
import { serviceData } from "@/utils/singleServiceList";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebarWrapper}>
      <div className={styles.sidebarContainer}>
        {serviceData.map((service) => {
          const isActive = pathname === service.path;

          return (
            <div key={service.id} className={styles.sidebarBlock}>
              {/* Main Service */}
              <Link
                href={service.path}
                className={`${styles.mainserviceName} ${
                  isActive ? styles.active : ""
                }`}
              >
                {service.name}
              </Link>

              {/* Sub Services */}
              {isActive && (
                <div className={styles.serviceListContainer}>
                  {service.services?.map((sub, index) => (
                    <div key={index} className={styles.servicename}>
                      <MdOutlineArrowRight className={styles.arrow} />

                      {sub.slug ? (
                        <Link
                          href={`/services/${sub.slug}`}
                          className={styles.clickable}
                        >
                          {sub.service}
                        </Link>
                      ) : (
                        <span>{sub.service}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;