import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const style = {
    background: "purple",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    padding: "20px",
    marginBottom: "20px"
}


export default() =>{

    const {name} = useContext(UserContext)

    return <div style={style}>Hi {name}</div>
}
