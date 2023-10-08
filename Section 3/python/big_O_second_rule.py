import math


def printFirstItemThenFirstHalfThenSayHi100times(items):
    print(items[0]) # O(1)

    middleIndex = math.floor(items.len / 2) # O(n/2)
    index = 0

    while(index < middleIndex):
        print(items[index])
        index += 1
    
    for  i in range(0,99): # O(100)
        print('hi')

''''
    The Big O notation of this function is:
    O(1 + n / 2 + 100)
    RULE NUMBER 2 SAYS : "DROP THE CONSTANTS"
    O(n/2 + 101) //Get a little bit better but we can enhance it
    O(n/2 + 1) //We can make it better
    O(n + 1)
    O(n) A final result
'''    
        