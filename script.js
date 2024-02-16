function kjopBillett() { //funksjon for å kjøpe billetene
    //henter id for alle inputboksene, div, feilmeldinger/paragraf,
    let antall = document.getElementById("antall");
    let fornavn = document.getElementById("fornavn");
    let enavn = document.getElementById("enavn");
    let tlfnr = document.getElementById("tlfnr");
    let epost = document.getElementById("epost");
    let skrivUt = document.getElementById("filmValg");
    let film = document.getElementById("film");

    let meldinger = [
        document.getElementById("p1"),
        document.getElementById("p2"),
        document.getElementById("p3"),
        document.getElementById("p4"),
        document.getElementById("p5")
    ];
    //setter inputs i liste for bruk av løkker
    let inputs = [antall, fornavn, enavn, tlfnr, epost];

    for (let i = 0; i < inputs.length; i++) {
        let brukerInput = inputs[i].value.trim(); //fjerner mellomrom for å senere bruk
        let melding = meldinger[i];

        if (brukerInput === "") { //sjekker om den er tom
            melding.innerHTML = "Må skrive inn noe i " + inputs[i].name;
        }
        else {
            melding.innerHTML = ""; //fjerner gamle meldinger
        }
        if (i===0){ //for antall, hvis ikke et tall vil den sende feilmelding
            if(isNaN(brukerInput)){
                melding.innerHTML = "Må skrive et tall i " + inputs[i].name;
            }
        }
        if(i===1 || i===2){ //for fornavn og etternavn, sjekker om det bare er bokstaver
            if (!/^[a-zA-Z-' ]+$/.test(brukerInput)){ //https://www.w3schools.com/js/js_regexp.asp
                melding.innerHTML = "Kan ikke skrive et tall i " + inputs[i].name;
            }
        }
        if (i===3) { //tlfnr, hvis ikke 8 tall vil den sende feilmelding
            if (isNaN(brukerInput) || brukerInput.length !== 8) {
                melding.innerHTML = "Må skrive 8 tall i " + inputs[i].name;
            }
        }
        if(i===4){ // epost, tegn+@+tegn+.+2bokstaver
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(brukerInput)){ //https://www.w3schools.com/js/js_regexp.asp
                melding.innerHTML = "Må ha en gyldig "+ inputs[i].name;
            }
        }
    }
    let sum="";
    for (let i=0;i<meldinger.length;i++){
        sum+=meldinger[i].innerHTML;
    }
    if (sum===""){
        skrivUt.innerHTML+= "Film: "+film.value+" Antall: "+antall.value+
            " Fornavn: "+fornavn.value+" Etternavn: "+enavn.value+" Telefonnummer: "
            +tlfnr.value+" Epost: "+epost.value+"\n";
    }
}
function slettBillett(){
    let skrivUt = document.getElementById("filmValg");
    skrivUt.innerHTML="";
}