// Déclaration des variables
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null; 
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

console.log("--- DÉTAIL DES OPÉRATIONS ---");

let sousTotal = prix * quantite;
console.log(`Sous-total calculé : ${sousTotal} MAD`);

let codeSaisi = codePromo ?? "AUCUN";
let reduction = 0;

if (codeSaisi !== "AUCUN" && estMembre === true) {
  reduction = sousTotal * (reductionPourcentage / 100);
}
console.log(`Réduction appliquée : ${reduction} MAD`);
let total = sousTotal - reduction;
console.log(`Total final à payer : ${total} MAD`);

let statut = "";
let nouveauSolde = soldeCompte;

if (soldeCompte >= total) {
  statut = "Paiement accepté";
  nouveauSolde = soldeCompte - total;
  console.log(statut);
  console.log(`Nouveau solde : ${nouveauSolde} MAD`);
} else {
  statut = "Solde insuffisant";
  console.log(statut);
}

console.log("\n===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${reduction} MAD`); // Corrigé MAS en MAD pour la cohérence
console.log(`Total     : ${total} MAD`); // Corrigé MAS en MAD
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${nouveauSolde} MAD`);
console.log("=========================");