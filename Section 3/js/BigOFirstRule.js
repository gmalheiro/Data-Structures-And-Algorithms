const nemo = ["nemo"];

const everyone = ["dory", "bruce", "marlin", "gill", "bloat",'nigel','squirt','darla','hank',"nemo"]; 
// The Big O first rule cares about the worst case which means, nemo might be at the end of the array

const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === "nemo") {
      //If nemo is at the end of the array its going to iterate through all the items
      console.log("Found NEMO");
      break;
    }
  }
}

/* 
  CASES
  1. Nemo might be at the beginning of the array O(1) (GOOD CASE)
  2. Nemo might be at the end of the array O(n) (WORST CASE)
*/

findNemo(everyone); // 0(n)