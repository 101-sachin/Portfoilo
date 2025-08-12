import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./ScrollToEdgeButton.css";

const ScrollToEdgeButton = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = () => {
    window.scrollTo({
      top: atTop ? document.body.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-edge-btn" onClick={scrollTo}>
      {atTop ? <FaChevronDown /> : <FaChevronUp />}
    </button>
  );
};

export default ScrollToEdgeButton;
