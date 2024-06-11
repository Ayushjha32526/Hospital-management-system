import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
 
const AboutUs = () => {
  return (
    <>
    
      <Hero
        title={"Learn More About ME| Ayush Jha"}
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
