import { useEffect, useState } from 'react'
import classes from './Header.module.css'
import holdIkon from '../assets/moon.png'
import napIkon from '../assets/sun.png'

const Header = () => {
    const [sotet, setSotet] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', sotet ? 'dark' : 'light')
    }, [sotet])

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

                    <button className={`btn btn-sm rounded-pill px-3 ${classes.gomb}`}>
                        Bejelentkezés
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header