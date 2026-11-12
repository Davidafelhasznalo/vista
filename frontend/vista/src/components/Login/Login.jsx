import { useRef } from "react"
import { useAuth } from "../../context/LoginContext.jsx"
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const username = useRef()
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.current.value !== "") {
            login()
            navigate('/form')
        }
        else {
            alert('Hibás felhasználónév')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Felhasználónév"
                    ref={username}
                />
                <input
                    type="password"
                    placeholder="Jelszó"
                />
                <button type="submit">Belépés</button>
            </form>
        </div>
    )
}

export default Login