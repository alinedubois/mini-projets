// https://akabab.github.io/starwars-api/api/all.json

import "./CharacterList.css";
import {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import {Character} from "./Character";

export const CharacterList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {

        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then((res) => res.json())
            .then((res) => setCharacterList(res))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <>
            <div className="characterList"> STAR WARS</div>
            <div className="star-wars">
                {isLoading === true ? <CircularProgress/> :
                    characterList.map((character, index) => <Character
                            name={character.name}
                            image={character.image}
                            key={index}
                            height={character.height}
                            homeworld={character.homeworld}
                            species={character.species}
                        />
                    )
                }
            </div>
        </>
    )
}