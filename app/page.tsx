"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [darkMenu, setDarkMenu] = useState(false);
  const [lightMenu, setLightMenu] = useState(false);

  return (
    <main className={styles.main}>
      <div
        className={`${styles.darkVideoCover} ${
          darkMenu ? "" : styles.darkVideoCoverHidden
        }`}
      >
        <div
          className={`${styles.contactFormWrapper} ${
            darkMenu ? "" : styles.contactFormWrapperHidden
          }`}
        >
          <ContactForm />
          <div
            onClick={() => setDarkMenu(!darkMenu)}
            className={styles.closeButton}
          >
            Exit
          </div>
        </div>
      </div>
      <video
        src={"opnsrc.mp4"}
        autoPlay
        playsInline
        muted
        loop
        controls={false}
        className={styles.video}
      />

      <div
        className={`${styles.content} ${darkMenu ? styles.contentHidden : ""}`}
      >
        <div className={styles.titleWrapper}>
          <div className={styles.logo}>
            <Image src="/oss.png" alt="OSS" fill />
          </div>
          <h1 className={styles.logoTitle}>
            OpenSource
            <br />
            Solutions
          </h1>
          <p className={styles.subtitle}>
            Innovative software
            <br />
            solutions available for
            <br />
            work March 2024.
          </p>
          <div className={styles.desktopTitle}>
            <h1 className={styles.logoTitle}>OpenSource Solutions</h1>
            <p className={styles.subtitle}>
              Innovative software solutions available for work March 2024.
            </p>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={`${styles.infoContainer}  ${styles.infoLinkMobile}`}>
            <p className={styles.infoTitle}>Contact</p>
            <div
              className={`${styles.infoLink}`}
              onClick={() => setDarkMenu(!darkMenu)}
            >
              Email Us &gt;
            </div>
            <p className={styles.infoSub}>Portfolio available by request.</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoTitle}>Focuses</p>

            <p className={styles.infoMain}>
              Software Development
              <br />
              User Experience Design
              <span className={styles.infoLinkMobile}>
                <br />
                Mobile and Web Apps
                <br />
                E-Commerce Solutions
              </span>
            </p>
          </div>
          <div
            className={`${styles.infoContainer} ${styles.infoContainerSecondary}`}
          >
            <p className={`${styles.infoTitle} ${styles.infoTitleSecondary}`}>
              Focuses
            </p>

            <p className={styles.infoMain}>
              Mobile and Web Apps
              <br />
              E-Commerce Solutions
            </p>
          </div>
          <div
            className={styles.infoLinkDesktop}
            onClick={() => setDarkMenu(!darkMenu)}
          >
            Email Us
          </div>
        </div>
      </div>
    </main>
  );
}
