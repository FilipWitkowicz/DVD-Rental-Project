import "../styles/components-styles/FilmWindowDescription-styles.scss";
import Button from "./basic_components/Button";

const FilmWindowDescription = (props) => {
  const filmInfo = props.filmInfo;

  return (
    <div className="FilmWindowDescription--container">
      <h2 className="FilmWindowDescription--title">{filmInfo.title}</h2>
      <section className="FilmWindowDescription--info">
        {filmInfo.description}
      </section>
      <Button onClick={null} buttonType={"info"}>
        Check availability
      </Button>
    </div>
  );
};

export default FilmWindowDescription;
