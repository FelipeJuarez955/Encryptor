//La letra "e" es convertida para "enter" //La letra "i" es convertida para "imes" //La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober" //La letra "u" es convertida para "ufat"

function hasUpperCaseOrAccent(str) {
    return /[A-ZÁÉÍÓÚÜ]/.test(str) || /[áéíóúü]/.test(str);
}

function hideImgAndParrafo() {
    var img = document.querySelector(".section2 img");
    var parrafo = document.querySelector(".section2 .Parrafo");

    img.style.display = "none";
    parrafo.style.display = "none";
}

function showTextarea2() {
    var textarea2 = document.querySelector("#textarea2");
    textarea2.style.display = "block";
}

function showCopyButton() {
    var copyButton = document.querySelector(".copy");
    copyButton.style.display = "block";
}

function encrypt() {
    hideImgAndParrafo();

    var inputText = document.getElementById("textarea1").value;

    if (hasUpperCaseOrAccent(inputText)) {
        alert("Solo letras minúsculas y sin acentos.");
        return;
    }

    var encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("textarea2").value = encryptedText;

    showTextarea2();
    showCopyButton();
}

function decrypt() {
    var inputText = document.getElementById("textarea1").value.toLowerCase();
    var decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("textarea2").value = decryptedText;
}

function copy() {
    var content = document.querySelector("#textarea2");
    content.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea2").value = "";
    alert("Copied Text and Cleared!");
}
