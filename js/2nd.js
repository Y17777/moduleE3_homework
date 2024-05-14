let num = prompt("Введите число");

function isPrime(num){
    if (num >= 2 && num <= 1000){
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return alert(`Число ${num} не простое`);
        }
    }
    return alert(`Число ${num} простое`);
    }
    else return alert(`Число ${num} вне диапазона`);
    }

isPrime(num);

