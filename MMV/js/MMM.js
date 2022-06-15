function mediana(arr) {
    arr = arr.sort((a,b) => a - b);

    if(arr.length % 2 !==0){
        return arr[Math.floor(arr.length / 2)];
    }else{
        let mid1 = arr[arr.length / 2];
        let mid2 = arr[arr.length / 2 - 1];
        return (mid1 + mid2) / 2;
    }
}

function moda(arr){

    const arrObj = {};

    arr.forEach((elem) => {
        
        if(!arrObj [elem]) arrObj[elem] = 0;
        arrObj[elem]++;
    });

    let result = [];
    let max = 0;

    for(let key in arrObj){

        if(arrObj[key] > max){
            result = [key];
            max = arrObj[key];
        }else if(arrObj[key] === max){
            result.push(key);
        }
    }

    if(Object.keys(arrObj).length === result.length){
        result = [];
    }
    return result;
}

const arr = [2,3,4,5];