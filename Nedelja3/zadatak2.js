function cenaPicePoCm2(cenaPice, r) {
    let p = Math.pow(r, 2) * Math.PI;
    cenaPicePoCm2 = cenaPice / p;
    return cenaPicePoCm2;
}
console.log(`Cena pize po kvadratnom centimetru iznosi ${cenaPicePoCm2(600, 16)}`);