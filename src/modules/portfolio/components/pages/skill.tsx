import React from "react";
import DefaultLayout from "../templates/DefaultLayout";
import SkillsSection from "../organisms/SkillsSection";

const Skills: React.FC = () => {

  return (
    <DefaultLayout>
      <section
      >
        <SkillsSection />
      </section>
    </DefaultLayout>
  );
};

export default Skills;