import { Link } from "react-router-dom";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div className="brand">
      <Link to="/" className="brand brand-name-link futuristic">
        <div className="brand-logo h-fit">
          <img src="assets/logo.svg" alt="logo" className={`w-[95%]`} />
        </div>
        <div className="brand-name">Ikigai Robotics</div>
      </Link>
    </div>
  );
};
