function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); //O(n/2)
    var index = 0; 

    while(index < middleIndex){
         console.log(items[index]); 
         index++;
    }

    for(var i = 0; i < 100; i++){
        console.log('hi');
    }
}

/* Big O notation of this function is
    O(1 + n/2 + 100) 
    RULE NUMBER 2 SAYS : "DROP THE CONSTANTS"
    O(n/2 + 1)
    O(n + 1)
    O(n)

    **WE ARE IGNORING VARIABLE ASSIGNMENTS 
      AND SMALL CALCULATIONS FOR THIS EXAMPLE**
*/