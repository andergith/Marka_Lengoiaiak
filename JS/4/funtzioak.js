function semeKopurua() {
    let zerrenda = document.getElementById('blokea')
    alert('Div nodoaren seme kopurua:' + zerrenda.childNodes.length)
    let katea = ""
    for (let x = 0; x < zerrenda.childNodes.length; x++) {
        if (zerrenda.childNodes[x].nodeType == Node.TEXT_NODE)
            katea = katea + "Testu Mota Nodoa\n"
        if (zerrenda.childNodes[x].nodeType == Node.ELEMENT_NODE)
            katea = katea + "Elementu Mota Nodoa\n"
    }
    alert(katea)
}

function semeElementuKopurua() {
    let zerrenda = document.getElementById('blokea')
    alert('Div-aren elementu motako seme kopurua:' + zerrenda.children.length)
}
