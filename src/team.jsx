import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11)

    const handleAdd = ()=> {
        const newTeam = team + 1
        setTeam(newTeam);
    }

    const handleRemove = () =>{

        const removePlayer = team - 1
        setTeam(removePlayer);
    }
    

    const teamStyle = {
        border: '4px solid yellow',
        margin: '15px',
        borderRadius: '15px'
    }

    return(
        <div style={teamStyle}>
            <h3>Player: {team} </h3>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRemove}>-</button>
        </div>
    )
}