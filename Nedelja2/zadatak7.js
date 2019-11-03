let n = 5;
for (let i = 1; i <= n; i++) {
    let redovi = '';
    for (let taraba = 0; taraba < i; taraba++) {
        redovi += '#';
    }
    console.log(redovi);
}