import * as React from "react";
import { LandingContainer } from "../layouts/LandingContainer/LandingContainer";
import { Accomplishments } from "../layouts/Accomplishments/Accomplishments";
import { VideoContainer } from "../layouts/VideoContainer/VideoContainer";
import { BenefitContainer } from "../layouts/Benefits/BenefitContainer";
import { Footer } from "../layouts/Footer/Footer";
import { Header } from "../layouts/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <LandingContainer />
      <Accomplishments />
      <VideoContainer />
      <BenefitContainer />
      <Footer />
    </>
  );
};
