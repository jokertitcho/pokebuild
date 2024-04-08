import { useState } from "react";


const OneHundred = () => {
    const [poksHundred, setPoksHundred] = useState(null)
    console.log(poksHundred);
    const callPokeApi = ()=>{
        fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
        .then((pokemons)=>{return pokemons.json()})
        .then((data)=>{setPoksHundred(data)})
    }
    return (
        <div >
            <button onClick={callPokeApi}>Appel 100 pokemons</button>
            <div></div>
            {poksHundred && <p className="pokemons100">{poksHundred.map((pok)=>{
                return(
                    <div className="card-pokemon">
                        <h2>{pok.name}</h2>
                        <img src={pok.image} alt={pok.name}/>
                        <ul><h4>Types :</h4>  {pok.apiTypes.map((type)=>{
                            return (
                                <li>{type.name}</li>
                            )
                        })}</ul>
                        <h4>Statistiques :</h4> 
                        <ul>
                            <li>Vie : {pok.stats.HP}</li>
                            <li>Attaque : {pok.stats.attack}</li>
                            <li>Defense : {pok.stats.defense}</li>
                            <li>Attaque Speciale : {pok.stats.special_attack}</li>
                            <li>Defense Speciale : {pok.stats.special_defense}</li>
                            <li>Vitesse  : {pok.stats.speed}</li>
                        </ul>
                    </div>   
                )
            })}</p>}
        </div> 
    );
};

export default OneHundred;