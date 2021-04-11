import "./Album.css";

export const Album = ({titre, artiste, annee, genre, pochette}) => (
    <div className="conteneur-vertical">
        <h2>{titre}</h2>
        <div className="conteneur-horizontal">
            <img className="pochette" src={pochette}/>
            <div className="conteneur-vertical">
            <p>{artiste}</p>
            <p>{annee}</p>
            <p>{genre}</p>
            </div>
        </div>

    </div>
)
