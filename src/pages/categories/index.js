import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/styles/categories.module.css'

const Categories = ({ categories, glasses, ingredients, alcohol }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  return (
    <div>
      <h1 className={styles.categoryTitle}>Categories</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <Link href={`/search?category=${category.strCategory}`}>{category.strCategory}</Link>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3001/list/categories');
  const { categories} = res.data;

  return {
    props: {
      categories
    }
  };
}

export default Categories;
