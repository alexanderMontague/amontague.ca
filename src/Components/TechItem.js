import React from "react";

const TechItem = props => {
  const { imageSrc, header, text } = props;
  return (
    <div className="techCluster">
      <img src={imageSrc} className="techIcon" />
      <h4>{header}</h4>
      <div>{text}</div>
    </div>
  );
};

export default TechItem;
