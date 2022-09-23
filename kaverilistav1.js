let kaverit = [];

function lisaaKaveri() {
    let kaveri = document.getElementById("teksto").value;
    kaverit.push(kaveri);
    document.getElementById("teksto").value = "";

    if (kaverit.length == 10) {
        document.getElementById("ohje").remove();
        document.getElementById("teksto").remove();
        document.getElementById("nappi").remove();
        
        for (let nimi of kaverit) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(nimi));
            document.getElementById("lista").appendChild(li);
        }
    }
}

document.getElementById("nappi").onclick = lisaaKaveri;