// поиск по ответу

function isPerfectSquare(num) {
    let left = 1;
    let right = num;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === num) {
            return true;
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false