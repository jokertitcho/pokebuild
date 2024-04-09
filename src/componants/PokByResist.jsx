import { useEffect, useState } from "react";

const PokByResist = () => {

    const[poksResist, setPokResist] = useState(false)
    const[typesAll, setTypeAll] = useState(false)


    const findByResist = (event)=>{
        event.preventDefault()
        const type = event.target.type.value
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + type)
        .then((data)=>{return data.json()})
        .then((arr)=>{setPokResist(arr)})

    }
    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/types")
        .then((data)=>{return data.json()})
        .then((arr)=>{setTypeAll(arr)})
    })

    return (
        <div> 
            <form onSubmit={findByResist}>
                <select name="type" id="resistance" >{typesAll &&
                    typesAll.map((opt)=>{
                        return(<option value={opt.name}>{opt.name}</option>)
                         
                    })
                }
                </select>  
            <input type="submit" />          
            </form>
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