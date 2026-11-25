import { useEffect, useState } from 'react'
import { useAuth } from '../../context/LoginContext'
import { NavLink, useLocation } from 'react-router-dom'
import holdIkon from './images/moon.png'
import napIkon from './images/sun.png'

const gomb =
    'cursor-pointer rounded-full border border-akcent bg-akcent px-4 py-1 text-sm text-akcent-szoveg hover:opacity-85'

const Header = () => {
    const [sotet, setSotet] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', sotet ? 'dark' : 'light')
    }, [sotet])

    const { isLogged, logout } = useAuth()

    const { pathname } = useLocation()

    const handleLogout = async () => {
        await logout()
        alert('Sikeres kijelentkezés')
    }

    return (
        <header className="border-b py-4">
            <div className="flex w-full items-center justify-between px-6 lg:px-12">
                <div className="flex size-9 items-center justify-center rounded-full bg-akcent font-bold text-logo-betu">
                    V
                </div>

                <span className="font-bold">VISTA</span>

                <div className="flex items-center gap-2">
                    <button
                        className="flex size-9 cursor-pointer items-center justify-center rounded-full border bg-transparent p-0"
                        onClick={() => setSotet(!sotet)}
                        aria-label="Téma váltása"
                    >
                        <img src={sotet ? napIkon : holdIkon} alt="" className="size-[18px] dark:invert" />
                    </button>

                    {isLogged ? (
                        <button onClick={handleLogout} className={gomb}>
                            Kijelentkezés
                        </button>
                    ) : pathname === '/login' ? (
                        <NavLink to="/" className={gomb}>
                            Vissza
                        </NavLink>
                    ) : (
                        <NavLink to="/login" className={gomb}>
                            Bejelentkezés
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header