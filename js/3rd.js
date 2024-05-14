function Sum(x) {
    return function(y) {
        return x + y
    }
}
const sum2 = Sum(6);
const sum3 = sum2(2);
console.log(sum3);

