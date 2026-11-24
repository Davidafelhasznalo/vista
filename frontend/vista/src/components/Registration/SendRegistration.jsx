const SendRegistration = async (registrationData) => {
    try {
        const httpKapcsolat = await fetch('http://localhost:8000/api/registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'   
            },
            body: JSON.stringify(registrationData)
        });
        if (httpKapcsolat.ok) {
            const valasz = await httpKapcsolat.json();
            console.log("Sikeres bejelentkezés!");
            console.log(valasz);
        }
        else {
            console.log("Sikertelen bejelentkezés!");
        }
    } 
    catch (error) {
        console.log(error);
    }
}

export default SendRegistration;
