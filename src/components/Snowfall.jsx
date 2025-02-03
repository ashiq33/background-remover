import React from "react";
import "./Snowfall.css";

const Snowfall = () => {
  const snowflakes = Array.from({ length: 100 }).map((_, i) => (
    <div
      key={i}
      className="snowflake"
      style={{
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ));

  return <div className="snowfall">{snowflakes}</div>;
};

export default Snowfall;