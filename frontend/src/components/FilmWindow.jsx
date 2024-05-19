import React, { useRef } from "react";
import "../styles/components-styles/FilmWindow-styles.scss";
import FilmWindowDescription from "./FilmWindowDescription";

const FilmWindow = (props) => {
  const filmInfo = props.filmInfo;
  const filmRef = useRef(null);

  const handleClick = () => {
    props.handleClick(props.id);
    setTimeout(() => {
      filmRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 10);
  };

  return (
    <div
      ref={filmRef}
      className={`FilmWindow--container${props.toggle ? "-wide" : ""}`}
    >
      <img
        src={filmInfo.image}
        alt={`Poster of the ${filmInfo.title} film`}
        onClick={handleClick}
      />
      {props.toggle ? <FilmWindowDescription filmInfo={filmInfo} /> : undefined}
    </div>
  );
};
export default FilmWindow;
