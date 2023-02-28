$(document).ready(function() {
    let active = $("#jezik").find(".active")[0];
    let jezik = $(active).find("a")[0].innerHTML;
    if (localStorage.getItem("recepti") == null) {
        recepti = [
            {
                id: 1,
                name: "Zacinjena salata od krastavaca",
                diff: "1",
                duration: "3",
                num_graded: "2",
                sum_graded: "13",
                text: "Krastavac i crni luk iseci na sitne kocke. Dodati sir promesati. Zatim dodati mirodjiju, ulje, so i biber. Sve dobro izmesati i staviti u frizider da se ohladi. Prijatno!",
                type: "1",
                addedBy: "Pavle Radivojevic",
                addedByMail: "radivojevic.pavle000@gmail.com",
                img_src: "../../slike/Predjelo1.jpg"            
            },
            {
                id: 2,
                name: "Pasta sa feta sirom i ceri paradajzom",
                diff: "1",
                duration: "3",
                num_graded: "5",
                sum_graded: "36",
                text: "Ubacite paradajz i fetu (ja sam koristila domaci sir) u podmazanu posudu, dodati zacine. Rernu zagrejati na 200 stepeni i peci nekih dvadesetak minuta. Obariti testeninu po upustvu na kesi. Pomesati sve zajedno. Sacekajte da se malo ohladi i potom servirajte.",
                type: "1",
                addedBy: "Pavle Radivojevic",
                addedByMail: "radivojevic.pavle000@gmail.com",
                img_src: "../../slike/Predjelo2.jpg"                      
            },
            {
                id: 3,
                name: "Przenice",
                diff: "2",
                duration: "10",
                num_graded: "4",
                sum_graded: "40",
                text: "Hleb izrezati na kriske. U posudu pomesati jaja, brasno, jogurt, so i persun. Kriske utopiti u smesu i przite u tiganju s obe strane da porumene.",
                type: "1",
                addedBy: "Pavle Radivojevic",
                addedByMail: "radivojevic.pavle000@gmail.com",
                img_src: "../../slike/Predjelo3.jpg"                      
            },
            {
                id: 4,
                name: "Garniamo piletina",
                diff: "3",
                duration: "60",
                num_graded: "3",
                sum_graded: "28",
                text: "Prvo na puteru proprzite pileci karabatak sa svih strana. Nalijte vodom 2 prsta preko piletine. Od momenta kada provri pustite da krcka 10 minuta. Dodajte isecenu na kolutove sargarepu i grasak. Dodajte soli i kuvajte 20 minuta na tihoj vatri. Od mlevene paprike i brasna napravite klasicnu zaprsku, dodajte harista pastu, biber, beli luk, kari i ulje susama. Sve sjedinite i dodajte sargarepu, grasak i piletinu. Dobro izmesajte pa uz mesanje kuvajte na tihoj vatri 5 minuta. Servirajte uz posut susam i kasiku pavlake.",
                type: "2",
                addedBy: "Pavle Radivojevic",
                addedByMail: "radivojevic.pavle000@gmail.com",
                img_src: "../../slike/gjelo1.jpg"                      
            },
            {
                id: 5,
                name: "Musaka",
                diff: "3",
                duration: "47",
                num_graded: "7",
                sum_graded: "42",
                text: "Priprema nadeva: Ukoliko sami meljemo meso, isprati ga u hladnoj vodi i posusiti papirnim ubrusom. Odstraniti svaku masnocu i zilice, pa ga iseci na komadice i samleti u coperu ili pomocu masine za mlevenje mesa. U tiganju na tihoj vatri zagrejati ulje, pa dodati sitno iseckanu glavicu crnog luka. Prziti desetak minuta uz mesanje, sve dok luk ne omeksa. Dodati mleveno meso i koncentrovan paradajz iz tube. Posoliti, pobiberiti i dodati mlevenu papriku. Dinstati mleveno meso na tihoj vatri, uz mesanje, dok sva tecnost ne bude ukuvala. Proveriti da li je nadev dovoljno zacinjen. Poklopiti i ostaviti po strani do upotrebe. Nadev mozemo pripremiti dan ranije i cuvati u frizideru.",
                type: "2",
                addedBy: "Pavle Radivojevic",
                addedByMail: "radivojevic.pavle000@gmail.com",
                img_src: "../../slike/gjelo2.jpg"                      
            },
            {
                id: 6,
                name: "Zapecene cufte sa mladim krompiricima",
                diff: "2",
                duration: "28",
                num_graded: "8",
                sum_graded: "53",
                text: "Prvo stavite krompirice da se malo prokuvaju dok spremate cufte. Sjedinite meso, prezle i jaja i dodate seckani ili rendani luk kako vise volite. Ostavite 10ak minuta u frizider da odstoji. Meso formirate u loptice priblizo iste i slazete u vatrostalnu ciniju ili dublji pleh. Krompir procedite i rasporedite izmedju cuftica.Prelite neutralnom pavlakom i odozgo narendajte kackavalj.",
                type: "2",
                addedBy: "Pavle Radivojevic",
                addedByMail: "radivojevic.pavle000@gmail.com",
                img_src: "../../slike/gjelo3.jpg"                      
            },
            {
                id: 7,
                name: "Tortice",
                diff: "1",
                duration: "15",
                num_graded: "2",
                sum_graded: "14",
                text: "Izmutiti belanca u cvrstu penu. Onda postepeno dodavati secer. Mutiti desetak minuta i onda pred kraj dodati pola kasicice limunovog soka i jednu kasiku gustina. U tepsiju (ja sam koristila onu veliku od sporeta i taman mi je sve stalo), staviti papir za pecenje. Izmucena belanca staviti u poslasticarsku kesu i zvezdastim nastavkom preko papira istiskivati krugove.",
                type: "3",
                addedBy: "Nastasija Avramovic",
                addedByMail: "nastasija1d@gmail.com",
                img_src: "../../slike/dezert1.jpg"                      
            },
            {
                id: 8,
                name: "Torta sa jagodama",
                diff: "3",
                duration: "50",
                num_graded: "6",
                sum_graded: "55",
                text: "U 100 ml mleka razmutiti prasak za puding, a ostatak mleka sa secerom staviti da se kuva.Kad mleko provri ukuvati puding.Ostaviti da se ohladi. Jagode oprati pa iseckati na manje komade ili na listice.Jedno pakovanje keksa (150 g), na kratko umakati u mlako mleko i poredjati na tacnu. Rasporediti prvu polovinu fila, pa preko fila poredjati isecene jagode.Ponoviti postupak sa drugim pakovanjem keksa, dugi deo fila staviti na keks, pa opet jagode i na kraju celu torticu premazati slagom i ukrasiti.",
                type: "3",
                addedBy: "Nastasija Avramovic",
                addedByMail: "nastasija1d@gmail.com",
                img_src: "../../slike/dezert2.jpg"                      
            },
            {
                id: 9,
                name: "Torta sa pomorandzom",
                diff: "3",
                duration: "50",
                num_graded: "8",
                sum_graded: "55",
                text: "Kora: Obruc kalupa vel. 24cm, obloziti providnom folijom i staviti ga na tacnu za kolace. Unutrasnjost tacne premazati uljem. U vanglicu staviti mleveni keks (ja sam koristila mleveni Oreo keks), dodati maslac i slatku pavlaku i rukom sjediniti sastojke. Smesu za koru prebaciti na tacnu (unutar obruca od kalupa koji je postavljen) i rukom formirati koru. Na kraju, da bi vam kora bila glatka najbolji nacin je da na ruku stavite kesu od zamrzivaca i sve lepo pritisnete i utapkate. Formiranu koru staviti u frizider dok se spremi fil.",
                type: "3",
                addedBy: "Nastasija Avramovic",
                addedByMail: "nastasija1d@gmail.com",
                img_src: "../../slike/dezert3.jpg"                      
            },
            {
                id: 10,
                name: "Keks sa nutelom",
                diff: "1",
                duration: "25",
                num_graded: "6",
                sum_graded: "45",
                text: "U vanglicu razbiti jaje, dodati nutellu i mikserom umutiti. Ubaciti brasno i dobro sjediniti mikserom (ako treba posluzite se na kraju i patulom ili kasikom). Testo prebaciti na providnu foliju i oblikovati duzi valjak koji ce se kasnije iseci na 20 jednakih delova. Testo uviti u foliju i ostaviti u frizider 20 minuta.",
                type: "4",
                addedBy: "Nastasija Avramovic",
                addedByMail: "nastasija1d@gmail.com",
                img_src: "../../slike/uzina1.jpg"                      
            },
            {
                id: 11,
                name: "Belgijski vafl",
                diff: "3",
                duration: "35",
                num_graded: "13",
                sum_graded: "96",
                text: "Kvasac stavite u 200ml mleka sa jednom kasikom secera. Dobro razmutite kvasac i ostavite samo 5 minuta. Mleko treba da bude toplo. Pomesati zumanca, otopljeni puter, mleko sa kvascem, preostali secer, koricu limuna vanilu i preostalo mleko. Sve promesajte i dobro sjedinite. Postepeno dodajte brasno. Na kraju lagano umesajte sneg od belanaca. Morate pazljivo spatulom da mesate da belanaca ne padnu. Masa je dosta retka da znate. Meni je bilo malo neobicno. Peku se oko 3 minuta. Od ove kolicine ispadnu oko 40 vafla. Sos od jagoda se sprema tako sto se jagode ociste i iseckaju pa se doda kristal secer. Moze i smedji. Stavite na ringlu pa kuvajte na srednjoj vatri 20 minuta. Dodajte liker od cokolade pa na najtisoj vatri uz mesanje kuvajte ravno 3 minuta. Ako necete sa alkoholom mozete da napravite sos ili dzem od jagoda sa belgijskom cokoladom. Kako volite.",
                type: "4",
                addedBy: "Nastasija Avramovic",
                addedByMail: "nastasija1d@gmail.com",
                img_src: "../../slike/uzina2.jpg"                      
            },
            {
                id: 12,
                name: "Krempita",
                diff: "1",
                duration: "18",
                num_graded: "4",
                sum_graded: "27",
                text: "Umutite jaja sa secerom, dodajte mlaku vodu, a zatim ulje. Na kraju dodajte brasno i prasak za pecivo. Sve lagano izmesajte, izlijte u najveci pleh od sporeta, prekriven pek papirom i pecite koru u rerni zagrejanoj na 180-200 stepeni 15-20 minuta. Ohladite je i presecite uzduzno na pola. Za krem odvojite belanca od zumanaca, pa zumanca lagano umutite, dodajte puding, gustin i brasno i oko 2 dl mleka. Sve dobro sjedinite. Ostatak mleka stavite da provri zajedno sa 12 kasika secera i vanilom. Kada provri dodajte mesavinu pudinga pa kuvajte dok se krem ne zgusne. Sklonite sa vatre. Posebno umutite belanca sa 3 kasike secera, pa kasiku po kasiku dodajte u krem. Lagano mutite mikserom (najmanjom brzinom) ili spatulom. Na jednu koru stavite krem, pa preko njega stavite drugu koru. Odozgo pospite prah secer. Krempitu dobro ohladite u frizideru, pa je posluzite.",
                type: "4",
                addedBy: "Nastasija Avramovic",
                addedByMail: "nastasija1d@gmail.com",
                img_src: "../../slike/uzina3.jpg"                      
            },
        ];
        localStorage.setItem("recepti", JSON.stringify(recepti));
    }
    else
        recepti = JSON.parse(localStorage.getItem("recepti"));
    recepti.sort(maksimum_ocena);
    for (let i = 0; i < 3; i++) {
        let recept = $("<tr></tr>");
        $(recept).append("<td>"+ recepti[i].name + "</td>");
        $(recept).append("<td>"+ ispisKategorije(parseInt(recepti[i].type)) + "</td>");
        $(recept).append("<td>"+ recepti[i].duration + "</td>");
        $(recept).append("<td>"+ ispisTezine(parseInt(recepti[i].diff)) + "</td>");
        $(recept).append("<td>"+ (parseInt(recepti[i].sum_graded) * 1.0 / parseInt(recepti[i].num_graded)).toFixed(2) + "</td>");
        $("#tabela").append(recept);   
    }
    function maksimum_ocena(a, b) {
        return -(parseInt(a.sum_graded) * 1.0 / parseInt(a.num_graded) - parseInt(b.sum_graded) * 1.0 / parseInt(b.num_graded));
    }
    function ispisKategorije(a) {
        if (jezik == "SR") {
            switch (a) {
                case 1: return "Predjelo";
                case 2: return "Glavno jelo";
                case 3: return "Dezert";
                case 4: return "Uzina";
            }
        } else {
            switch (a) {
                case 1: return "Appetizer";
                case 2: return "Main course";
                case 3: return "Dessert";
                case 4: return "Snack";
            }
        }
    }
    function ispisTezine(a) {
        if (jezik == "SR") {
            switch (a) {
                case 1: return "Lako";
                case 2: return "Srednje";
                case 3: return "Tesko";
            }
        } else {
            switch (a) {
                case 1: return "Easy";
                case 2: return "Medium";
                case 3: return "Hard";
            }
        }        
    }
})