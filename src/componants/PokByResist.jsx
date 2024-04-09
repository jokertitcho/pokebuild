import { useEffect, useState } from "react";

const PokByResist = ({resistance}) => {

    const[poksResist, setPokResist] = useState(false)

    /* const findByResist = (event)=>{
        event.preventDefault()
        const type = event.target.type.value
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + type)
        .then((data)=>{return data.json()})
        .then((arr)=>{setPokResist(arr)})

    } */
    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + resistance)
        .then((data)=>{return data.json()})
        .then((arr)=>{setPokResist(arr)})
    })

    return (
        <div> <h2>Pokemon resitant a {resistance}</h2>

           {/*  <form onSubmit={findByResist}>
                <select name="type" id="resistance" >
                    <option value="acier">Acier</option>    
                    <option value="eau">Eau</option>
                    <option value="feu">Feu</option>
                    <option value="plante">Plante</option>
                </select>  
            <input type="submit" />          
            </form> */}
            <div>
                {poksResist ? <div>{poksResist.map((pok)=>{
                    return (
                        <div>
                            <h3>{pok.name}</h3>
                            <img src={pok.image} alt={pok.name}/>
                        </div>
                        

                    )
                })}</div> : <></>}
            </div>
        </div>
        
    
    );
};

export default PokByResist;