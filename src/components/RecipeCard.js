import Link from "next/link";
import React from "react";
import styles from "./styles/RecipeCard.module.css";

export default function RecipeCard({ id, name, image, recipe }) {
    console.log("RecipeCard props:", {
        name,
        image,
    });
    return (
        <Link href={`/drink/${id}`}>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <h3 className={styles.cocktailName}> {name} </h3>{" "}
                    <img src={image} className={styles.cardImage} />{" "}
                    <div id={styles.instructionsBox}>
                        <p className={styles.recipeInstructions}> {recipe} </p>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </Link>
    );
}
