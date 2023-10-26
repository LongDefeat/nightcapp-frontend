import styles from "./styles/RecipeDetails.module.css";
import { matchIngredientsWithMeasurements } from "@/pages/api/searchCocktail";

function RecipeDetails(props) {
    const { recipe } = props;
    const {
        strDrinkThumb: drinkImage,
        strDrink: name,
        strInstructions: instructions,
    } = recipe;

    const matchedIngredients = matchIngredientsWithMeasurements(recipe);

    return (
        <>
            <div id={styles.body}>
                <img className={styles.img} src={drinkImage}></img>
                <div id={styles.description}>
                    <h1 id={styles.drinkTitle}>{name}</h1>
                    <h3 id={styles.ingredientsTitle}> Ingredients </h3>
                    <ul>
                        {matchedIngredients &&
                            matchedIngredients.map((ingredient) => {
                                const { measurement, name } = ingredient;
                                return (
                                    <li key={name} id={styles.ingredient}>
                                        {ingredient.name} -
                                        <span className={styles.measurements}>
                                            {ingredient.measurement}
                                        </span>
                                    </li>
                                );
                            })}
                    </ul>
                    <h3 id={styles.directionsTitle}> Directions </h3>
                    <p id={styles.drinkDescription}>{instructions}</p>
                </div>
            </div>
        </>
    );
}

export default RecipeDetails;
