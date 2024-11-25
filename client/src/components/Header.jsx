import { useRef, useEffect } from "react";
import styles from "../CSS/header.module.css";
import video from "../images/44774-440000874.mp4";

function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <header id={styles.header}>
      <div className={styles.desktopImgContainer}>
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        />
        <div className={styles.headerImg}>
          <h1>Bienvenue aux Jardins de Magotte</h1>
          <p>Votre maraîcher bio situé à Vendegies-sur-Écaillon.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
