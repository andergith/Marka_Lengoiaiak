var taula = Array(9).fill(null);
var unekoJokalaria = 'X';

function taulaSortu() {
    var taulaDiv = document.getElementById('taula');
    taulaDiv.innerHTML = '';
    for (var i = 0; i < 9; i++) {
        taulaDiv.innerHTML += "<div class='gelaxka' onclick='mugimenduaEgin(" + i + ")'>" + (taula[i] ? taula[i] : '') + "</div>";
    }
    document.getElementById('mezua').innerText = unekoJokalaria + " jokalariaren txanda da";
}

function mugimenduaEgin(i) {
    if (!taula[i]) {
        taula[i] = unekoJokalaria;
        unekoJokalaria = unekoJokalaria === 'X' ? 'O' : 'X';
        taulaSortu();
    }
}

function taulaBerrezarri() {
    taula = Array(9).fill(null);
    unekoJokalaria = 'X';
    taulaSortu();
}

taulaSortu();