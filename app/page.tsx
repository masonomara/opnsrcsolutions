import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <video
        src={"opnsrc.mp4"}
        autoPlay
        playsInline
        muted
        loop
        controls={false}
        className={styles.video}
      />

      <div className={styles.content}>
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
          <div className={styles.infoContainer}>
            <p className={styles.infoTitle}>Contact</p>
            <div className={styles.infoLink}>Email Us &gt;</div>
            <p className={styles.infoSub}>
              Portfolio available
              <br />
              by request.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoTitle}>Focuses</p>

            <p className={styles.infoMain}>
              Software Development
              <br />
              User Experience Design
              <br />
              Mobile and Web Apps
              <br />
              E-Commerce Solutions
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
