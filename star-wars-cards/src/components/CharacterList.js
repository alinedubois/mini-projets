// https://akabab.github.io/starwars-api/api/all.json

import "./CharacterList.css";
import {useEffect, useState} from "react";
import {Button, CircularProgress, TextField} from "@material-ui/core";
import {Character} from "./Character";
import ClearIcon from '@material-ui/icons/Clear';

export const CharacterList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [characterList, setCharacterList] = useState([]);
    const [recherche, setRecherche] = useState("");

    useEffect(() => {

        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then((res) => res.json())
            .then((res) => setCharacterList(res))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <div className="liste-personnages">
            <div className="characterList"> STAR WARS</div>

            <div className="gestion-recherche">

                <TextField label="Recherche"
                           value={recherche}
                           onChange={(event) => setRecherche(event.target.value)}
                />

                {recherche !== "" &&  <ClearIcon className="clear-button"

                    onClick={() => setRecherche("")}
                />}

                {recherche !== "chewbacca" &&  <Button variant={'contained'} onClick={() => setRecherche("chewbacca")}>
                    Rechercher Chewbacca
                </Button>
                    }
            </div>

            <div className="star-wars">
                {isLoading === true ? <CircularProgress/> : (recherche !== "" ?

                        characterList
                            .filter((character) => character.name.toUpperCase().includes(recherche.toUpperCase()))
                            .map((character, index) => <Character
                                    name={character.name}
                                    image={character.image}
                                    key={index}
                                    height={character.height}
                                    homeworld={character.homeworld}
                                    species={character.species}
                                />
                            ) :
                        characterList
                            .map((character, index) => <Character
                                    name={character.name}
                                    image={character.image}
                                    key={index}
                                    height={character.height}
                                    homeworld={character.homeworld}
                                    species={character.species}
                                />
                            )
                )
                }
            </div>
        </div>
    )
}