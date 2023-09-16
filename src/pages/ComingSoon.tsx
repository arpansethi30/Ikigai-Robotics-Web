import { FunctionComponent } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const ComingSoon: FunctionComponent = () => {
  return (
    <div className="root">
      <Header />
      <div className="landing-area">
        <div className="landing-area-left">
          <h1 className="heading">Coming Soon...</h1>
        </div>
        <div className="landing-area-right my-[120px]">
          <img
            src="assets/hero-section-image.jpeg"
            alt="landing-area-image"
            className={`rounded-3xl h-[600px] object-cover`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
