interface PartnersSectionProps {}

export const PartnersSection: React.FC<PartnersSectionProps> = ({}) => {
  return (
    <>
      <div className="partners">
        <img src="assets/make-in-india.png" alt="make-in-india" />
        <img
          src="assets/ministry-of-commerce-and-industry.png"
          alt="ministry-of-commerce-and-industry"
        />
        <img src="assets/startup-india.png" alt="startup-india" />
        <img src="assets/digital-india.png" alt="digital-india" />
      </div>
    </>
  );
};
