// https://www.breakingbadapi.com/api/characters
import "./CharacterList.css";
import {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import {Character} from "./Character";


export const CharacterList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/characters")
            .then((res) => res.json())
            .then((res) => setCharacters(res))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, [])

    return (

        <div className="characterList">
            <div className="BB-casting">
                <div className="debut-mot">Br</div>
                <div className="mot">eaking&#160;</div>
                <div className="debut-mot">Ba</div>
                <div className="mot">d</div>
            </div>
            <div className="CharacterList">
                {isLoading === true ? <CircularProgress/> :
                    characters.map((character, index) =>
                        <Character
                            key={index}
                            name={character.name}
                            img={character.img}
                            birthday={character.birthday}
                            nickname={character.nickname}
                            portrayed={character.portrayed}
                            status={character.status}
                        />
                    )
                }
            </div>

        </div>
    )
}