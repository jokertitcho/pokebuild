import Header from "./componants/Header"
import './App.css';
import OneHundred from './componants/OneHundred';
import Types from "./componants/Types"
import FeuEauPlante from "./componants/FeuEauPlante";
import MyPokemonTeams from "./componants/MyPokemonTeams";
import PokemonByGeneration from "./componants/PokemonByGeneration";
import FindPokemon from "./componants/FindPokemon";

function App() {
  
const gen1 = 1
const gen2 = 2
const gen3 = 3
const gen4 = 4
const gen5 = 5
const gen6 = 6
const gen7 = 7
const gen8 = 8
 

  return (
    <div className="App">
      <Header/>
      {/* <MyPokemonTeams/>
      <OneHundred/>
      <Types/>
      <FeuEauPlante/> */}
      <PokemonByGeneration generation={gen1} />
      {/* <PokemonByGeneration generation={gen2} />
      <PokemonByGeneration generation={gen3} />
      <PokemonByGeneration generation={gen4} />
      <PokemonByGeneration generation={gen5} />
      <PokemonByGeneration generation={gen6} />
      <PokemonByGeneration generation={gen7} />
      <PokemonByGeneration generation={gen8} /> */}
      

      <FindPokemon/>

    </div>
  );
}

export default App;
