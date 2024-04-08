import React, { useState } from 'react';

const FeuEauPlante = () => {

    const[arrFeu , setArrFeu] = useState(false)
    const[arrEau, setArrEau] = useState(false)
    const[arrPlante, setArrPlante] = useState(false)

    const urlFeu ="https://pokebuildapi.fr/api/v1/pokemon/type/Feu"
    const ulrEau ="https://pokebuildapi.fr/api/v1/pokemon/type/Eau"
    const urlPlante ="https://pokebuildapi.fr/api/v1/pokemon/type/Plante"

    const callFeu = (url)=>{

        fetch (url)
        .then((types)=>{
            return types.json()
        })
        .then((data)=>{
            if(url === urlFeu ){
                setArrFeu(data)
            }
            if(url === ulrEau){
                setArrEau(data)
            }
            if(url === urlPlante){
                setArrPlante(data)
            }
        })
        
    }


    return (
        <div>
            <section className='feu'><h2>Feu</h2>
            <button onClick={()=>callFeu(urlFeu)}>Feu</button>
                {arrFeu && <div>
                    {arrFeu.map((feu)=>{
                        return (
                            <div>
                                <p>{feu.name}</p>
                                <img src={feu.image} alt={feu.name}/>
                                <ul><h4>Types :</h4>  {feu.apiTypes.map((type)=>{
                            return (
                                <li>{type.name}</li>
                            )
                        })}</ul>
                        <h4>Statistiques :</h4> 
                        <ul>
                            <li>Vie : {feu.stats.HP}</li>
                            <li>Attaque : {feu.stats.attack}</li>
                            <li>Defense : {feu.stats.defense}</li>
                            <li>Attaque Speciale : {feu.stats.special_attack}</li>
                            <li>Defense Speciale : {feu.stats.special_defense}</li>
                            <li>Vitesse  : {feu.stats.speed}</li>
                        </ul>
                        
                        </div>
                        )
                    })}
                    </div>}
     
            </section>
            <section className='eau'><h2>Eau</h2></section>
            <button onClick={()=>callFeu(urlFeu)}>Eau</button>
            {arrEau && <div>
                    {arrEau.map((eau)=>{
                        return (
                            <div>
                                <p>{eau.name}</p>
                                <img src={eau.image} alt={eau.name}/>
                                <ul><h4>Types :</h4>  {eau.apiTypes.map((type)=>{
                            return (
                                <li>{type.name}</li>
                            )                           
                            })}</ul>
                            <h4>Statistiques :</h4> 
                        <ul>
                            <li>Vie : {eau.stats.HP}</li>
                            <li>Attaque : {eau.stats.attack}</li>
                            <li>Defense : {eau.stats.defense}</li>
                            <li>Attaque Speciale : {eau.stats.special_attack}</li>
                            <li>Defense Speciale : {eau.stats.special_defense}</li>
                            <li>Vitesse  : {eau.stats.speed}</li>
                        </ul>
                        

                        </div>
                        )
                    })}
                    
                    </div>}
            
            <section className='plante'><h2>Plante</h2></section>
            <button onClick={()=>callFeu(urlFeu)}>Plante</button>
            {arrPlante && <div>
                    {arrPlante.map((plante)=>{
                        return (
                            <div>
                                <p>{plante.name}</p>
                                <img src={plante.image} alt={plante.name}/>
                                <ul><h4>Types :</h4>  {plante.apiTypes.map((type)=>{
                            return (
                                <li>{type.name}</li>
                            )
                        })}</ul>
                        <h4>Statistiques :</h4> 
                        <ul>
                            <li>Vie : {plante.stats.HP}</li>
                            <li>Attaque : {plante.stats.attack}</li>
                            <li>Defense : {plante.stats.defense}</li>
                            <li>Attaque Speciale : {plante.stats.special_attack}</li>
                            <li>Defense Speciale : {plante.stats.special_defense}</li>
                            <li>Vitesse  : {plante.stats.speed}</li>
                        </ul>
                        </div>
                            
                        )
                    })}
                    </div>}         
        </div>
    );
};

export default FeuEauPlante;