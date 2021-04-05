export const Raccourci = ({picto, titre, lien}) => {
    const ouvrirLien = () => document.location.href = lien;
    return (

        <div className="conteneur-vertical" onClick={ouvrirLien}>
            <img className="picto" src={picto} alt="picto"/>
            <div className="titre-picto">{titre}</div>

        </div>
    );
};

