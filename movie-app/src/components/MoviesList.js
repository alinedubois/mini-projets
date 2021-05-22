// Au cinéma en ce moment : https://api.themoviedb.org/3/movie/now_playing?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR
// A venir : https://api.themoviedb.org/3/movie/upcoming?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR
// Les mieux notés : https://api.themoviedb.org/3/movie/top_rated?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR
// Les plus populaires : https://api.themoviedb.org/3/movie/popular?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR

import "./MoviesList.css";

import {useEffect, useState} from "react";
import {Button, CircularProgress, TextField} from "@material-ui/core";
import {Movie} from "./Movie";
import ClearIcon from '@material-ui/icons/Clear';


export const MoviesList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [recherche, setRecherche] = useState("");

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR")
            .then((res) => res.json())
            .then((res) => setMoviesList(res.results))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <div className="proposition-films">

            <div className="Movies-list">Films bientôt sur vos écrans...</div>

            <div className="gestion-recherche">

                <TextField label="Recherche"
                           value={recherche}
                           onChange={(event) => setRecherche(event.target.value)}
                />

                {recherche !== "" &&  <ClearIcon

                    onClick={() => setRecherche("")}
                />}

                {recherche !== "maya the bee" &&  <Button variant={'contained'} onClick={() => setRecherche("maya the bee")}>
                    Rechercher Maya l'abeille
                </Button>}

            </div>


            <div className="movies-list">

                {isLoading === true ? <CircularProgress/> : (recherche !== "" ?

                        moviesList
                            .filter((movie) => movie.title.toUpperCase().includes(recherche.toUpperCase()))
                            .map((movie, index) => <Movie
                                    title={movie.title}
                                    adult={movie.adult}
                                    overview={movie.overview}
                                    poster_path={movie.poster_path}
                                    release_date={movie.release_date}
                                />
                            ) :
                        moviesList.map((movie, index) => <Movie
                                title={movie.title}
                                adult={movie.adult}
                                overview={movie.overview}
                                poster_path={movie.poster_path}
                                release_date={movie.release_date}
                            />
                        )
                )

                }


            </div>
        </div>

    )
}