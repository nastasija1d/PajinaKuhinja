$(document).ready(function () {
    $("#name").append(localStorage.getItem("loggedIn"));
    $("#email").append("Email: " + localStorage.getItem("email"));
    let recepti = JSON.parse(localStorage.getItem("recepti"));

    for (let i = 0; i < recepti.length; i++) {
        if (recepti[i].addedByMail == localStorage.getItem("email")) {
            let red = $("<tr></tr>");
            $(red).append("<th>" + recepti[i].name +"</th>");
            $(red).append("<td><div class='btn btn-danger remove-r' id='" + recepti[i].id + "'>Izbrisi</div></td>");
            $("#recepti").append(red);
        }
    }
    let komentari;
    let ocene;

    if (localStorage.getItem("komentari") == null)
        komentari = [];
    else
    komentari = JSON.parse(localStorage.getItem("komentari"));

    if (localStorage.getItem("ocene") == null)
        ocene = [];
    else
        ocene = JSON.parse(localStorage.getItem("ocene"));

    for (let i = 0; i < komentari.length; i++) {
        if (komentari[i].userMail == localStorage.getItem("email")) {
            let red = $("<tr></tr>");
            let text;
            for (let j = 0; j < recepti.length; j++) {
                if (recepti[j].id == komentari[i].dish) {
                    text = recepti[j].name;
                    break;
                }
            }
            $(red).append("<th>" + text +"</th>");
            $(red).append("<td>" + komentari[i].text + "</td>");
            $("#komentari").append(red);
        }
    }

    for (let i = 0; i < ocene.length; i++) {
        if (ocene[i].userMail == localStorage.getItem("email")) {
            let red = $("<tr></tr>");
            let text;
            for (let j = 0; j < recepti.length; j++) {
                if (recepti[j].id == ocene[i].dish) {
                    text = recepti[j].name;
                    break;
                }
            }
            $(red).append("<th>" + text +"</th>");
            $(red).append("<td>" + ocene[i].grade + "</td>");
            $("#ocene").append(red);
        }
    }

    $("#logout").click(function() {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("email");
        window.location.href = "login.html";
    });
    $(".remove-r").click(function() {
        let id = $(this).attr("id");
        for (let i = 0; i < recepti.length; i++) {
            if (id == recepti[i].id) {
                for (let j = 0; j < komentari.length; j++) {
                    if (recepti[i].id == komentari[j].dish) {
                        komentari.splice(j,1);
                        localStorage.setItem("komentari", JSON.stringify(komentari));
                    }
                }
                for (let j = 0; j < ocene.length; j++) {
                    if (recepti[i].id == ocene[j].dish) {
                        ocene.splice(j,1);
                        localStorage.setItem("ocene", JSON.stringify(ocene));
                    }
                }
                recepti.splice(i,1);
                localStorage.setItem("recepti", JSON.stringify(recepti));
                window.location.href = "mojNalog.html";
                return;
            }
        }
    });
});