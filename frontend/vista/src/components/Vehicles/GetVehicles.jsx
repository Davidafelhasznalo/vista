const GetVehicles = async () => {
    try {
        const httpKapcsolat = await fetch('http://localhost:8000/api/vehicles');
        if (httpKapcsolat.ok) {
            const jarmuvek = await httpKapcsolat.json();
            return jarmuvek;
        }
        else {
            console.log("Sikertelen lekérdezés");
        }
    } 
    catch (error) {
        console.log(error);
    }
}

export default GetVehicles;
