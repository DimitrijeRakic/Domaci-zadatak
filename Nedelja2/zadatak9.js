let n = 5;

for (let i = 1; i <= n; i++) {
    let redovi = ' ';
    for (let a = 1; a <= n - i; a++) {
        redovi += ' ';
    }
    for (let b = 1; b <= i; b++) {
        redovi += '#';
    }
    redovi += ' ';
    for (let c = 1; c <= i; c++) {
        redovi += '#';
    }
    console.log(redovi);
}