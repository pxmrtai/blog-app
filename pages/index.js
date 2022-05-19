import Category from "../components/category/Category";
import { categoryData } from "../components/mockCategoryData";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Category data={categoryData} title="BÀI VIẾT MỚI" />
      <Category data={categoryData} title="BÀI VIẾT NỔI BẬT" />
    </div>
  );
}
