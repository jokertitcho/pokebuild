import React from 'react';
import Header from '../componants/Header';
import { Routes , Route} from "react-router-dom"
import MyPokemonTeams from '../componants/MyPokemonTeams';
import FindPokemon from '../componants/FindPokemon';
import FeuEauPlante from '../componants/FeuEauPlante';
import OneHundred from '../componants/OneHundred';
import PokByResist from '../componants/PokByResist';
import PokemonByGeneration from '../componants/PokemonByGeneration';
import Types from '../componants/Types';

const IndexPage = () => {
    return (
        <div>
            <Header/>
                
                    <Routes>
                        <Route path="/MyPokemonTeazms" element={<MyPokemonTeams/>}/>
                        <Route path="/FindPokemon" element={<FindPokemon/>}/>
                        <Route path="/FeuEauPlante" element={<FeuEauPlante/>}/>
                        <Route route index element={<OneHundred/>}/>
                        <Route path="/PokByResist" element={<PokByResist/>}/>
                        <Route path="/PokemonByGeneration" element={<PokemonByGeneration/>}/>
                        <Route path="/Types" element={<Types/>}/>
                    </Routes> 
               
               
        </div>
    );
};

export default IndexPage;