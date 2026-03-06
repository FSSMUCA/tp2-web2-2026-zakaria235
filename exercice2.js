const valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
  let valeurAffichage = String(valeurs[i]);

  if (valeurs[i] === "") {
    valeurAffichage = "(chaine vide)";
  }

  let etat;
  if (valeurs[i]) {
    etat = "truthy";
  } else {
    etat = "falsy";
  }

  console.log(`${valeurAffichage} -> ${etat}`);
}