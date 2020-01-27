function Merge(arr1, arr2){
    let i=0;
    let j=0;
    let result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i< arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j< arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function MerseSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = MerseSort(arr.slice(0, mid));
    let right = MerseSort(arr.slice(mid));
    return Merge(left, right);
}

console.log(MerseSort([3,5,1,2]));