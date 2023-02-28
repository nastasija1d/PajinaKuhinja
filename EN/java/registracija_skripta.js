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
            alert("Bad name entry!");
            return;
        }
        if (!/^[A-Z][a-z]{2,}$/.test(prezime)) {
            alert("Bad surname entry!");
            return;
        }
        if (!/^.+@[a-z]+\.[a-z]{2,3}$/.test(email)) {
            alert("Bad email entry!");
            return;
        }
        for (let i = 0; i < nalozi.length; i++) {
            if (email == nalozi[i].email) {
                alert("Account with this email already exists in database!");
                return; 
            }
        }
        if (!/^\w{8,}$/.test(pass) || !/\d/.test(pass) || !/[A-Z]/.test(pass) || !/[a-z]/.test(pass)) {
            alert("Bad password entry!");
            return;       
        }
        if (pass != cpass) {
            alert("Password and its confirmation does not match");
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