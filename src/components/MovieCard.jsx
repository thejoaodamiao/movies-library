import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imgUrl = import.meta.env.VITE_IMG
const imgPlaceHolderUrl = "https://placehold.jp/500x750.png?text=no+image"

const MovieCard = ({movie, showLink = true}) => {
  let classeCSS;
  if(movie === null) return
  const average = movie.vote_average.toFixed(1);
  if ( average > 7.5) {
    classeCSS = 'green';
  } else if (average > 5) {
    classeCSS = 'yellow';
  } else {
    classeCSS = 'red';
  }
  return (
    <div className="movie-card">
        {movie.poster_path === null && < img src={imgPlaceHolderUrl} alt={movie.title} />}
        {movie.poster_path != null && < img src={imgUrl + movie.poster_path} alt={movie.title} />}
        <h2>{movie.title}</h2>
        {!showLink && 
        <p>
          <FaStar className="star"/> {movie.vote_average.toFixed(1)}
        </p> }
        {showLink &&
        <><p id="average" className={classeCSS}>
          {movie.vote_average.toFixed(1)}
        </p><Link to={`/movie/${movie.id}`}>Detalhes</Link></>}
    </div>
  )
}

export default MovieCard