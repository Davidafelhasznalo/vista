let token = "";

const loginAsync = async () => {
    try {
        const httpKapcsolat = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'   
            },
            body: JSON.stringify({
                "email": "sutka.barna@gmail.com",
                "password": "January"
            })
        });
        if (httpKapcsolat.ok) {
            const valasz = await httpKapcsolat.json();
            localStorage.setItem('token', valasz.token);
            console.log("Sikeres bejelentkezés!");
        }
    } catch (error) {
        console.log(error);
    }
}

const logoutAsync = async () => {
    try {
        const token = localStorage.getItem('token');
        const httpKapcsolat = await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        if (httpKapcsolat.ok) {
            console.log("Sikeres kijelenkezés!");
        }
    } 
    catch (error) {
        console.log(error);
    } 
    finally {
        localStorage.removeItem('token');
    }
}

const teszt = async () => {
    loginAsync();
    await logoutAsync();
}

teszt();
