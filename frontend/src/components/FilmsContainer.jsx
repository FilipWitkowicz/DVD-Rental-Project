import React from "react";
import filmsInfo from "../filmsInfo";
import FilmWindow from "./FilmWindow";

import "../styles/components-styles/FilmsContainer-styles.scss";

const FilmsContainer = () => {
  const [toggledFilmID, setToggledFilmID] = React.useState(undefined);

  /// Zmien moze state na ID (przeciez moze byc tylko 1)_
  /// moze samo scrollowanie tez tu jebanac

  function handleClick(id) {
    setToggledFilmID((prevToggledFilmID) => {
      return id === prevToggledFilmID ? undefined : id;
    });
  }

  const films = filmsInfo.map((film) => (
    <FilmWindow
      key={film.id}
      id={film.id}
      filmInfo={film.film}
      toggle={toggledFilmID === film.id ? true : false}
      handleClick={handleClick}
    />
  ));

  return <div className="FilmsContainer">{films}</div>;
};

export default FilmsContainer;
