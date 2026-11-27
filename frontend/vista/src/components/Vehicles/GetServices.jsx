const GetServices = async () => {
    try {
        const httpKapcsolat = await fetch('http://localhost:8000/api/services');
        if (httpKapcsolat.ok) {
            const szervizek = await httpKapcsolat.json();
            return szervizek;
        }
        else {
            console.log("Sikertelen lekérdezés");
        }
    } 
    catch (error) {
        console.log(error);
    }
}

export default GetServices;
