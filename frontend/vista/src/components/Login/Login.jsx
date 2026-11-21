import { useRef, useState } from "react";
import { useAuth } from "../../context/LoginContext.jsx";
import { Navigate } from 'react-router-dom';

const SzemNyitott = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)

const SzemCsukott = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
)

const Login = () => {
    const username = useRef();
    const password = useRef();
    const { isLogged, login } = useAuth();
    const [hiba, setHiba] = useState('');
    const [mutat, setMutat] = useState(false);

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
         <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5 oldal-belep">
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <form onSubmit={handleSubmit} className="bg-body-secondary border rounded-4 p-4">
                    <h2 className="fw-bold text-center mb-4">Üdvözöljük!</h2>

                    {hiba && <div className="alert alert-danger py-2 small">{hiba}</div>}

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label small">Felhasználónév</label>
                        <input id="username" type="text" className="form-control" ref={username} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label small">Jelszó</label>
                        <div className="input-group">
                        <input
                            id="password"
                            type={mutat ? 'text' : 'password'}
                            className="form-control"
                            ref={password}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary d-flex align-items-center"
                            onClick={() => setMutat(!mutat)}
                            aria-label={mutat ? 'Jelszó elrejtése' : 'Jelszó megjelenítése'}
                        >
                            {mutat ? <SzemNyitott /> : <SzemCsukott />}
                        </button>
                    </div>
                    </div>

                    <button type="submit" className="btn btn-secondary w-100 rounded-pill">
                        Bejelentkezés
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
