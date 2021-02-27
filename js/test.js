function getSums(arr) {
    let a = [];;
    let sum = 0;
    if (arr.length > 1) {
        arr.forEach((value, index) => {
            let b = arr.filter((item, i) => i !== index);
            a.push(b);
        })
    }
    return a;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b);
}