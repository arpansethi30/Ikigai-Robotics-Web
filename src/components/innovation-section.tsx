interface InnovationSectionProps {}

export const InnovationSection: React.FC<InnovationSectionProps> = ({}) => {
  return (
    <div className="innovation-section">
      <div className="flex items-center justify-between align-middle heading">
        <div className="flex-1 innovation-content">
          <h1 className="leading-[1.7] heading-text">
            Innovation
            <br />
            Automation
            <br />
            Evolution
          </h1>
          <p className="description w-[70%] para-text">
            Channeling purpose to pioneer the future. We intertwine passion and
            profession, breathing life into machines.
          </p>
        </div>
        <div className="flex-1 heading-image">
          <img
            src="assets/innovation-section-image-1.jpeg"
            alt="innovation-section-bot-one"
            className={`rounded-3xl h-[400px] w-[100%] object-cover`}
          />
        </div>
      </div>

      <div className="vision gap-[100px]">
        <div className="flex-1 vision-image">
          <img
            src="assets/innovation-section-image-2.jpeg"
            alt="innovation-section-bot-two"
            className={`rounded-3xl h-[400px] w-[100%] object-cover`}
          />
        </div>
        <div className="flex-1 vision-content mt-[50px]">
          <div className="vision-section">
            <h1>Global Vision</h1>
            <p className="mt-4 description para-text">
              Leading the charge in India's robotic revolution with a global
              mindset. Seamlessly blending into global markets with uniquely
              tailored solutions.
            </p>
          </div>
          <div className="vision-section mt-[50px]">
            <h1>Crafted Precision</h1>
            <p className="mt-4 description para-text">
              Merging aesthetics and efficiency in every creation. A masterpiece
              of design and functionality. Rigorously optimized designs to
              ensure maximum productivity with minimal footprint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
