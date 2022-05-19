import Image from "next/image";
import React from "react";
import styles from "./FirstHeader.module.scss";
import mainLogo from "../../public/main-logo.svg";

function FirstHeader() {
  return (
    <div className={styles.firstHeaderContainer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={mainLogo} alt="logo" width={200}/>
        </div>
        <input className={styles.input} placeholder="Search..." />
      </div>
    </div>
  );
}

export default FirstHeader;
