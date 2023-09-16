import { Link } from "react-router-dom";

interface NewsSectionProps {}

export const NewsSection: React.FC<NewsSectionProps> = ({}) => {
  return (
    <div className="news">
      <h1 className="news-heading">News</h1>
      <div className="news-grid">
        <div className="news-outer-container">
          <div className="news-inner-container">
            <div className="overlay">
              <div className="news-box-heading">
                Preparation Tech: David Hanson on Art + Human-Like Robots
              </div>
              <div className="description">
                Originally published by Deborah Carter, Co-Founder at
                NewTechKids.com on May 12, 2020. Do you know...
              </div>
              <div className="read-more">
                <Link to="/coming-soon" className="link">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="news-outer-container">
          <div className="news-inner-container">
            <div className="overlay">
              <div className="news-box-heading">
                Preparation Tech: David Hanson on Art + Human-Like Robots
              </div>
              <div className="description">
                Originally published by Deborah Carter, Co-Founder at
                NewTechKids.com on May 12, 2020. Do you know...
              </div>
              <div className="read-more">
                <Link to="/coming-soon" className="link">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="news-outer-container">
          <div className="news-inner-container">
            <div className="overlay">
              <div className="news-box-heading">
                Preparation Tech: David Hanson on Art + Human-Like Robots
              </div>
              <div className="description">
                Originally published by Deborah Carter, Co-Founder at
                NewTechKids.com on May 12, 2020. Do you know...
              </div>
              <div className="read-more">
                <Link to="/coming-soon" className="link">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
