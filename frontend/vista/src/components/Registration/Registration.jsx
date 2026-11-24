import { useState, useRef, useEffect } from "react";
import SendRegistration from "./SendRegistration";
import GetRoles from "./GetRoles";

const Registration = () => {
    const [jogkorId, setJogkorId] = useState(1);
    const [szerepkorok, setSzerepkorok] = useState([]);
    const vez_eng_id_Input = useRef();
    const telszam_Input = useRef();
    const email_Input = useRef();
    const ker_nev_Input = useRef();
    const vez_nev_Input = useRef();

    const regisztracio = () => {
        try {
            const vez_eng_id = vez_eng_id_Input.current.value;
            const telszam = telszam_Input.current.value;
            const email = email_Input.current.value;
            const ker_nev = ker_nev_Input.current.value;
            const vez_nev = vez_nev_Input.current.value;

            if (jogkorId == "" || vez_eng_id == "" || telszam == "" || email == "" || ker_nev == "" || vez_nev == "") {
                alert("Hiányos adaok!");
            }
            else {
                SendRegistration({
                    'jog_id': jogkorId,
                    'vez_eng_id': vez_eng_id,
                    'telszam': telszam,
                    'email': email,
                    'ker_nev': ker_nev,
                    'vez_nev': vez_nev
                });
            }
        } 
        catch (error) {
            console.log("Hiba törént a regisztráció során!")
        }
    }

    const szerepkorokListazasa = (szerepkorok) => {
        return(szerepkorok.map((szerepkor) => <option key={szerepkor.jog_id} value={szerepkor.jog_id}>{szerepkor.jogkor_megnevezes}</option>));
    }

    useEffect(() => {
        const betoltes = async () => {
            const szerepkorok = await GetRoles();
            setSzerepkorok(szerepkorok);
        } 
        betoltes();
    }, []);

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <select onChange={(e) => setJogkorId(e.currentTarget.value)}>
            {szerepkorokListazasa(szerepkorok)}
            </select><br/>
            <input type="text" placeholder="vez_eng_id" ref={vez_eng_id_Input}/><br/>
            <input type="text" placeholder="telszam" ref={telszam_Input}/><br/>
            <input type="text" placeholder="email" ref={email_Input}/><br/>
            <input type="text" placeholder="ker_nev" ref={ker_nev_Input}/><br/>
            <input type="text" placeholder="vez_nev" ref={vez_nev_Input}/><br/>
            
            <button onClick={regisztracio}>Regisztráció</button>
        </form>
    );
}

export default Registration;
