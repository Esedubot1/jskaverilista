let kaverit = [];

function paivitaLista() {
    document.querySelectorAll("li").forEach(e => e.remove());
    for (let nimi of kaverit) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(nimi));
        document.getElementById("lista").appendChild(li);
    }
}

function lisaaKaveri() {
    let kaveri = document.getElementById("teksto").value;
    kaverit.push(kaveri);
    document.getElementById("teksto").value = "";
    paivitaLista();
}

function poistaKaveri() {
    let kaveri = document.getElementById("teksto").value;
    const index = kaverit.indexOf(kaveri);
    if (index > -1) {
    kaverit.splice(index, 1);
    }
    document.getElementById("teksto").value = "";
    paivitaLista();
}

function jarjestaKaverit() {
    kaverit.sort();
    paivitaLista();
}

document.getElementById("lisaaNappi").onclick = lisaaKaveri;
document.getElementById("poistaNappi").onclick = poistaKaveri;
document.getElementById("jarjestaNappi").onclick = jarjestaKaverit;