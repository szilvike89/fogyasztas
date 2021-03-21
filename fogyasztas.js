let km
let szam = Number()

do
{
    km = parseInt(prompt("Hány kilométert mentél?"))
}while ((km > 1000) || (km != Number(km)) || (km == ''));

let tankolas

do{
    tankolas = prompt("Hány litert tankoltál?")
}while (tankolas < 1 || tankolas > 50 || tankolas == '');

let autok = {
    evjarat: 2020,
    automarka: "JEEP WRANGLER",
    fogyaszt: function(){
        console.log(this.evjarat, " evjaratu ", this.automarka, " fogyasztasa: " + (tankolas*100 / km)/100 + " liter/km")
    }
}
 autok.fogyaszt()

if (tankolas > 20){
    console.log("Nem sajnálod az üzemanyagot!")
}

if (km > 700){
    console.log("Nem kellene ennyit utaznod!")
}
else{
    console.log("Csak így tovább!")
}

autok.garazs = function(utca){
    console.log(this.automarka + " garazsa " + utca + " utcaban talalhato");
}
autok.garazs("Nyar")