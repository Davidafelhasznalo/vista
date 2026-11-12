import { useEffect, useState } from 'react'
import { useAuth } from '../../context/LoginContext'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import holdIkon from './images/moon.png'
import napIkon from './images/sun.png'


const Header = () => {
    const [sotet, setSotet] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', sotet ? 'dark' : 'light')
    }, [sotet])

    const {isLogged, logout} = useAuth()

    return (
        <header className="border-bottom py-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${classes.logo}`}>
                    V
                </div>

                <span className="fw-bold">VISTA</span>

                <div className="d-flex align-items-center gap-2">
                    <button
                        className={`rounded-circle border d-flex align-items-center justify-content-center p-0 ${classes.tema}`}
                        onClick={() => setSotet(!sotet)}
                        aria-label="Téma váltása"
                    >
                        <img src={sotet ? napIkon : holdIkon} alt="" />
                    </button>

                    {!isLogged ? <NavLink to='login'>Bejelentkezés</NavLink> : <a onClick={logout} className={classes.isActive}>Kijelentkezés</a>}
                </div>
            </div>
        </header>
    )
}

export default Header