// Au cinéma en ce moment : https://api.themoviedb.org/3/movie/now_playing?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR
// A venir : https://api.themoviedb.org/3/movie/upcoming?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR
// Les mieux notés : https://api.themoviedb.org/3/movie/top_rated?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR
// Les plus populaires : https://api.themoviedb.org/3/movie/popular?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR

import "./MoviesList.css";

import {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import {Movie} from "./Movie";

export const MoviesList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR")
            .then((res) => res.json())
            .then((res) => setMoviesList(res.results))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <>

            <div className="Movies-list">Films bientôt sur vos écrans...</div>

            <div className="movies-list">

                {isLoading === true ? <CircularProgress/> :
                    moviesList.map((movie, index) => <Movie
                            title={movie.title}
                            adult={movie.adult}
                            overview={movie.overview}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                        />
                    )
                }


            </div>
        </>

    )
}