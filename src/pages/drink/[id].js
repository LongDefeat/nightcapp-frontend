import axios from "axios";
import Head from "next/head";
import HomepageIntro from "../../components/HomepageIntro";
import Navigation from "../../components/routes-nav/Navigation";
import RecipeDetails from "../../components/RecipeDetails";

export default function DrinkPage(props) {
    const { cocktail: drink } = props;

    return (
        <div>
            <Head>
                <title> Nightcapp Cocktail Details </title>
            </Head>
            <main>
                <Navigation />
                <HomepageIntro />
                <RecipeDetails recipe={drink} />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const res = await axios.get(`http://localhost:3001/cocktails/${id}`);
        const cocktail = res.data;

        return {
            props: {
                cocktail,
            },
        };
    } catch (error) {
        console.error("Error fetching cocktail data:", error.message);
        return {
            notFound: true,
        };
    }
}
