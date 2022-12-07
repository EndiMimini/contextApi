import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const inputStyle = {
    padding: "8px 10px",
    fontSize: "15px",
    border: "1px solid silver",
    borderRadius: "5px",
    background: "silver"
}

export default() =>{
    const {name, setName} = useContext(UserContext)

    return(
        <div>
            <label>Name: </label>
            <input value={name} style={inputStyle} onChange={e => setName(e.target.value)}></input>
        </div>
    )
}
