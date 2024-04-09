import React, { useEffect, useState } from 'react';

const PokemonByGeneration = () => {
    const [arrGenerationType, setArrGenerationType] = useState()

    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/3")
        .then((data)=>{return data.json()})
        .then((arrGen)=> setArrGenerationType(arrGen))
    }, [])

    return (
        <div>
            {arrGenerationType && <div>
                {arrGenerationType.map((pokgeneration)=>{
                    return (
                        <section>
                            <h2>{pokgeneration.name}</h2>
                            <img src={pokgeneration.image} alt={pokgeneration.name}/>
                            {<p>Type : {pokgeneration.apiTypes[0].name}</p>}
                            <p>Generation : {pokgeneration.apiGeneration}</p>
                        </section>
                    )
                })}
                </div>}
            
        </div>
    );
};

export default PokemonByGeneration;