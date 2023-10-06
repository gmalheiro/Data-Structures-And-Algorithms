def anotherChallenge(input):
    a = 5 # O(1)
    b = 10 # O(1)
    c = 50 # O(1)

    for i in range(len(input)): 
        x = i + 1 # O(n)
        y = i + 2 # O(n)
        z = i + 3 # O(n)
    
    for j in range(len(input)):
        p = j * 2 # O(n)
        q = j * 2 # O(n)
    
    whoAmI = "I don't know" #O(1)

# 4 O(1) 5 O(n)
# 4 + 5n
# The big O notation would be O(4 + 5n)
    # If u count the for loops it would be O(4 + 7n)
# Or simplifying it would be O(n)
