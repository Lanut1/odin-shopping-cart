import React from "react";
import styles from "./AdvertisingSpan.module.css";
import { ADVERTISING__SPAN } from "../assets/constants";

const AdvertisingSpan: React.FC = () => {
  return (
    <div className={styles.animationWrapper}>
      <span className={styles.animateMarquee}>{ADVERTISING__SPAN.DELIVERY}</span>
    </div>
  )
}

export default AdvertisingSpan;