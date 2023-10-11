import React, { useContext } from "react";
import Link from "next/link";
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
        </ul>
      </div>
    );
  
}

export default Navigation;
