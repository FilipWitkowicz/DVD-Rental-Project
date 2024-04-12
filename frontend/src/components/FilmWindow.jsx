const FilmWindow = (props) => {
  const filmInfo = props.filmInfo;

  return (
    <div className="FilmWindow">
      <img src={filmInfo.image} alt={`Poster of the ${filmInfo.title} film`} />
    </div>
  );
};

export default FilmWindow;
