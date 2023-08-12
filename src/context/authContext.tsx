import {Dispatch, PropsWithChildren, SetStateAction, createContext, useState} from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<PropsWithChildren<AuthContextProps>>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

export const AuthContextProvider = ({children}: PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>{children}</AuthContext.Provider>;
};
