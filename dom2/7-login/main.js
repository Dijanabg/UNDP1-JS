function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
        if ((username == "") && (password == "")) {
            alert("Polja moraju biti popunjena");
            return false;
        }
        if (username == "") {
            alert("Korisničko ime mora biti uneto");
            return false;
        }
        if ((username.length <= 3) || (username.length > 20)) {
            alert("Korisničko ime mora sadržati izmedju 3 i 20 karaktera");
            return false;
        }
        
        if (password == "") {
            alert("Lozinka mora biti uneta");
            return false;
        }
        if ((password.length < 6) || (password.length > 20)) {
            alert("Lozinka mora sadržati više od 6 i manje od 20 karaktera");
            return false;
        }}