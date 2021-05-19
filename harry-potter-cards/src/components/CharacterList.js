// http://hp-api.herokuapp.com/api/characters
import "./CharacterList.css";
import {useEffect, useState} from "react";
import {CircularProgress, TextField} from "@material-ui/core";
import {Character} from "./Character";

export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [recherche, setRecherche] = useState("");

    useEffect(() => {
        fetch("http://hp-api.herokuapp.com/api/characters")
            .then((res) => res.json())
            .then((res) => setCharacters(res))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (

        <>
            <h1 className="title-page">Personnages de Harry Potter</h1>

            <TextField label="Recherche"
                       value={recherche}
                       onChange={(event) => setRecherche(event.target.value)}
            />

            <div className="CharacterList">
                {isLoading === true ? <CircularProgress/> : (recherche !== "" ?
                        characters
                            .filter((character) => character.name.toLowerCase().includes(recherche.toLowerCase()))
                            .map((character, index) => <Character
                                key={index}
                                name={character.name}
                                image={character.image}
                                actor={character.actor}
                                ancestry={character.ancestry}
                                dateOfBirth={character.dateOfBirth}
                                house={character.house}
                                patronus={character.patronus}
                            />
                ) :
                    characters
                    .map((character, index) => <Character
                    key={index}
                    name={character.name}
                    image={character.image}
                    actor={character.actor}
                    ancestry={character.ancestry}
                    dateOfBirth={character.dateOfBirth}
                    house={character.house}
                    patronus={character.patronus}
                    />
                    )
                )
                }
            </div>
        </>
    )
}