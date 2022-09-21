// function myFunction() {
//     let answer1 = document.querySelector('input[name="selection1"]:checked').value;
//     let txt1 = answer1;

//     let answer2 = document.querySelector('input[name="selection2"]:checked').value;
//     let txt2 = answer2;

//     let answer3 = document.querySelector('input[name="selection3"]:checked').value;
//     let txt3 = answer3;

//     let answer4 = document.querySelector('input[name="selection4"]:checked').value;
//     let txt4 = answer4;

//     let answer5 = document.querySelector('input[name="selection5"]:checked').value;
//     let txt5 = answer5;

//     let answer6 = document.querySelector('input[name="selection6"]:checked').value;
//     let txt6 = answer6;

//     let answer7 = document.querySelector('input[name="selection7"]:checked').value;
//     let txt7 = answer7;

//     let answer8 = document.querySelector('input[name="selection8"]:checked').value;
//     let txt8 = answer8;

//     let answer9 = document.querySelector('input[name="selection9"]:checked').value;
//     let txt9 = answer9;

//     let answer10 = document.querySelector('input[name="selection10"]:checked').value;
//     let txt10 = answer10;

//     let answer11 = document.querySelector('input[name="selection11"]:checked').value;
//     let txt11 = answer11;

//     let answer12 = document.querySelector('input[name="selection12"]:checked').value;
//     let txt12 = answer12;

//     let answer13 = document.querySelector('input[name="selection13"]:checked').value;
//     let txt13 = answer13;

//     let answer14 = document.querySelector('input[name="selection14"]:checked').value;
//     let txt14 = answer14;

//     let answer15 = document.querySelector('input[name="selection15"]:checked').value;
//     let txt15 = answer15;

//     if (txt1 === "hecho") {
//         document.getElementById("resultados").value = "1: ❌ Tu respuesta es incorrecta es Opinion"
//     } else if (txt1 === "opinion") {
//         document.getElementById("resultados").value = "1: ✅ Tu respuesta es correcta es Opinion"
//     } else if (txt2 === "hecho") {
//         document.getElementById("resultados").value = "2: ✅ Tu respuesta es correcta es un Hecho"
//     } else if (txt2 === "opinion") {
//         document.getElementById("resultados").value = "2: ❌ Tu respuesta es incorrecta es un Hecho"
//     } else if (txt3 === "hecho") {
//         document.getElementById("resultados").value = "2: ✅ Tu respuesta es correcta es un Hecho"
//     } else if (txt3 === "opinion") {
//         document.getElementById("resultados").value = "2: ❌ Tu respuesta es incorrecta es un Hecho"
//     }

// }

function displayRadioValue() {
    document.getElementById("resultados").innerHTML = "";
    var ele = document.getElementsByTagName('input');

    for (i = 0; i < ele.length; i++) {

        if (ele[i].type = "radio") {

            if (ele[i].checked) {
                document.getElementById("resultados").innerHTML
                    += ele[i].name + " Value: "
                    + ele[i].value + "\n";


            }


        }
    }
}