let n = 100;
let text;
for (i = 1; i <= n; i++) {
    text = '';
    if (i % 3 === 0) {
        text += 'Fizz';
    } if (i % 5 === 0) {
        text += 'Buzz';
    } else if (text === '') {
        text += i;
    }
    console.log(text);
}