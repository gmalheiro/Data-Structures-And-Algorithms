function aCompressBoxesTwice (boxes){
    boxes.forEach(function(boxes){
        console.log(boxes);
    });


    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

function bCompressBoxesTwice (boxes, boxes2){
    boxes.forEach(function(boxes){
        console.log(boxes);
    });


    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

/* 
    The big o of example a is:
    O(2n)
    But as we drop the constants it becomes:
    O(n)


    But for example b it's not, because the third rule states that 
    different terms for inputs and 

    the first loop depends on how big the first input is 
    and the second loop depends on how big the second input is 

    So the big O notation of the example b would be:
    O(a + b)

    If the for loops were nested the Big O would be: O(a*b)
*/