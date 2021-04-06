import {useState} from "react";

export const Personnage = ({photo, nom, presentation, gentil}) => {
    const [liked, setLiked] = useState(false);
    const like = () => setLiked(!liked);
    return (
        <div className="conteneur-horizontal">
            <img className="photo" src={photo} alt={nom}/>
            <div className="conteneur-vertical">
                <h2>{nom}</h2>
                <p>{presentation}</p>
                <h5>{gentil ?"Personnage gentil" : "Personnage méchant"}</h5>
                {
                    liked ? <i className="material-icons" onClick={like}>favorite</i> : <i className="material-icons" onClick={like}>favorite_border</i>
                }
            </div>
        </div>
    );
}









