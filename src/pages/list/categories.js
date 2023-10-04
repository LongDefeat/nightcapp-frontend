import Link from 'next/link';
import styles from '@/styles/categories.module.css';
import axios from 'axios';

import Navigation from '@/components/routes-nav/Navigation';

const CategorySection = ({ title, items, queryKey }) => (
    <div className={styles.categorySection}>
    <h1 className={styles.categoryTitle}>{title}</h1>
    {items.map((item, index) => {
      const key = Object.keys(item)[0];
      return (
        <div key={index} className={styles.categoryName}>
          <Link href={`/list/${item[key]}/`}>{item[key]}</Link>
        </div>
      );
    })}
    </div>
);

const Categories = ({ categories, glasses, ingredients, alcohol }) => {
    return (
      <>
        <Navigation />
        <div className={styles.categoriesContainer}>
        <div className={styles.categorySection}>
            <CategorySection title="Categories" items={categories} queryKey="category" />
        </div>
        <div className={styles.categorySection}>
            <CategorySection title="Glasses" items={glasses} queryKey="glass" />
        </div>
        <div className={styles.categorySection}>
            <CategorySection title="Ingredients" items={ingredients} queryKey="ingredient" />
        </div>
        <div className={styles.categorySection}>
            <CategorySection title="Alcohol Types" items={alcohol} queryKey="alcohol" />
        </div>
        </div>
      </>
    );
  };

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3001/all_filters');
  const { categories, glasses, ingredients, alcohol } = res.data;

  return {
    props: {
      categories,
      glasses,
      ingredients,
      alcohol
    }
  };
}

export default Categories;
