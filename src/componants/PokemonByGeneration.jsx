import React, { useEffect, useState } from 'react';

const PokemonByGeneration = ({generation}) => {

    console.log(generation);
     
    const [arrGenerationType, setArrGenerationType] = useState(null)
    
    useEffect(()=>{

            fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + generation)
            .then((data)=>{return data.json()})
            .then((arrGen)=> {setArrGenerationType(arrGen)})
             
    }, []);
    console.log(arrGenerationType);
    return (
        <div>
            {arrGenerationType && <div>
                {arrGenerationType.map((pokgeneration)=>{
                    return (
                        <section key={pokgeneration.id} >
                            <h2>{pokgeneration.name}</h2>
                            <img src={pokgeneration.image} alt={pokgeneration.name}/>
                            {/* {<p>Type : {pokgeneration.apiTypes[0].name}</p>} */}
                            <p>Generation : {pokgeneration.apiGeneration}</p>
                        </section>
                    )
                })}
                </div>}
            
        </div>
    );
};

export default PokemonByGeneration;