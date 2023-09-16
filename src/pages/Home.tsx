import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { InnovationSection } from "../components/innovation-section";
import { NewsSection } from "../components/news-section";
import { PartnersSection } from "../components/partners-section";
import { Footer } from "../components/footer";

const Home: FunctionComponent = () => {
  return (
    <div className="root">
      <Header />
      <HeroSection />
      <InnovationSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Home;
