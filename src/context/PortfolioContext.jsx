import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('useProfile must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://portfoilo-be.onrender.com/";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}home`);
        setProfile(response.data[0]);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setProfile({
          name: "Sachin",
          title: "Software Developer",
          intro: "Failed to load profile.",
          social_media: {}
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const value = {
    profile,
    loading,
    socialMedia: profile?.social_media || {}
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}; 