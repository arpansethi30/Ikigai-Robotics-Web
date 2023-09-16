import { Link } from "react-router-dom";
import { PartnersSection } from "./partners-section";
import { Logo } from "./logo";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer">
      <PartnersSection />
      <div className="footer-content-container">
        <div className="footer-container-left flex flex-col gap-[20px]">
          <Logo />
          <div>
            <p className="mb-2 font-bold">Email Us</p>
            <p className="para-font">hello@ikigairobotics.com</p>
          </div>
        </div>
        <div className="footer-container-right">
          <div className="resources">
            <div className="resources-title">Resources</div>
            <div className="resources-links">
              <div className="resources-link-item">
                <Link to="/coming-soon" className="link">
                  Contacts
                </Link>
              </div>
              <div className="resources-link-item">
                <Link to="/coming-soon" className="link">
                  News
                </Link>
              </div>
              <div className="resources-link-item">
                <Link to="/coming-soon" className="link">
                  FAQs
                </Link>
              </div>
              <div className="resources-link-item">
                <Link to="/coming-soon" className="link">
                  Jobs
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-item">
              <Link
                to="https://github.com/arpansethi30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/github.svg" alt="github" />
              </Link>
            </div>
            <div className="footer-link-item">
              <Link
                to="https://www.ikigairobotics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/youtube.svg" alt="youtube" />
              </Link>
            </div>
            <div className="footer-link-item">
              <Link
                to="https://www.instagram.com/ikigairobots/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/instagram.svg" alt="instagram" />
              </Link>
            </div>
            <div className="footer-link-item">
              <Link
                to="https://twitter.com/IkigaiRobotics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/twitter.svg" alt="twitter" />
              </Link>
            </div>
            <div className="footer-link-item">
              <Link
                to="https://www.linkedin.com/company/ikigairobotics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/linkedin.svg" alt="linkedin" />
              </Link>
            </div>
            <div className="footer-link-item">
              <Link to="https://discord.com/invite/swctQdWaS4">
                <img src="assets/discord.svg" alt="discord" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-end mt-[100px]">
        <div className="footer-links">
          <div className="link-item">
            <Link to="/coming-soon" className="link">
              Terms of Service
            </Link>
          </div>
          <div className="link-item">
            <Link to="/coming-soon" className="link">
              Privacy Policy
            </Link>
          </div>
          <div className="link-item">
            <Link to="/coming-soon" className="link">
              Sitemap
            </Link>
          </div>
          <div className="link-item">
            <Link to="/coming-soon" className="link">
              Stories
            </Link>
          </div>
        </div>
        <div className="footer-copyright para-text">
          © Copyright 2023, Ikigai Robotics Pvt. Ltd.
        </div>
      </div>
    </div>
  );
};
