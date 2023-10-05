const nemo = ["nemo"];
//By using the nemo const an input the algorithm tends to be faster
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat",'nigel','squirt','darla','hank'];
//By using the everyone const the algorithm tends to be a little bit slower than usual

const large = new Array(100000).fill('nemo');
//By using the large const it becomes very slower

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO");
    }
  }
}

//The Big O notation of the nemo function is linear
//As our inputs/elements grow the number of operations grows as well
//It's Big O is 0(n) linear 
//Big O of N or linear time it takes linear time to find Nemo
//The Big O depends on the number of inputs/fish
findNemo(large); // 0(n)