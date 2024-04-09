import { useEffect, useState } from "react";


const MyPokemonTeams = () => {

    const[myteam, setMyTeam] = useState(null)

    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/random/team")
        .then((pokTeams)=>{
            return pokTeams.json();
        })
        .then((data)=>{
            setMyTeam(data)
        });
    }, []);
    return (
        <div>
            {myteam && <div>
                {myteam.map((pok)=>{
                    return <h2>{pok.name}</h2>
                })}
            </div>}   
        </div>
    );
};

export default MyPokemonTeams;