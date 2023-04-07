import React, { useState } from "react";
import "../components/PanelDescription.scss";

export function PanelDescription(props) {
  const [ContentView, setContentView] = useState(true);

  const showContent = () => {
    setContentView(!ContentView);
  };
  const contentStyle =
    (ContentView ? "view" : "hidden") + "panel__description__content";
  const chevronStyle =
    (ContentView ? "fa-chevron-up" : "fa-chevron-down") + "fas";
  return (
    <div className="panel__description">
      <p className="panel__description__title">
        <span>{props.title}</span>
        <i className={chevronStyle}></i>
      </p>
      <p className={contentStyle}>{props.content}</p>
    </div>
  );
}
