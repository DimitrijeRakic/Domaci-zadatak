let n = 5;
for (let i = 1; i <= n; i++) {
    redovi = '';
    for (let a = 1; a <= n - i; a++) {
        redovi += ' ';
    }
    for (let b = 1; b <= i; b++) {
        redovi += '#';
    }
    console.log(redovi);
}