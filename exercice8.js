// Déclaration des données brutes
let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

// 1. nom
let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";
const msgNom = `"${nomCorrige}" (corrigé : espaces supprimés)`;

// 2. age
let ageNum = parseInt(age);
const msgAge = (Number.isNaN(ageNum) || ageNum <= 0) 
  ? `${ageNum} (invalide)` 
  : `${ageNum} (valide)`;


let indexArobase = email.indexOf("@");
let indexPoint = email.indexOf(".", indexArobase);
let msgEmail;
if (indexArobase === -1 || indexPoint === -1) {
  msgEmail = `"${email}" (invalide : pas de point après @)`;
} else {
  msgEmail = `"${email}" (valide)`;
}


let scoreNum = parseInt(scoreJeu);
if (Number.isNaN(scoreNum)) scoreNum = 0;
const msgScore = `${scoreNum} (extrait depuis "${scoreJeu}")`;

let estAdminBool = (estAdmin === "true"); 
const msgAdmin = `${estAdminBool} (attention : Boolean("false") = true, conversion manuelle requise)`;


let derniereCoCorrige = derniereConnexion ?? "Jamais connecté";
const msgConnexion = `"${derniereCoCorrige}" (valeur par défaut via ??)`;


let nbConnexionsNum = Number(nombreConnexions);
const msgNbConnexions = nbConnexionsNum === 0 
  ? `"Aucune connexion" (0 après conversion)` 
  : `${nbConnexionsNum}`;


console.log(`${"nom".padEnd(17, " ")}: ${msgNom}`);
console.log(`${"age".padEnd(17, " ")}: ${msgAge}`);
console.log(`${"email".padEnd(17, " ")}: ${msgEmail}`);
console.log(`${"scoreJeu".padEnd(17, " ")}: ${msgScore}`);
console.log(`${"estAdmin".padEnd(17, " ")}: ${msgAdmin}`);
console.log(`${"derniereConnexion".padEnd(17, " ")}: ${msgConnexion}`);
console.log(`${"nombreConnexions".padEnd(17, " ")}: ${msgNbConnexions}`);
console.log("================================");