const fs = require('fs');
const path = require('path');

const printResult=(result)=>{
    console.log(`The minimal path sum for this matrix is ${result}`)
}
// calculate the sum
const sumMatrix=(matrix)=> {
    const length=matrix[0].length
    for(let i=0;i<length;i++){
        for (let j=0; j<length;j++){
            let ci=length-1-i;
            let cj=length-1-j;
            let below=0, right=0
            if(ci+1<length)
                below=matrix[ci+1][cj]
            if(cj+1<length)
                right=matrix[ci][cj+1]
            matrix[ci][cj]+=Math.min(below,right)
        }
    }
    printResult(matrix[0][0])
}

// Reading the matrix file
fs.readFile(path.join(__dirname, 'matrix.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    const matrix = data.split('\n')
    .map(row => row.trim())
    .filter(row => row.length > 0) 
    .map(row => row.split(/\,/).map(Number));
    sumMatrix(matrix);
});