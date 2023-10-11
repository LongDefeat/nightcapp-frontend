import Link from 'next/link';
import styles from '@/styles/categories.module.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import Navigation from '@/components/routes-nav/Navigation';

const CategorySection = ({ title, items }) => (
  <div className={styles.categorySection}>
    <h1 className={styles.categoryTitle}>{title}</h1>
    {items.map((item) => {
      const key = Object.keys(item)[0];
      return (
        <div key={item[key]} className={styles.categoryName}>
          <Link href={`/list/${item[key]}`}>{item[key]}</Link>
        </div>
      );
    })}
  </div>
);

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Categories = ({ categories }) => {
  if (!categories) {
    return (
      <>
        <Navigation />
        <p>Error loading categories, please try again.</p>
      </>
    );
  }
  return (
    <>
      <Navigation />
      <div className={styles.categoriesContainer}>
        <CategorySection title="Categories" items={categories} />
      </div>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3001/list/categories');
    const { categories } = res.data;
    console.log(res.data); // Fixed typo here
    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error("API request error: ", error.message);
    // Redirect to an error page or return empty props.
    return { props: {} };
  }
}

export default Categories;
