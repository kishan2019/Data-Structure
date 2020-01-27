function Bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
               lowest = j;
            }
        }
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
    return arr;
}

let result = Bubble([5, 4, 3, 2, 1, 9]);
console.log(result);