function reverseNumber(number) {
    let reversedNumber = 0;

    for (; number > 0; number = Math.floor(number / 10)) {
        const lastDigit = number % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
    }

    return reversedNumber;
}
console.log(reverseNumber(54321))
