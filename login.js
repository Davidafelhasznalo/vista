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
            alert("Sikeres bejelentkezés!");
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
        console.log(httpKapcsolat);
        if (httpKapcsolat.ok) {
            alert("Sikeres kijelenkezés!");
        }
    } 
    catch (error) {
        console.log(error);
    } 
    finally {
        localStorage.removeItem('token');
    }
}

// loginAsync();
logoutAsync();
