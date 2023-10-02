let boxes = ['Sedex','UPS','Prime ship'];

function compressFirstBox(boxes){
    console.log(boxes[0]);
}

compressFirstBox(boxes);
//This function is an O of one no matter how many times the boxes increase here or however many boxes we have, were always having the same time

//No matter how many times the boxes increase here or however many boxes we have, were always grabbing the first item in the arrays


const boxes2 = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes){
    console.log(boxes[0])// O(1);
    console.log(boxes[1])// O(1);
    //Its doing two operations so one O(1) + another one O(1)
}

logFirstTwoBoxes(boxes2); //O(2)