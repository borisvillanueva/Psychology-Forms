function myFunction() {
    let answer = document.querySelector('input[name="selection1"]:checked').value;
    console.log(answer);
    let txt = answer;
    // let i;

    // for (i = 0; i < selection1.length; i++) {
    //     if (selection1[i].checked) {
    //         txt = txt + selection[i].value + " ";
    //     }
    // }
    document.getElementById("resultados").value = "Tu respuesta es: " + txt;
}
