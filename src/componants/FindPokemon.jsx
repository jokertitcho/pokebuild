import { useState } from "react";

const FindPokemon = () => {

    const [pokefind, setPokeFind] = useState()
    const [input, setInput] = useState()
console.log(pokefind);

    const findOnePok = ()=>{
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${input}`)
        .then((data)=> {return data.json()})
        .then((arrpok)=>{setPokeFind(arrpok)})
    }
    
    const inputCatch = (e)=>{setInput(e.target.value)}


    return (
        <div>
            <label>Tapez le nom d'un pokemon</label>
            <input type="text" name="pokefind" onChange={inputCatch}/>
            <button onClick={findOnePok}>rechercher</button>

            <p>voici votre pokemon {pokefind.name === input ? <p>{pokefind.name}</p> : <p>pokemon non trouvé</p>} </p>

        </div>
    );
};

export default FindPokemon;