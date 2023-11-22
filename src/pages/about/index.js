import React from "react";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>About Cocktail Recipes</h1>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Mission</h2>
          <p>
            My mission is to bring the joy and variety of cocktail-making to
            everyone. Whether you're a beginner or an experienced mixologist,
            this site offers something for everyone.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What This App Offers</h2>
          <p>
            Explore a wide range of cocktail recipes, from timeless classics to
            modern twists. Each recipe comes with detailed instructions and
            ingredient lists, making it easy to mix up your favorite drinks at
            home and save a little cash from going out.
          </p>
        </section>

        <section className={styles.section}>
          <h2>The Team</h2>
          <p>
            Well - it's just me, Mason Sams. I'm just your consumate web
            developer who happens to also be a cocktail enthusiast. I thought
            why not blend some of my passions into one fun project? My goal is
            simply to showcase my use of Next.js and to make it fun and
            user-friendly and engaging site for other cocktail enjoyers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            Got questions or suggestions? I'd open to all comments and would
            love to hear from you. Reach out to me if you find this project.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
