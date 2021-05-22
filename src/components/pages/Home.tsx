import * as React from "react";
import { LandingContainer } from "../layouts/LandingContainer/LandingContainer";
import { Recommendation } from "../layouts/Accomplishments/Accomplishments";
import { VideoContainer } from "../layouts/VideoContainer/VideoContainer";
import { BenefitsContainer } from "../layouts/Benefits/BenefitContainer";
import { Footer } from "../layouts/Footer/Footer";
import { Header } from "../layouts/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <LandingContainer />
      <Recommendation />
      <VideoContainer />
      <BenefitsContainer />
      <Footer />
    </>
  );
};
