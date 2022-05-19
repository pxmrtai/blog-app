import React from "react";
import styles from "./Category.module.scss";
import CategoryItem from "./CategoryItem";
import TocIcon from "@mui/icons-material/Toc";
function Category({ data, title }) {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <TocIcon sx={{ fontSize: 40, color: "#4AD295" }} />
        <div className={styles.categoryTitle}>{title}</div>
      </div>
      <div className={styles.categoryContent}>
        {data.map((item) => (
          <CategoryItem key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;
