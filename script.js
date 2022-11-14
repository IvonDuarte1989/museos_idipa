document.addEventListener("DOMContentLoaded", function () {
    var lis = document.getElementsByTagName("li");

    console.log(lis);
    for (var i = 0; i < 3; i++) {
        if (i == 1) {
            lis[i].classList.add("active");
        }
        lis[i].id = i + 1;
        lis[i].addEventListener("click", liClick);
        lis[i].children[0].id = i + 1;
        lis[i].children[0].addEventListener("click", liClick);

        lis[i].children[0].children[0].id = i + 1;
        lis[i].children[0].children[0].addEventListener("click", liClick);

        lis[i].children[0].children[1].id = i + 1;
        lis[i].children[0].children[1].addEventListener("click", liClick);

        lis[i].children[0].children[2].id = i + 1;
        lis[i].children[0].children[2].addEventListener("click", liClick);
        // lis[i].children[0].children[0].children[0].id = i + 1;
        // lis[i].children[0].children[0].children[0].addEventListener("click", liClick);
    }
});

function liClick(event) {
    var museoId = event.target.id;

    var lis = document.getElementsByTagName("li");

    for (var i = 0; i < 9; i++) {
        if(i+1 != museoId) {
            lis[i].classList.remove("active");
        } else {
            lis[i].classList.add("active");
        }
    }

    var coordenadas = "https://www.google.com/maps/embed?";

    switch (parseInt(museoId)) {
        case 1:
            coordenadas += "pb=!1m18!1m12!1m3!1d3284.687482870071!2d-58.39202299999999!3d-34.586773400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbaf2f03d0d9%3A0xd2d2eff0a66548b3!2sJun%C3%ADn%201930%2C%20C1113AAX%20CABA!5e0!3m2!1ses-419!2sar!4v1668276100079!5m2!1ses-419!2sar";
            break;
        case 2:
            coordenadas += "pb=!1m18!1m12!1m3!1d3285.0794777171463!2d-58.40591192444852!3d-34.57685547296394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb564f98749a7%3A0xbaaf207a5121f74e!2sAv.%20Pres.%20Figueroa%20Alcorta%203415%2C%20C1425CLA%20CABA!5e0!3m2!1ses-419!2sar!4v1668278651720!5m2!1ses-419!2sar";
            break;
    }

    var mapa = document.getElementById("googleMap");
    mapa.src = coordenadas;
}