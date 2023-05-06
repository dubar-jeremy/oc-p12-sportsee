import PropTypes from 'prop-types';
import { createContext } from "react";


interface UserContextInterface {
    userId: string;
    development?: boolean;
}

interface UserProviderInterface {
    userId: string;
    development?: boolean;
    children: React.ReactNode;
}


export const UserContext = createContext<UserContextInterface>({ 
    userId: "",
    development: import.meta.env.VITE_NODE_ENV === "development" ? true : false
});

export const UserProvider = ({ userId, development, children }: UserProviderInterface) => {
    
    return (
        <UserContext.Provider value={{ userId, development }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    userId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}