import React from "react";

interface TechnologyProps {
  name: string;
  alt: string;
  path: string;
}

export const Technology: React.FC<TechnologyProps> = ({ path, alt }) => {
  return (
    <img src={path} alt={alt} className="icon tech-stack__icon" />
  );
};
