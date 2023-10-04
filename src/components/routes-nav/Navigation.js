import React, { useContext } from "react";
import Link from "next/Link";
import styles from "../styles/Navigation.module.css";

function Navigation(props) {
    return (
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" legacyBehavior>
              About Us
            </Link>
          </li>
<<<<<<< HEAD
          <li className={styles.navItem}>
            <Link href="/list/categories">
              Browse Categories
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/list/ingredients">
              Ingredient List
            </Link>
          </li>
=======
>>>>>>> 587cb7f5955c6ddf527f669b4a1b5f2cb6986924
        </ul>
      </div>
    );
  
}

export default Navigation;
