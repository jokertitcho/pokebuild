import Header from "./componants/Header"
import './App.css';
import OneHundred from './componants/OneHundred';
import Types from "./componants/Types"
import FeuEauPlante from "./componants/FeuEauPlante";
import MyPokemonTeams from "./componants/MyPokemonTeams";
import PokemonByGeneration from "./componants/PokemonByGeneration";
import FindPokemon from "./componants/FindPokemon";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MyPokemonTeams/>
      <OneHundred/>
      <Types/>
      <FeuEauPlante/> */}
      <PokemonByGeneration/>
      <FindPokemon/>

    </div>
  );
}

export default App;
