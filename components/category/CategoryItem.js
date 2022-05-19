import React from "react";
import styles from "./Category.module.scss";
import Image from "next/image";
function CategoryItem({ props }) {
  return (
    <div className={styles.categoryItemContainer}>
      <div className={styles.categoryItemContent}>
        <Image
          className={styles.categoryItemImg}
          src={props.src}
          alt={props.src}
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
        <div className={styles.categoryItemTitle}>{props.title}</div>
        <div className={styles.categoryItemDetail}>
          <div className={styles.categoryItemDate}>{props.date}</div>
          <div className={styles.categoryItemTime}>{props.time}</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
