const GetTrips = async () => {
    try {
        const httpKapcsolat = await fetch('http://localhost:8000/api/trips');
        if (httpKapcsolat.ok) {
            const fuvarok = await httpKapcsolat.json();
            return fuvarok;
        }
        else {
            console.log("Sikertelen lekérdezés");
        }
    } 
    catch (error) {
        console.log(error);
    }
}

export default GetTrips;
