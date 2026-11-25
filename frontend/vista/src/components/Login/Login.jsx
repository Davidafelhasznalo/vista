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

const beviteli =
    'block w-full rounded-md border bg-bg px-3 py-1.5 text-fg focus:border-akcent focus:outline-none focus:ring-2 focus:ring-akcent/25'

const Login = () => {
    const username = useRef();
    const password = useRef();
    const { isLogged, login } = useAuth();
    const [hiba, setHiba] = useState('');
    const [mutat, setMutat] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHiba(''); // az elozo hiba torlese!!

        const eredmeny = await login(username.current.value, password.current.value);

        if (!eredmeny.ok) {
            setHiba(eredmeny.message);
        }
    }

    if (isLogged) {
        return <Navigate to="/" replace />; // még csak a landingra visz, ÁTIRNI!!!!!!
    }

    return (
         <div className="container mx-auto flex flex-1 animate-oldal-belep items-center justify-center px-3 py-12 motion-reduce:animate-none">
            <div className="w-full max-w-[400px]">
                <form onSubmit={handleSubmit} className="rounded-2xl border bg-surface p-6">
                    <h2 className="mb-6 text-center text-3xl font-bold">Üdvözöljük!</h2>

                    {hiba && (
                        <div className="mb-4 rounded-md border border-red-300 bg-red-100 px-4 py-2 text-sm text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
                            {hiba}
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="username" className="mb-2 block text-sm">Felhasználónév</label>
                        <input id="username" type="email" className={beviteli} ref={username} />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="mb-2 block text-sm">Jelszó</label>
                        <div className="flex">
                            <input
                                id="password"
                                type={mutat ? 'text' : 'password'}
                                className={`${beviteli} min-w-0 flex-1 rounded-r-none`}
                                ref={password}
                            />
                            <button
                                type="button"
                                className="-ml-px flex cursor-pointer items-center rounded-r-md border border-muted px-3 py-1.5 text-muted hover:bg-muted hover:text-surface"
                                onClick={() => setMutat(!mutat)}
                                aria-label={mutat ? 'Jelszó elrejtése' : 'Jelszó megjelenítése'}
                            >
                                {mutat ? <SzemNyitott /> : <SzemCsukott />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer rounded-full bg-akcent px-3 py-1.5 text-akcent-szoveg hover:opacity-85"
                    >
                        Bejelentkezés
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;