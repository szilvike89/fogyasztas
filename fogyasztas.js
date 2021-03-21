let km

do
{
    km = prompt("Hány kilométert mentél?")
}while ((km <= 1000) && (km != NaN));

let tankolas

do{
    tankolas = prompt("Hány litert tankoltál?")
}while (tankolas > 1 || tankolas < 50);

let autok = {
    evjarat: 2020,
    automarka: "JEEP WRANGLER",
    fogyaszt: function(){
        console.log(this.evjarat, " evjaratu ", this.automarka, " fogyasztasa: " + (tankolas / km) + "liter/km")
    }
}


