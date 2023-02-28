$(document).ready(function() {
    //let active = $("#jezik").find(".active")[0];
    //let jezik = $(active).find("a")[0].innerHTML;
    $("#action").click(function() {
        let name = $("#name").val();
        let type = $("#type").val();
        let diff = $("#diff").val();
        let duration = $("#duration").val();
        let text = $("#text").val();
        if (!/^[A-Z](\w|\s){2,}$/.test(name)) {
            alert("Los unos imena!");
            return;
        }
        if (!/^\d{1,3}$/.test(duration)) {
            alert("Los unos duzine trajanja!");
            return;
        }
        if (!/^(.|\n){40,}$/.test(text)) {
            alert("Los unos teksta pripreme!");
            return;
        }
        let recepti = JSON.parse(localStorage.getItem("recepti"));
        let recept = {
            id: recepti.length + 1,
            name: name,
            diff: diff,
            duration: duration,
            num_graded: "1",
            sum_graded: "0",
            text: text,
            type: type,
            addedBy: localStorage.getItem("loggedIn"),
            addedByMail: localStorage.getItem("email"),
            img_src: "x"
        }
        recepti.push(recept);
        localStorage.setItem("recepti",JSON.stringify(recepti));
        window.location.href = "mojNalog.html";
    })
});