let total = 891;

let aygun = 92;
let aysel = 65;
let ilham = 113;
let ev = 152;
let firi = 164;
let fuad = 70;
let nazli = 140;
let bonus = 0;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const calc = (total) => {
  let rd = getRandomNumber(0.023, 0.028);
  bonus += total * rd * 0.21;
  return total + total * rd;
};
const calcme = (total, i) => {
  let rd = getRandomNumber(0.028, 0.033);
  //   total += bonus;
  console.log(`${i} Avgust: `, total * rd + bonus);

  return total + total * rd + bonus;
};
let i = 17;
while (i <= 31) {
  bonus = 0;
  aygun = calc(aygun);
  aysel = calc(aysel);
  ilham = calc(ilham);
  ev = calc(ev);
  firi = calc(firi);
  fuad = calc(fuad);
  nazli = calc(nazli);
  total = calcme(total, i);
  i++;
}
console.log("total: ", total);
