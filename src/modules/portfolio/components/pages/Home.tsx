import React from "react";
import DefaultLayout from "../templates/DefaultLayout";
import HeroSection from "../organisms/HeroSection";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <section
      >
        <HeroSection />
      </section>
    </DefaultLayout>
  );
};

export default Home;