function matrix(n){
    let result = new Array(n).fill().map(() => new Array(n).fill(''));

    let counter = 1;
    let startRow = 0;
    let startCol = 0;
    let endRow = n-1;
    let endCol = n-1;
   
    while(startRow < endRow && startCol < endCol){

        //first row
        for(let i= startCol; i<= endCol; i++){
            result[startCol][i] = counter;
            counter++;
        }
        startRow++;

        //last col
        for(let i= startRow; i<= endRow; i++){
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;


        //last row
        for(let i= endCol; i>= startCol; i--){
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //first row
        for(let i= endRow; i>= startRow; i--){
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;

    }

    return result;
}


console.log(matrix(4))