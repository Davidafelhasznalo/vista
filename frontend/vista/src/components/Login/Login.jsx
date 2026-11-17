import { useRef, useState } from "react";
import { useAuth } from "../../context/LoginContext.jsx";
import { Navigate } from 'react-router-dom';
import classes from './Login.module.css';


const Login = () => {
    const username = useRef();
    const password = useRef();
    const { isLogged, login } = useAuth();
    const [hiba, setHiba] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const sikeres = login(username.current.value, password.current.value);

        if (!sikeres) {
            setHiba('Hibás felhasználónév vagy jelszó');
        }
    }

    if (isLogged) {
        return <Navigate to="/" replace />; // még csak a landingra visz, ÁTIRNI!!!!!!
    }

    return (
         <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
            <div className={`w-100 ${classes.doboz}`}>
                <form onSubmit={handleSubmit} className="bg-body-secondary border rounded-4 p-4">
                    <h2 className="fw-bold text-center mb-4">Üdvözöljük!</h2>

                    {hiba && <div className="alert alert-danger py-2 small">{hiba}</div>}

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label small">Felhasználónév</label>
                        <input id="username" type="text" className="form-control" ref={username} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label small">Jelszó</label>
                        <input id="password" type="password" className="form-control" ref={password} />
                    </div>

                    <button type="submit" className={`btn w-100 rounded-pill ${classes.gomb}`}>
                        Bejelentkezés
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
