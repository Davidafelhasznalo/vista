import { useState, useEffect } from "react";
import GetVehicles from "./Getvehicles";

const Vehicles = () => {
    const [jarmuvek, setJarmuvek] = useState([]);

    const tablazatGomb = () => {
        console.log("ASD");
    }

    const jarmuvekListazasa = () => {
        return(jarmuvek.map((jarmu) => 
        <tr key={jarmu.jarmu_id} value={jarmu.jarmu_id}>
            <td>{jarmu.rendszama}</td>
            <td>{jarmu.marka}</td>
            <td>{jarmu.tipus}</td>
            <td>{jarmu.futott_km}</td>
            <td><button onClick={tablazatGomb}>Gomb</button></td>
        </tr>));
    }

    const tablazatGeneralo = () => {
        return(
            <table>
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </thead>
                <tbody>
                    {jarmuvekListazasa()}
                </tbody>
            </table>
        );
    }

    useEffect(() => {
        const betoltes = async () => {
            const jarmuAdatok = await GetVehicles();
            setJarmuvek(jarmuAdatok);
        } 
        betoltes();
    }, []);

    return(
        tablazatGeneralo()
    );
}

export default Vehicles;
