import React, {createContext} from "react";

const UserContext = createContext();

const UserProvider = (props) => {
    return <UserContext.Provider value={{}}>
    {props.children}
  </UserContext.Provider>;
}
export {UserProvider};

export default UserContext;