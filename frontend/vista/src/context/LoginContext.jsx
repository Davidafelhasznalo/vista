import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();


export function AuthProvider({children}) {
    const [isLogged, setIsLogged] = useState(false);

    const login = (username, password) => {
        if (username === 'admin' && password === '123456') {
            setIsLogged(true);
            return true;
        }
        return false;
    };

    const logout = () =>setIsLogged(false);

    return(
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>useContext(AuthContext);
