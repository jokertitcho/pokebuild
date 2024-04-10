import Header from "./componants/Header"
import './App.css';
import OneHundred from './componants/OneHundred';
import Types from "./componants/Types"
import FeuEauPlante from "./componants/FeuEauPlante";
import MyPokemonTeams from "./componants/MyPokemonTeams";
import PokemonByGeneration from "./componants/PokemonByGeneration";
import FindPokemon from "./componants/FindPokemon";
import PokByResist from "./componants/PokByResist"
import {BrowserRouter, Routes ,Route} from "react-router-dom"

function App() {
  

 

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/MyPokemonTeazms" element={<MyPokemonTeams/>}/>
          <Route path="/FindPokemon" element={<FindPokemon/>}/>
          <Route path="/FeuEauPlante" element={<FeuEauPlante/>}/>
          <Route path="/OneHundred" element={<OneHundred/>}/>
          <Route path="/PokByResist" element={<PokByResist/>}/>
          <Route path="/PokemonByGeneration" element={<PokemonByGeneration/>}/>
          <Route path="/Types" element={<Types/>}/>

        </Routes>
      
      </BrowserRouter>
      
      {/* <MyPokemonTeams/>
      <OneHundred/>
      <Types/>
      <FeuEauPlante/> */}
      {/* <PokemonByGeneration generation={gen1} /> */}
      {/* <PokemonByGeneration generation={gen2} />
      <PokemonByGeneration generation={gen3} />
      <PokemonByGeneration generation={gen4} />
      <PokemonByGeneration generation={gen5} />
      <PokemonByGeneration generation={gen6} />
      <PokemonByGeneration generation={gen7} />
      <PokemonByGeneration generation={gen8} /> */}
      

      {/* <FindPokemon/> */}

    </div>
  );
}

export default App;
