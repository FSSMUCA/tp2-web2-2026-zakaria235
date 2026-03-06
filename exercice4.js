
const paires = [
  { v1: 0, v2: "", str1: '0', str2: '""' },
  { v1: 0, v2: "0", str1: '0', str2: '"0"' },
  { v1: 0, v2: false, str1: '0', str2: 'false' },
  { v1: "", v2: false, str1: '""', str2: 'false' },
  { v1: null, v2: undefined, str1: 'null', str2: 'undefined' },
  { v1: null, v2: false, str1: 'null', str2: 'false' },
  { v1: NaN, v2: NaN, str1: 'NaN', str2: 'NaN' },
  { v1: 1, v2: "1", str1: '1', str2: '"1"' },
  { v1: " \t\n ", v2: 0, str1: '" \\t\\n "', str2: '0' }
];

let compteurDifferences = 0;

for (let i = 0; i < paires.length; i++) {
  const { v1, v2, str1, str2 } = paires[i];
  const resultatLoose = (v1 == v2);
  const resultatStrict = (v1 === v2);
  
  if (resultatLoose === true && resultatStrict === false) {
    compteurDifferences++;
  }
  
  const exprLoose = `${str1} == ${str2}`.padEnd(18, " ");
  const resLooseStr = String(resultatLoose).padEnd(5, " ");
  const exprStrict = `${str1} === ${str2}`.padEnd(19, " ");
  
  console.log(`${exprLoose} -> ${resLooseStr} |   ${exprStrict} -> ${resultatStrict}`);
}


console.log("---");
console.log(`${compteurDifferences} paire(s) où == et === donnent des résultats différents`);