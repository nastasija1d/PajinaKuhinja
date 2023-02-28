$(document).ready(function() {
    let nalozi;
    if (localStorage.getItem("nalozi") != null) {
        nalozi = JSON.parse(localStorage.getItem("nalozi"));
    }
    else nalozi = [];
    $("#login").click(function () {
        let email = $("#email").val();
        let pass = $("#pass").val();
        for (let i = 0; i < nalozi.length; i++) {
            if (email == nalozi[i].email)
                if (pass == nalozi[i].pass) {
                    let ulogovan = nalozi[i].ime + " " + nalozi[i].prezime;
                    localStorage.setItem("loggedIn", ulogovan);
                    ulogovan = nalozi[i].email;
                    localStorage.setItem("email", ulogovan);
                    window.location.href = "mojNalog.html";
                    return;
                }
                else {
                    alert("Wrong password!");
                    return;                   
                }
        }
        alert("User with this email does not exist in database!");
        return; 
    });
});