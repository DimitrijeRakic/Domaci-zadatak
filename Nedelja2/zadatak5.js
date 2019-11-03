let cena = 400;
let precnik = 32;
let poluprecnik = precnik / 2;
let povrsina = Math.pow(poluprecnik, 2) * Math.PI
let cenaPoCm2 = cena / povrsina;

console.log(`Cena pice po cm2 iznosi ${cenaPoCm2}`);
