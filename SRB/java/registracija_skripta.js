$(document).ready(function () {
    let nalozi;
    if (localStorage.getItem("nalozi") != null) {
        nalozi = JSON.parse(localStorage.getItem("nalozi"));
    }
    else nalozi = [];
    $("#reg").click(function() {
        let ime = $("#ime").val();
        let prezime = $("#prezime").val();
        let email = $("#email").val();
        let pass = $("#pass").val();
        let cpass = $("#cpass").val();
        if (!/^[A-Z][a-z]{2,}$/.test(ime)) {
            alert("Los unos imena!");
            return;
        }
        if (!/^[A-Z][a-z]{2,}$/.test(prezime)) {
            alert("Los unos prezimena!");
            return;
        }
        if (!/^.+@[a-z]+\.[a-z]{2,3}$/.test(email)) {
            alert("Los unos emaila!");
            return;
        }
        for (let i = 0; i < nalozi.length; i++) {
            if (email == nalozi[i].email) {
                alert("Vec postoji nalog sa ovim emailom!");
                return; 
            }
        }
        if (!/^\w{8,}$/.test(pass) || !/\d/.test(pass) || !/[A-Z]/.test(pass) || !/[a-z]/.test(pass)) {
            alert("Los unos lozinke!");
            return;       
        }
        if (pass != cpass) {
            alert("Lozinka i njena potvrda se ne poklapaju");
            return;    
        }
        nalozi.push({
            ime: ime,
            prezime: prezime,
            pol: $("input[type='radio']:checked").val(),
            email: email,
            pass: pass
        });
        localStorage.setItem("nalozi",JSON.stringify(nalozi));
        window.location.href = "login.html";
    });
});