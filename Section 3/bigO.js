const nemo = ["nemo"];
//By using the nemo const an input the algorithm tends to be faster
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat",'nigel','squirt','darla','hank'];
//By using the everyone const the algorithm tends to be a little bit slower than usual

const large = new Array(100000).fill('nemo');
//By using the large const it becomes very slower

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO");
    }
  }
  let t1 = performance.now();
  console.log("\nCall to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(large);