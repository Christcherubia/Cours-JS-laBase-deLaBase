// alert("Salut bandes de Développeur JS en Herbe !");

/* Commenter
plusieurs
lignes */

// ***** Les variables *****
// Kamel Case
let maSuperVariable = "Hello";

// var = vieux JS
var unTexte = "voici un texte";

// const = constante
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenu";

// Concaténation avec guillements altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c'était le contenu`;

// ** Types de données **
let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true];

// Objet : accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

// ** Les opérateurs **
let arbre = "opérateurs";

// Addition
// console.log(4 + 5);
// Soustraction
// console.log(4 - 5);

// Division
// console.log(4 / 5); 

// Multiplication
// console.log(4 * 5);

// puissance
// console.log(4 ** 5);

// ** Opérateurs d'affectations **
let total = 0; // = "Est 0"

// total = total + 1; // total = "Est" total + 1
// total++; 
// console.log(total); // Si je déplace le console log il génère le résultat du dessus

total += 5; 
total *= 2;
total -= 4;
// console.log(total);


// ** Structures de controle **
let x = 2;
let y = 2;

// if (x > y) {
//   alert("YES x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand !");
// } else {
//   alert("ILS SONT EGAUX");
// }

// On teste si la variable est "true"
if (x) {
  // console.log("x existe !");
}

// === teste l'égalité en type et valeur
if (x === y) {
  // console.log("ils sont égaux");
} else {
  // console.log("pas égaux !");
}

let a = 2;
let b = "2";
// == teste l'égalité de valeur sans prendre en compte le type
if (a == b) {
  // console.log("ils sont égaux");
} else {
  // console.log("pas égaux !");
}

// || ou
// && et

// Soit l'un soit l'autre
if (x < y || x > 1) {
  // console.log("UI");
}

// && il faut que toutes les conditions soit réunies
if (x < y && x > 1) {
  // console.log("OUI");
}

// ** Les fonctions **

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
  const texte = document.getElementById('target'); // coder cette constante/variable...
  texte.textContent = "J'écris quelque chose."; // à la fin du cours.
  // console.log("Je fais un truc");
}
faireQuelqueChose();
// Il faut impérativement appeler la fonction pour qu'elle se joue
// appel de la fonction : faireQuelqueChose();

// fonction flêchée
const addition = (a, b) => {
  // console.log(a + b);
};

addition(4, 3);
addition(432, 578481);
// console.log();

// ** La portée des variables **

function add2() {
  let num = 4;
  // console.log(num + 2);
}
add2()


