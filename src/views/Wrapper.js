import React, {useState} from "react";

import UserContext from "../contexts/UserContext";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default ({children}) => {
    const [name, setName] = useState("Endi Mimini")

    return (
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    )
}