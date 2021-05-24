// http://api.icndb.com/jokes/random?firstName=Jack&lastName=Bauer
import "./Joke.css";
import {Button, FormControlLabel, Switch} from "@material-ui/core";
import {useEffect, useState} from "react";

export const Joke = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [joke, setJoke] = useState("");
    const [afficherPhoto, setAfficherPhoto] = useState(true);

    const getJoke= () => {
        fetch("http://api.icndb.com/jokes/random?firstName=Jack&lastName=Bauer")
            .then((response) => response.json())
            .then((responseJson) => {
                    setIsLoaded(true);
                    setJoke(responseJson.value.joke);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        getJoke();
    },[])


    return (
        <div className="page-principale">
            <div className="logo">
                <img src="/photo/24-title.svg.png" alt="logo 24h"/>
            </div>
            <div className="photo-JB">
                {afficherPhoto===true ? <img src="/photo/JaBa.jpg" alt="Jack Bauer"/> : <img src="/photo/JB.jpg" alt="Jack Bauer"/>}
            </div>
            <div className="joke">
                {joke}
            </div>
            <Button className="button" variant="contained" onClick={getJoke}>Next joke</Button>
            <FormControlLabel
                control={
                    <Switch
                        checked={afficherPhoto}
                        onChange={() => setAfficherPhoto(!afficherPhoto)}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Primary"
            />
        </div>
    )
}
