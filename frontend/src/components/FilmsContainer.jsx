import React from "react";
import filmsInfo from "../filmsInfo";
import FilmWindow from "./FilmWindow";

import "../styles/components-styles/FilmsContainer-styles.scss";

const FilmsContainer = () => {
  const [filmsData, setFilmsData] = React.useState(
    filmsInfo.map((film) => {
      return {
        ...film,
        toggle: false,
      };
    })
  );

  /// Zmien moze state na ID (przeciez moze byc tylko 1)_
  /// moze samo scrollowanie tez tu jebanac

  function handleClick(id) {
    setFilmsData((prevFilms) => {
      return prevFilms.map((film) => {
        if (film.id === id) {
          return {
            ...film,
            toggle: !film.toggle,
          };
        } else
          return {
            ...film,
            toggle: false,
          };
      });
    });
  }

  const films = filmsData.map((film) => (
    <FilmWindow
      key={film.id}
      id={film.id}
      filmInfo={film.film}
      toggle={film.toggle}
      handleClick={handleClick}
    />
  ));

  return <div className="FilmsContainer">{films}</div>;
};

export default FilmsContainer;
