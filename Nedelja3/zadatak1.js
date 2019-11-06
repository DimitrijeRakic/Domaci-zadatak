function najveciBroj(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    if (b > a && b > c) {
        return b;
    }
    if (c > a && c > b) {
        return c;
    }
    else
        return 'ERROR';
}
console.log(najveciBroj(22, 32, 21));