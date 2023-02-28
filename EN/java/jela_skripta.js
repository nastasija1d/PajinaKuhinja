$(document).ready(function() {
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
    
    let jela = JSON.parse(localStorage.getItem("recepti"));
    postaviJela();


    $(".dodaj_kom").click(function() {
        if (localStorage.getItem("loggedIn") == null) {
            window.location.href = "login.html";
            return;
        }
        let jelo = $(this).attr("id");
        let komentar_tekst = $("#kom_" + jelo).val();
        if (/$^/.test(komentar_tekst)) {
            alert("Blank comment");
            return;
        }
        komentari.push({
            user: localStorage.getItem("loggedIn"),
            userMail: localStorage.getItem("email"),
            text: komentar_tekst,
            dish: jelo
        });
        localStorage.setItem("komentari", JSON.stringify(komentari));
        location.reload();
    });


    $(".dodaj_grade").click(function() {
        if (localStorage.getItem("loggedIn") == null) {
            window.location.href = "login.html";
            return;
        }

        let id_jela = $(this).attr("id");
        id_jela = parseInt(id_jela.split("_")[1]);
        let obj;
        for (let i = 0; i < jela.length; i++) {
            if (jela[i].id == id_jela) {
                obj = jela[i];
                for (let j = 0; j < ocene.length; j++) {
                    if (ocene[j].userMail == localStorage.getItem("email") && ocene[j].dish == jela[i].id) {
                        alert("You've already graded this recipe!");
                        return;
                    }
                }
                break;
            }
        }
        let num_graded = parseInt(obj.num_graded);
        let sum_graded = parseInt(obj.sum_graded);
        if (num_graded != 1) num_graded++;
        sum_graded += parseInt($("#grade_" + id_jela).val());
        obj.num_graded = num_graded + "";
        obj.sum_graded = sum_graded + "";
        localStorage.setItem("recepti",JSON.stringify(jela));

        ocene.push({
            user: localStorage.getItem("loggedIn"),
            userMail: localStorage.getItem("email"),
            grade: $("#grade_" + id_jela).val(),
            dish: id_jela
        });
        localStorage.setItem("ocene", JSON.stringify(ocene));
        location.reload();

    });


    $("#sortiraj").click(function() {
        let val = $('input[name="sort"]:checked').val();
        let opadajuce = $('#opadajuce').is(":checked");
        if (opadajuce) {
            if (val == 1) {
                jela.sort(maksimum_ocena);
            } else {
                jela.sort(maksimum_tezina);
            }
        } else {
            if (val == 1) {
                jela.sort(minimum_ocena);
            } else {
                jela.sort(minimum_tezina);
            }
        }
        $('div.dish').remove(); 
        postaviJela();
    });

    $("#pretrazi").click(function () {
        let krit = $("#polje_pretrage").val();
        let arr = $('div.dish');
        for (let i = 0; i < arr.length; i++) {
            $(arr[i]).show();
        }
        krit = krit.toLowerCase();
        if (krit != "") {
            for (let i = 0; i < arr.length; i++) {
                let obj = $(arr[i]).find(".card").find(".card-body").find("h4");
                let ime = $(obj).text();
                ime = ime.toLowerCase();
                if (!(ime.includes(krit))) {
                    $(arr[i]).hide();
                }
            }
        }
    });

    function maksimum_ocena(a, b) {
        return -(parseInt(a.sum_graded) * 1.0 / parseInt(a.num_graded) - parseInt(b.sum_graded) * 1.0 / parseInt(b.num_graded));
    }

    function maksimum_tezina(a, b) {
        return -(a.diff - b.diff);
    }

    function minimum_ocena(a, b) {
        return (parseInt(a.sum_graded) * 1.0 / parseInt(a.num_graded) - parseInt(b.sum_graded) * 1.0 / parseInt(b.num_graded));
    }

    function minimum_tezina(a, b) {
        return a.diff - b.diff;
    }

    function postaviJela() {
        for (let i = 0; i < jela.length; i++) {
            if (jela[i].type == type) {
                let red = $("<div class='row dish' style='justify-content: space-around;'></div>");
                let jelo = $('<div class="card" style="width:70%"></div>');
                let src;
                if (jela[i].img_src == "x")
                    src = "../../slike/food_icon.png";
                else
                    src = jela[i].img_src
                $(jelo).append('<img class="card-imgtop" src="'+ src + '" >');
                let telo = $('<div class="card-body"></div>');
                $(telo).append('<h4 class="cardtitle jelo_' + jela[i].id + '">'+ jela[i].name + '</h4>');
                $(telo).append('<p class="cardtext jelo_' + jela[i].id + '">'+ jela[i].text + '</p>');
                $(telo).append('<p class="cardtext"> Duration: '+ jela[i].duration + 'min</p>');
                let tezina;
                switch (jela[i].diff) {
                    case '1': tezina = "Easy"; break;
                    case '2': tezina = "Medium"; break;
                    case '3': tezina = "Hard"; break;
                }
                $(telo).append('<p class="cardtext"> Difficulty: '+ tezina + '</p>');
                $(telo).append('<p class="cardtext"> Added by: '+ jela[i].addedBy + '</p>');
                $(telo).append("<br><h5>Comments:</h5>");
                let table = $("<table></table>");
                for (let j = 0; j < komentari.length; j++) {
                    if (komentari[j].dish == jela[i].id) {
                        let tr = $("<tr></tr>");
                        $(tr).append("<th>"+ komentari[j].user +": &nbsp</th>");
                        $(tr).append("<td>"+ komentari[j].text +"</td>");
                        $(table).append(tr);
                    }
                }
                $(telo).append(table);
                $(telo).append('<div><br>Add new comment<br><textarea cols="40" rows="3" id="kom_' + jela[i].id + '"></textarea><br><button class="btn-success dodaj_kom" id="' + jela[i].id + '">Add</button></div>');
                $(telo).append('<div><br>Grade: '+ (parseInt(jela[i].sum_graded) * 1.0 / parseInt(jela[i].num_graded)).toFixed(2) +'</div>');
                $(telo).append('<div>Add grade: <input type="range" min="1" max="10" id="grade_' + jela[i].id + '"> <button class="btn-success dodaj_grade" id="g_' + jela[i].id  + '">Add</button></div>');
                let download = $("<br><button class='btn-success'>Download PDF</button>");
                $(download).click(function() {
                    let doc = new jsPDF();
                    let elements = $(".jelo_" + jela[i].id);
                    doc.fromHTML($(elements[0]).get(0), 20, 20, {'width':150});
                    doc.fromHTML($(elements[1]).get(0), 20, 40, {'width':150});
                    doc.save('download.pdf');
                });
                $(telo).append(download);
                $(jelo).append(telo);
                $(red).append(jelo);
                $("#jela").append(red);
            }
        }
    }

});