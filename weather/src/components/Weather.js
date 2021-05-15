// Réaliser une application qui permet d'ajouter autant de 'cartes' des villes que l'on veut surveiller.
// Un appel d'API par carte devra donc être réalisé (voir City.js).
// Chaque carte de ville dont on veut voir la météo devra s'auto-rafraichir toutes les 5 minutes

import {Button, TextField} from "@material-ui/core";
import "./Weather.css";
import {useState} from "react";
import {City} from "./City";


export const Weather = () => {

    const [villeRecherchee, setVilleRecherchee] = useState("");
    const [villes, setVilles] = useState([]);

    const ajouterVille = (event) => {
        event.preventDefault();
        setVilles([...villes, villeRecherchee]);
        setVilleRecherchee("");
    }

    return (

        <div className="Weather">
            <h1>Météo</h1>

            <form onSubmit={ajouterVille}>
                <div className="gestion-ville">

                    <TextField id="standard-basic"
                               label="Ville recherchée"
                               autoComplete={false}
                               value={villeRecherchee}
                               onChange={(event => setVilleRecherchee(event.target.value))}/>

                    <Button variant="contained" onClick={ajouterVille}>Ajouter</Button>

                </div>
            </form>

            <div className="detail-meteo-villes">
                {villes.map((ville, index) => <City
                    key={index}
                    name={ville}
                />)}
            </div>
        </div>

    )
}