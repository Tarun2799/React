import { createContext } from "react";

// It's like a central context
const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;