const GetUsers = async () => {
    try {
        const httpKapcsolat = await fetch('http://localhost:8000/api/users');
        if (httpKapcsolat.ok) {
            const dolgozok = await httpKapcsolat.json();
            return dolgozok;
        }
        else {
            console.log("Sikertelen lekérdezés");
        }
    } 
    catch (error) {
        console.log(error);
    }
}

export default GetUsers;
