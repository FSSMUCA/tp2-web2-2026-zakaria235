const nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
  const valeur = nombres[i];
  let categorie;

  if (Number.isNaN(valeur)) {
    categorie = "INVALIDE";
  } 
  
  else if (valeur === Infinity || valeur === -Infinity) {
    categorie = "INFINI";
  } 
  
  else if (valeur === 0 && 1 / valeur === -Infinity) {
    categorie = "ZERO NEGATIF";
  } 

  else if (Number.isSafeInteger(valeur)) {
    categorie = "ENTIER SUR";
  } 
  
  else if (Number.isInteger(valeur)) {
    categorie = "ENTIER HORS LIMITES";
  } 
  else {
    categorie = "DECIMAL";
  }

  // Affichage au format demandé
  console.log(`${valeur} -> ${categorie}`);
}