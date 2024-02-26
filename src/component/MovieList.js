import MovieItem from "./MovieItem.js";

const MovieList = ({dummy, movieYear}) => {

    const filterDummy =
        movieYear === 'all'
        ? dummy
        : dummy.filter((it) => (it.mYear === movieYear));

    return(
        <ul className="MovieList">
            {filterDummy.map((it) => (
                <MovieItem key={it.id} {...it} />
            ))}
        </ul>
    );
}
export default MovieList;