// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)
  
    for (let i = 0; i < input.length; i++) //O(n) já que o número de vezes que o for vai ser repetir depende do input
    {
      anotherFunction(); // O(n)
      let stranger = true; //O(n) It will run how many times the input is provided
      a++;//O(n)
    }
    return a; //O(1)
  }
  
  // If we have a mathy look now
  // We'll have the following operation
  // 3 O(1)  + 4 O(N)
  // 3 + n + n + n + n
  // 3 + 4n
  // Our Big O notation is  O(3 + 4n)