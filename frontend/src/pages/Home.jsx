import FilmWindow from "../components/FilmWindow";
import filmsInfo from "../filmsInfo";

const Home = () => {
  const films = filmsInfo.map((film) => (
    <FilmWindow key={film.id} filmInfo={film.film} />
  ));

  return (
    <div>
      <h2>Home</h2>
      {films}
    </div>
  );
};

export default Home;
