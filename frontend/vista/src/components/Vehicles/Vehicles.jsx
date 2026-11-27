import { useState, useEffect } from "react";
import GetVehicles from "./Getvehicles";
import GetTrips from "./GetTrips";
import GetServices from './GetServices';

const Vehicles = () => {
    const [jarmuvek, setJarmuvek] = useState([]);
    const [fuvarok, setFuvarok] = useState([]);
    const [szervizek, setSzervizek] = useState([]);

    const tablazatGomb1 = () => {
        console.log("ASD1");
    }

    const tablazatGomb2 = () => {
        console.log("ASD2");
    }

    const statusz = (jarmu) => {
        const jarmuFuvarjai = fuvarok.filter(fuv => fuv.jarmu_id == jarmu.jarmu_id);
        const jarmuSzervizei = szervizek.filter(szer => szer.jarmu_id == jarmu.jarmu_id);
        let statuszVissza = "Szabad";
        let aktDatObj = new Date();
        const aktDatum = new Date(`${aktDatObj.getFullYear()}-${aktDatObj.getMonth()}-${aktDatObj.getDay()}`);
        for (let i = 0; i < jarmuSzervizei.length; i++) {
            const kezdDatum = new Date(jarmuSzervizei[i].jav_kezd_datum);
            const befDatum = new Date(jarmuSzervizei[i].jav_bef_datum);
            if (kezdDatum < aktDatum && befDatum > aktDatum) {
                statuszVissza = "Szervízben";
                return statuszVissza;
            }
        }
        for (let i = 0; i < jarmuFuvarjai.length; i++) {
            const indDatum = new Date(jarmuFuvarjai[i].indulas_datum);
            const erkDatum = new Date(jarmuFuvarjai[i].erkezes_datum);
            if (indDatum < aktDatum && erkDatum > aktDatum) {
                statuszVissza = "Használatban";
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
                <td className="border border-gray-300">{statusz(jarmu)}</td>
                <td className="border border-gray-300"><button value={jarmu.jarmu_id} onClick={tablazatGomb1}>Szerkesztés</button></td>
                <td className="border border-gray-300"><button value={jarmu.jarmu_id} onClick={tablazatGomb2}>Törlés</button></td>
            </tr>));
    }

    const tablazatGeneralo = () => {
        return(
            <table className="table-auto border-separate border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Rendszám</th>
                        <th className="border border-gray-300">Jármű</th>
                        <th className="border border-gray-300">Futott</th>
                        <th className="border border-gray-300">Státusz</th>
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
        } 
        betoltes();
    }, []);

    return(
        tablazatGeneralo()
    );
}

export default Vehicles;
