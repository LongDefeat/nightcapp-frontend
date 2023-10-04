import { useState, useContext } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import { Inter } from '@next/font/google'
import HomepageIntro from '@/components/HomepageIntro'
import SearchForm from '@/components/SearchForm'
import Navigation from "@/components/routes-nav/Navigation";
import searchCocktail from "./api/searchCocktail";
import randomCocktail from "./api/randomCocktail";
import Alert from "@/components/Alert";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prevents users from searching if the search field is empty
    if (searchTerm.trim() === "") {
      return;
    }
    const data = await searchCocktail(searchTerm);
    setSearchTerm("");
    if (data == undefined) {
      setAlert(true);
    } else {
      // Pushing variables through to page and setting the route
      router.push({
        pathname: `/drinks/${searchTerm}`,
        query: {
          drinks: JSON.stringify(data),
        },
      });
    }
  };

  const handleShowDrinkRecipe = (result) => {
    // Pushing variables through to page and setting the route
    router.push({
      pathname: `/drink/${result.idDrink}`,
      query: {
        drink: JSON.stringify(result),
      },
    });
  };

  const handleShowRandomCocktailRecipe = async () => {
    const data = await randomCocktail();
    handleShowDrinkRecipe(data.recipe);
  };

  const handleSetAlertFalse = () => {
    setAlert(false);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Head>
        <title> Nightcapp </title>{" "}
        <link href="Home.module.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Vibur:400"
          rel="stylesheet"
          type="text/css"
        ></link>{" "}
      </Head>{" "}
      <main className={styles.container}>
        <Navigation handleSetAlertFalse={handleSetAlertFalse} />
        <HomepageIntro />
        <Link href="/list/categories" className={styles.categoriesLink}>Browse Categories</Link>
        <Link href="/list/ingredients" className={styles.ingredientsLink}>Browse Ingredients</Link>
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleShowRandomCocktailRecipe={handleShowRandomCocktailRecipe}
          searchTerm={searchTerm}
        />{" "}
        {alert === true && <Alert />}
      </main>{" "}
    </>
  )
}
