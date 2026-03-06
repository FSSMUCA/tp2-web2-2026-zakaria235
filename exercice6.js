// Déclaration des variables
let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const variables = [
  { nom: "nom",   valeur: nom },
  { nom: "age",   valeur: age },
  { nom: "ville", valeur: ville },
  { nom: "score", valeur: score },
  { nom: "actif", valeur: actif }
];

const defaut = "valeur par défaut";

// --- PARTIE A : Opérateur de coalescence des nuls (??) ---
console.log("** Partie A **");
for (let i = 0; i < variables.length; i++) {
  const v = variables[i];
  const resultat = v.valeur ?? defaut;
  const affichage = resultat === "" ? '""' : resultat;
  
  console.log(`${v.nom.padEnd(5, " ")} ?? "valeur par défaut"    -> ${affichage}`);
}

console.log(""); // Ligne vide pour séparer les parties
console.log("** Partie B **");
for (let i = 0; i < variables.length; i++) {
  const v = variables[i];
  const resultat = v.valeur || defaut;
  const affichage = resultat === "" ? '""' : resultat;
  
  console.log(`${v.nom.padEnd(5, " ")} || "valeur par défaut"    -> ${affichage}`);
}

console.log(""); 
console.log("** Partie C **");
for (let i = 0; i < variables.length; i++) {
  const v = variables[i];
  const resNullish = v.valeur ?? defaut;
  const resOu = v.valeur || defaut;
  
  const conclusion = (resNullish === resOu) ? "même résultat" : "résultat différent";
  
  console.log(`${v.nom.padEnd(5, " ")} : ?? et || -> ${conclusion}`);
}