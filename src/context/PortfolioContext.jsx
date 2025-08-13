import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader/Loader';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const API_URL = "https://portfoilo-be.onrender.com";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API_URL}/home`);
        setProfile(response.data[0]);
      } catch (error) {
        setProfile({
          error: "Failed to load profile."
        });
      }
    };

    fetchProfile();
  }, []);


  useEffect(()=>{
    const fetchProjects = async ()=>{
      try{
        const response = await axios.get(`${API_URL}/projects`)
        setProjects(response.data)
      }
      catch(error){
        setProjects({
          error: "Failed to load projects"
        })
      }
    }
    fetchProjects()
  },[])

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${API_URL}/skills`);
        if (response.data && response.data.skills) {
          setSkills(response.data.skills);
        } else {
          setSkills(["failed to load skills"]);
        }
      } catch (error) {
        setSkills(["failed to load skills"]);
      }
    };

    fetchSkills();
  }, []);

  const value = {
    profile,
    socialMedia: profile?.social_media || {},
    skills,
    projects,
    LoaderComponent: Loader
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}; 