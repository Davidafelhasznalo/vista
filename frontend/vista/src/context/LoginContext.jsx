import { useState, createContext, useContext } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');

    const isLogged = token !== null;

    const login = async (email, password) => {
        try {
            const httpKapcsolat = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });
            if (httpKapcsolat.ok) {
                localStorage.setItem('token', valasz.token);
                localStorage.setItem('user', JSON.stringify(valasz.user));
                localStorage.setItem('isAdmin', valasz.is_admin);

                setToken(valasz.token);
                setUser(valasz.user);
                setIsAdmin(valasz.is_admin);

                console.log("Sikeres bejelentkezés!");
                return { ok: true };
            }
            else {
                return { ok: false, message: valasz.message }; // a message a backendről jön !!! (pl. "Hibás email vagy jelszó)"
            }
        } catch (error) {
            return { ok: false, message: 'Nem sikerült kapcsolódni a szerverhez.' };
        }
    };

    const logout = async () => {
        try {
            const httpKapcsolat = await fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (httpKapcsolat.ok) {
                console.log("Sikeres kijelentkezés!");
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('isAdmin');

            setToken(null);
            setUser(null);
            setIsAdmin(false);
        }
    }


    return (
        <AuthContext.Provider value={{ isLogged, isAdmin, user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
