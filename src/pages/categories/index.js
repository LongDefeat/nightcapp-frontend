import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/styles/categories.module.css'

const Categories = ({ categories, glasses, ingredients, alcohol }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // useEffect(() => {
  //   async function 
  // })

  return (
    <div>
      <h1 className={styles.categoryTitle}>Categories</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <Link href={`/search?category=${category.strCategory}`}>{category.strCategory}</Link>
        </div>
      ))}

      <h1 className={styles.categoryTitle}>Glasses</h1>
      {glasses.map((glass, index) => (
        <div key={index}>
          <Link href={`/search?glass=${glass.strGlass}`}>{glass.strGlass}</Link>
        </div>
      ))}

      <h1 className={styles.categoryTitle}>Ingredients</h1>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <Link href={`/search?ingredient=${ingredient.strIngredient1}`}>{ingredient.strIngredient1}</Link>
        </div>
      ))}

      <h1 className={styles.categoryTitle}>Alcohol Types</h1>
      {alcohol.map((alc, index) => (
        <div key={index}>
          <Link href={`/search?alcohol=${alc.strAlcoholic}`}>{alc.strAlcoholic}</Link>
        </div>
      ))}
    </div>
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
