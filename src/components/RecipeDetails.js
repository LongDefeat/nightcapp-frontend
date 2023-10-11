import styles from "./styles/RecipeDetails.module.css";
import { useRouter } from 'next/router';
import { BiDrink } from "react-icons/bi";
import axios from "axios";

function RecipeDetails(props) {
  return (
    <>
      <div id={styles.body}>
        <img className={styles.img} src={props.image}></img>
        <div id={styles.description}>
          <h1 id={styles.drinkTitle}>{props.name}</h1>
          <h3 id={styles.ingredientsTitle}>Ingredients</h3>
          <ul>
            <div>
              {props.ingredientsList &&
                props.ingredientsList.map((ingredient) => (
                  <li id={styles.ingredient}>
                    {ingredient.name} -{" "}
                    <span id={styles.measurements}>
                      {ingredient.measurement}
                    </span>
                  </li>
                ))}
            </div>
          </ul>
          <h3 id={styles.directionsTitle}>Directions</h3>
          <p id={styles.drinkDescription}>{props.instructions}</p>
          <div className={styles.iconContainer}>
            {/* <BiDrink className={styles.icon} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  try {
    const res = await axios.get(`http://localhost:3001/cocktails/${id}`);
    const cocktail = res.data.cocktail;

    return {
      props: {
        cocktail,
      }
    };
  } catch (error) {
    console.error("Error fetching cocktail data:", error.message);
    return {
      notFound: true,
    };
  }
}

export default RecipeDetails;
