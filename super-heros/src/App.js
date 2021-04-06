import './App.css';
import {Personnage} from "./Personnage";

function App() {

    const personnages = [
        {
            nom: "Buffy SUMMERS",
            gentil: true,
            photo: "https://i.pinimg.com/originals/e4/1b/0c/e41b0c6d35c0c2bdd8de5d694326a942.jpg",
            presentation: "Buffy Summers, Tueuse de vampires, vit à Sunnydale, ville située sur la Bouche de l'Enfer. Avec une bonne dose d'humour et avec l'aide précieuse de ses amis, Buffy vient à bout de chacune des épreuves qu'elle affronte. C'est une super-héroine à laquelle on peut facilement s'identifier quel que soit notre âge."
        },
        {
            nom: "Willow Rosenberg",
            gentil: true,
            photo: "http://4.bp.blogspot.com/-HPV4Z4M0T2s/UDvRbcLQPDI/AAAAAAAAAmI/_dJjwQrrHQE/s1600/Willow+on+Buffy+5.jpg",
            presentation: "Willow est la meilleure amie de Buffy. Bonne copine un peu coincée, elle se révèle être une sorcière puissante, véritable alliée pour la lutte contre les forces du mal. Le personnage de Willow est très attachant et évolue énormement au fil de la série : de petite fille coincée à jeune socière, elle passera également par une phase de sorcelerie maléfique qui donne de l'intensité à son personnage."
        },
        {
            nom: "Spike",
            gentil: false,
            photo: "https://file1.telestar.fr/var/telestar/storage/images/2015/photos/que-devient-james-marsters-alias-spike-le-mechant-sexy-de-buffy-contre-les-vampires-photos-163016/1129497-1-fre-FR/Que-devient-James-Marsters-alias-Spike-le-mechant-sexy-de-Buffy-contre-les-vampires-Photos.jpg?alias=original",
            presentation: "L'un de mes personnages préféré. L'humour est l'un des atouts majeurs de Spike. Après avoir passé des années à vouloir la peau de Buffy, il deviendra finalement THE personnage qui permettra à cette dernière de fermer définitivement la Bouche de l'Enfer."
        },
        {
            nom: "Drusilla",
            gentil: false,
            photo: "https://static.wikia.nocookie.net/buffycontrelesvampires/images/0/0c/Juliet_Landau_%282019%29.jpg/revision/latest?cb=20200121180221&path-prefix=fr",
            presentation: "Drusilla est un personnage un peu mystique. On la voit rarement à l'écran, mais son univers est captivant. Tantôt complètement prise dans sa folie, elle sait aussi passer à l'action et démontre alors l'aspect diabolique de son personnage."
        }
    ];

    return (
        <div className="App">
            <div className="titre-page">
                <h1 >LES SUPER-HEROS DE SUNNYDALE</h1>
                <h3>Pas de cape ni de collants pour ces super-héros. Leurs armes de défense : l'humour, l'union du
                    Scooby-Gang et un pieu !</h3>
            </div>
            {
                personnages.map((hero, index) => {
                    return (
                        <Personnage key={index} photo={hero.photo} gentil={hero.gentil} nom={hero.nom}
                                    presentation={hero.presentation}/>
                    );
                })
            }
        </div>
    );
}

export default App;
