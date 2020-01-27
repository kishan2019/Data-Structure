function Trangle(n){
    let result = new Array(n).fill().map(() => new Array(n).fill(''));

    for(let i=0;i< n; i++){
        for(let j=0; j <= i; j++){
            result[i][j] = '*';
        }
    }
 return result;
}

console.log(Trangle(4));