import React from "react";
import styles from "./styles/DrinksList.module.css";
import RecipeCard from "./RecipeCard";

export default function DrinksList(props) {
    return (
      <ul id={styles.ul}>
        <div id={styles.row}>
          {" "}
          {props.results.map((result) => {
            return (<div key={result.idDrink} onClick={() => props.handleShowDrinkRecipe(result)}>
              <RecipeCard
                id={result.idDrink}
                name={result.strDrink}
                image={result.strDrinkThumb}
                recipe={result.strInstructions}
              />{" "}
            </div>
            )
          })}{" "}
        </div>{" "}
      </ul>
    );
  }
  