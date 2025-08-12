import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import "./Home.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const API_URL = "https://sachin-s-portfolio-eta.vercel.app/home";
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProfile(data[0]))  
      .catch(() =>
        setProfile({
          name: "Sachin",
          title: "Developer",
          intro: "Failed to load profile.",
        })
      );

    window.scrollTo(0, 0);
  }, []);

  if (!profile) {
    return <Loader />;
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
                href="https://drive.google.com/file/d/1wUopo31JTF6rAmEo9WNwCGz1o87gr0G6/view?usp=sharing"
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
              src="src/assets/photo.png"
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
