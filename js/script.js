function updateCounter() {
    var textarea = document.getElementById('myTextarea');
    var charCount = document.getElementById('charCount');
    var remainingChars = 1000 - textarea.value.length;
    charCount.innerText = 'Caracteres restantes: ' + remainingChars;
}

function updateCountertwo() {
    var textarea = document.getElementById('myTextareatwo');
    var charCount = document.getElementById('charCounttwo');
    var remainingChars = 1000 - textarea.value.length;
    charCount.innerText = 'Caracteres restantes: ' + remainingChars;
}

function updateCounterthree() {
    var textarea = document.getElementById('myTextareathree');
    var charCount = document.getElementById('charCountthree');
    var remainingChars = 1000 - textarea.value.length;
    charCount.innerText = 'Caracteres restantes: ' + remainingChars;
}