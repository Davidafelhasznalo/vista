const GetRoles = async () => {
    try {
        const httpKapcsolat = await fetch('http://localhost:8000/api/roles');
        if (httpKapcsolat.ok) {
            const szerepkorok = await httpKapcsolat.json();
            return szerepkorok;
        }
        else {
            console.log("Sikertelen lekérdezés");
        }
    } 
    catch (error) {
        console.log(error);
    }
}

export default GetRoles;
