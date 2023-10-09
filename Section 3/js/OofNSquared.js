//const boxes = [1,2,3,4,5];

//What is the Big O of this function
const boxes = ['a','b','c','d','e'] // O(1)

function logAllPairsOfArray(array){
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i] + "," +  array[j]);
        }

        /* 
            We have to fors iterating through the array.length
            So we have O(n) nested inside an O(n)
            When for loops are one under another  we use + addition
            When for loops are nested inside each other we use * multiplication

            So the Big O for this for loop i O(n * n)
            Which simplifies to O(n ^ 2)

            It is also called quadratic time O(n^2)
        */
        
    }
}

logAllPairsOfArray(boxes);