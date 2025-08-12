import React, { useEffect } from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { usePortfolio } from "../../context/PortfolioContext";

const Home = () => {
  const { profile, LoaderComponent } = usePortfolio();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!profile) {
    return <LoaderComponent />;
  }


  return (
    <div>
      <section className="home-container" id="home">
        <div className="home-content">
          <div className="left-content">
            <h2 className="profile-name">{profile.name}</h2>
            <h4 className="profile-title">{profile.title}</h4>
            <p className="profile-intro">{profile.intro}</p>
            <div className="resume-btn-container">
              <a
                href={profile.resume_link}
                className="resume-btn"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
            <div className="social-icons">
              {profile.social_media?.linkedin && (
                <a
                  href={profile.social_media.linkedin}
                  className="icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {profile.social_media?.github && (
                <a
                  href={profile.social_media.github}
                  className="icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              )}
              {profile.social_media?.x && (
                <a
                  href={profile.social_media.x}
                  className="icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              )}
              {profile.social_media?.mail && (
                <a
                  href={`mailto:${profile.social_media.mail}`}
                  className="icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope />
                </a>
              )}
            </div>
          </div>
          <div className="right-content">
            <img
              src="/assets/photo.png"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
