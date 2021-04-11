import {Raccourci} from "./Raccourci";

    export const ListeRaccourcis = () => {

        const liste = [
            {
                picto: "https://www.webcup.fr/wp-content/uploads/2020/01/gmail.jpg",
                titre: "Gmail",
                lien: "https://www.google.com/intl/fr/gmail/about/"
            },
            {
                picto: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
                titre: "Github",
                lien: "https://github.com/"
            },

            {
                picto: "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
                titre: "Youtube",
                lien: "https://www.youtube.com/"
            }
        ];
        return (
            <div className="conteneur-horizontal ListeRaccourcis">
                {liste.map (function (raccourci,index){
                    return <Raccourci
                        key={index}
                        picto={raccourci.picto}
                        titre={raccourci.titre}
                        lien={raccourci.lien}/>
                })
                }
            </div>
        );
    };