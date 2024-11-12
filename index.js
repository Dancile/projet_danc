let monAge = 30
console.log(monAge)
const  nomPrenom ="Dancile"
console.log(nomPrenom)
monAge=43
console.log(monAge)
const entreePremieurSemaine =1000
const entreeDeuxiemeSemaine =2000
const entreeTotal = entreePremieurSemaine+entreeDeuxiemeSemaine
console.log(entreeTotal)
const NoteHabimanaCedrick =14
const NotebayubaheCharite =17
const NoteIrambonaOdilo=20
const NoteTotal= NoteHabimanaCedrick+NotebayubaheCharite+NoteIrambonaOdilo
console.log(NoteTotal)
let mangue =200
mangue+=10
console.log(mangue)
let fruitAvocat=270
  fruitAvocat+=20
  console.log(fruitAvocat) 
  let premierePartie="mon nom"
  let deuxiemePartie=",prenom."
  let punchline=premierePartie+deuxiemePartie
console.log(punchline)
let punchlin="mon,prenom"
punchline+=",date."
const monPersonage = {
  nom : "ininahazwe",
  prenom : "dancile",
age : 23,
nationalite : "Burundaise"


}


console.log(monPersonage)

const  lesAutiersOrdinateur = {
  clavier: "portable",
  souris : "portabl",
  ecran : "ordin",
  imprimenter : "ordina",




}

console.log(lesAutiersOrdinateur)

const ticket = {
  nomFilm : "indundi",
  prix:200,
  numeroSalle:3
}
let nom="Dancil"
let texteAffichage = "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " +ticket.numeroSalle

console.log(texteAffichage)
let nouveauFilm = "Titanic"
const listeFilms= ["danc","nono",nouveauFilm]
listeFilms.push("ajouter un mot")
listeFilms.pop() 
console.log(listeFilms)
let hhhh = "tiktok"
const listhhhh=["bonjour",hhhh]
console .log(listhhhh[0])
let monTapeOK = true
if (monTapeOK) {
  console.log("bravo,vous avez correctez")
} else{
  console.log("echec,n'est pas correcter")
}
let monTapeNon =false
if(monTapeNon) {
  console.log("echec,les reponses sont fausses")
}
else {
  console.log("c'est faux")
}
 let TousEstLa = false
 if(TousEstLa) {
  console.log("vrai,tous vous etez ici")
 }
else{
  console.log("tous ne sont pas ici il ya les abscent")
}

const TousEstL= true
if(TousEstL) {
  console.log("bravoooo")
}
 else{
  console.log("mouvais")
 }
 
let jours = "mardi";
switch (jours) {
  case "lundi":
    console.log("aujourd 'hui c'est lundi.");
    break;
    case "mardi":
      console.log("aujour'hui c'est mardi.");
      break;

      case "mercredi":
        console.log("aujourd'hui c'est mercredi.");
         break;
    }
    const mois = "decembre";
    switch (mois) {
      case "novembre":
        console.log("aujourd'hui c'est novembre.");
        break;
        case "octoble":
          console.log("aujourd'hui c'est octoble.");
          break;
          case "decembre":
            console.log("aujourd'hui c,est decembre.");
            break;
    }
 let age = 25;
 let aUnPermis = true;
 if(age >= 18 && aUnPermis) {
  console.log("vous pouvez permis.");

 }
 else{
  console.log("ne vous pouvez pas permis.");
 }
 let agee = 30;
 let aMajeur = false;
if (agee <= 20 && aMajeur) {
  console.log("vous pouvez aussi majeur.");

}
  else{
    console.log("ne vous pouvez pas majeur.");
  } 
  for (let compteur = 0 ; compteur < 5; compteur++) {
console.log(compteur)
  }
  for (let ordinateur = 0 ; ordinateur <10 ; ordinateur++)
  {
    console.log(ordinateur)
  }
  let compteur = 0;
  while (compteur > 15) {
    console.log("ceci un message repete.");
    compteur++;
  }
  let n = 4;
  while(n == 8) {
    console.log("afficher le nombre");
    n++; }


const listeMots = ["intelligence","artificiel","nationalite"]
let score = 2
for(let i = 0; i < listeMots; i++) {
  let nomUtilisateur = ("Entrez le mot " + listeMots[i])
  if (nomUtilisateur === listeMots[i]) {
    score++
  }
   
}
console.log("votre score est de  " + score + "sur 3")


const listeMenage = ["menage1","menage2","menage3"]
let maison = 15
for(let i = 0; i<listeMenage; i++) {
  let nomUtilisateur = ("Entrez le mot " + listeMenage[i])
  if(nomUtilisateur && listeMenage[i]) {
    maison
  }
}
console.log("votre menage est de " + maison + "menage" )

 const listeFruits =  ["mangue","avocat", "pastec"]
 let fruits = 100
 for(let i = 0; i<listeFruits.length; i++)
 {
  let nomUtilisateur = ("Entrez le nombre " + listeFruits[i])
  if(nomUtilisateur !== listeFruits) {
    fruits++
  }
 }
 console.log("afficher le nombre de fruits " + fruits + "fruits" )
 const sommFrancs = ["centsmille","million","milliard"]
 let somme = 10000000
 for(let i=0; i < sommFrancs.length; i++) {
  let nomUtilisateur = ("Ecrit le somme " + sommFrancs[i])
  if(nomUtilisateur % sommFrancs[i]) {
    somme++
  }
 }
 console.log(" On gagnez  " + somme + " francs")


 
