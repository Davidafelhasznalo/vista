import { useState, useEffect } from "react";
import GetVehicles from "./Getvehicles";
import GetTrips from "./GetTrips";
import GetServices from './GetServices';
import GetUsers from './GetUsers';

const Vehicles = () => {
    const [jarmuvek, setJarmuvek] = useState([]);
    const [fuvarok, setFuvarok] = useState([]);
    const [szervizek, setSzervizek] = useState([]);
    const [dolgozok, setDolgozok] = useState([]);

    const tablazatGomb1 = () => {
        console.log("ASD1");
    }

    const tablazatGomb2 = () => {
        console.log("ASD2");
    }

    const statusz = (jarmu) => {
        const jarmuFuvarjai = fuvarok.filter(fuv => fuv.jarmu_id == jarmu.jarmu_id);
        const jarmuSzervizei = szervizek.filter(szer => szer.jarmu_id == jarmu.jarmu_id);
        let statuszVissza = ["Szabad", "---"];
        let aktDatObj = new Date();
        const aktDatum = new Date(`${aktDatObj.getFullYear()}-${(aktDatObj.getMonth() + 1)}-${aktDatObj.getDate()}`);
        for (let i = 0; i < jarmuSzervizei.length; i++) {
            const kezdDatum = new Date(jarmuSzervizei[i].jav_kezd_datum);
            const befDatum = new Date(jarmuSzervizei[i].jav_bef_datum);
            if (kezdDatum < aktDatum && befDatum > aktDatum) {
                statuszVissza[0] = "Szervízben";
                return statuszVissza;
            }
        }
        for (let i = 0; i < jarmuFuvarjai.length; i++) {
            const indDatum = new Date(jarmuFuvarjai[i].indulas_datum);
            const erkDatum = new Date(jarmuFuvarjai[i].erkezes_datum);
            if (indDatum < aktDatum && erkDatum > aktDatum) {
                statuszVissza[0] = "Használatban";
                const aktHasznalo = dolgozok.find(dolg => dolg.dolgozo_id == jarmuFuvarjai[i].dolgozo_id);
                if (aktHasznalo) {
                    statuszVissza[1] = `${aktHasznalo.vez_nev} ${aktHasznalo.ker_nev}`;
                }
                else {
                    statuszVissza[1] = "Ismeretlen felhasználó!";
                }
                return statuszVissza;
            }
        }
        return statuszVissza;   
    }

    const jarmuvekListazasa = () => {
        return(jarmuvek.map((jarmu) => 
            <tr key={jarmu.jarmu_id} value={jarmu.jarmu_id}>
                <td className="border border-gray-300">{jarmu.rendszama}</td>
                <td className="border border-gray-300">{jarmu.marka} {jarmu.tipus}</td>
                <td className="border border-gray-300">{jarmu.futott_km} km</td>
                <td className="border border-gray-300">{statusz(jarmu)[0]}</td>
                <td className="border border-gray-300">{statusz(jarmu)[1]}</td>
                <td className="border border-gray-300 text-center"><button value={jarmu.jarmu_id} onClick={tablazatGomb1}>Szerkesztés</button></td>
                <td className="border border-gray-300 text-center"><button value={jarmu.jarmu_id} onClick={tablazatGomb2}>Törlés</button></td>
            </tr>));
    }

    const tablazatGeneralo = () => {
        return(
            <table className="table-auto border-separate border border-gray-400 w-3/4 margin mx-auto">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Rendszám</th>
                        <th className="border border-gray-300">Jármű</th>
                        <th className="border border-gray-300">Futott</th>
                        <th className="border border-gray-300">Státusz</th>
                        <th className="border border-gray-300">Használó</th>
                        <th className="border border-gray-300">Művelet_1</th>
                        <th className="border border-gray-300">Művelet_2</th>
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
            const fuvarAdatok = await GetTrips();
            setFuvarok(fuvarAdatok);
            const szervizAdatok = await GetServices();
            setSzervizek(szervizAdatok);
            const dolgozoAdatok = await GetUsers();
            setDolgozok(dolgozoAdatok);
        } 
        betoltes();
    }, []);

    return(
        tablazatGeneralo()
    );
}

export default Vehicles;
