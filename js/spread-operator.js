const dracolosse = {name: 'dracolosse', hp: 111};
const stats = {hp: 777, speed: 100, atk: 70, def: 80};
const result = {...dracolosse, ...stats};
console.table(result);

const mugiwara = ['Luffy', 'Zoro', 'Sanji'];

const supernovae = [...mugiwara, 'LAW', ...mugiwara,  'KIDD', ...mugiwara];

console.table(supernovae);

