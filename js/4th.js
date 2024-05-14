function array (a, b) {
    let start = a;
    let end = b;
    let intervalId = setInterval(function() {
        console.log(start);
        if (start === end) {
            clearInterval(intervalId);
        }
        start++;
    }, 1000);
}

array(5, 15);
