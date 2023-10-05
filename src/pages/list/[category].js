import axios from 'axios';
import styles from '@/styles/CategoryDetail.module.css';
import RecipeCard from '@/components/RecipeCard';
import Navigation from '@/components/routes-nav/Navigation';

const CategoryDetail = ({ category, cocktails }) => {

    if (!cocktails || cocktails.length === 0){
        return (
          <div className={styles.categoryDetail}>
            <h1>No cocktails found in {category}...</h1>
          </div>
        )
    }

    async function getServerSideProps(context) {
      const { category } = context.params;
      try {
        const res = await axios.get(`http://localhost:3001/cocktails?category=${category}`);
        const cocktails = res.data.drinks;
    
        return {
          props: {
            category,
            drinks
          }
        };
      } catch (error) {
        // Handle error accordingly
        console.error("Error fetching data:", error.message);
        return {
          notFound: true,
        };
      }
    }  
  return (
    <>
      <Navigation/>
      <div className={styles.categoryDetail}>
        <h1>{category}</h1>
        <div className={styles.cardsContainer}>
          {cocktails.map((cocktail) => (
            <RecipeCard 
              key={cocktail.idDrink}
              name={cocktail.strDrink}
              image={cocktail.strDrinkThumb}
              recipe={cocktail.strInstructions}
            />
          ))}
        </div>
      </div>
    </>
    
  );
};

// export async function getServerSideProps(context) {
//     const { category } = context.params;
//     try {
//       const res = await axios.get(`http://localhost:3001/cocktails?category=${category}`);
//       const cocktails = res.data.drinks;
  
//       return {
//         props: {
//           category,
//           drinks
//         }
//       };
//     } catch (error) {
//       // Handle error accordingly
//       console.error("Error fetching data:", error.message);
//       return {
//         notFound: true,
//       };
//     }
//   }  

export default CategoryDetail;
