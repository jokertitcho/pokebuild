import { useEffect, useState } from "react";


const Types = () => {
    const[arrTypes, setArrTypes] = useState(false)

    useEffect(()=>{

        fetch ("https://pokebuildapi.fr/api/v1/types")
        .then((types)=>{
           return types.json()
        })
        .then((data)=>{
            setArrTypes(data)
        })
    }, [])
        
    

    return (
        <div>
            
            {arrTypes && <div className="pokemons100">
                {arrTypes.map((type)=>{
                    return(
                        <div>
                            <p>Type : {type.name}</p>
                            <img src={type.image} alt={type.name}/>
                        </div>     
                    )
                })}
                </div>}      
        </div>
    );
};

export default Types;