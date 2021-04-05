import logo from './logo.svg';
import './App.css';
import {Logo} from "./Logo";
import {Recherche} from "./Recherche";
import {ListeRaccourcis} from "./ListeRaccourcis";

function App() {
  return (
    <div className="conteneur-vertical hauteur-ecran">
      <Logo/>
      <Recherche/>
      <ListeRaccourcis/>

    </div>
  );
}

export default App;
