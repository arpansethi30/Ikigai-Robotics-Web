interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <div className="landing-area">
      <div className="landing-area-left">
        <div className="flex items-end content gap-[120px]">
          <h1 className={`text-[100px]`}>
            Redefining
            <br />
            World.
          </h1>

          <p className={`para-text p-6`}>
            Shaping futures through cutting-edge automation, versatile service
            robotics, interactive kits, advanced computer vision, and AI
            innovation.
          </p>
        </div>
      </div>
      <div className="landing-area-right mt-[120px]">
        <img
          src="assets/hero-section-image.jpeg"
          alt="landing-area-image"
          className={`rounded-3xl h-[600px] object-cover`}
        />
      </div>
    </div>
  );
};
