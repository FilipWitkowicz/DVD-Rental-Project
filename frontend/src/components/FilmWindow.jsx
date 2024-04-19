import React, { useRef } from "react";
import "../styles/components-styles/FilmWindow-styles.scss";

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
      onClick={handleClick}
    >
      <img src={filmInfo.image} alt={`Poster of the ${filmInfo.title} film`} />
      {props.toggle ? (
        <div className="FilmWindow--description">{filmInfo.description}</div>
      ) : undefined}
    </div>
  );
};
export default FilmWindow;
