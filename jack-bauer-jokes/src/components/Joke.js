// http://api.icndb.com/jokes/random?firstName=Jack&lastName=Bauer
import "./Joke.css";
import {Button} from "@material-ui/core";
import {useEffect, useState} from "react";

export const Joke = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [joke, setJoke] = useState("");

    useEffect(() => {
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
    },[])


    return (
        <div className="page-principale">
            <div className="logo">
                <img src="/photo/24-title.svg.png" alt="logo 24h"/>
            </div>
            <div className="photo-JB">
                <img src="/photo/JaBa.jpg" alt="Jack Bauer"/>
            </div>
            <div className="joke">
                {joke}
            </div>
            <Button className="button" variant="contained">Next joke</Button>
        </div>
    )
}
