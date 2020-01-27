function Bubble(arr){
    for(let i=0; i< arr.length; i++){
        for(let j=0; j< arr.length - i -1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

let result = Bubble([5,4,3,2,1,9]);
console.log(result);