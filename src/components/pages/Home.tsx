import * as React from "react";
import { LandingHeroContainer } from "../layouts/LandingContainer/LandingHeroContainer";
import { Accomplishments } from "../layouts/Accomplishments/Accomplishments";
import { VideoContainer } from "../layouts/VideoContainer/VideoContainer";
import { BenefitContainer } from "../layouts/Benefits/BenefitContainer";
import { Footer } from "../layouts/Footer/Footer";
import { Header } from "../layouts/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <LandingHeroContainer />
      <Accomplishments />
      <VideoContainer />
      <BenefitContainer />
      <Footer />
    </>
  );
};
