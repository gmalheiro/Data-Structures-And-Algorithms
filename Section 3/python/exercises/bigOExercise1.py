def funChallenge(input):
    a = 10 #O(1)
    a = 50 + 3 #O(1)

    for i in range(len(input)): # O(n)
        another_function() #O(n)
        stranger = True #O(n)
        a += 1 #O(n)

    return a

def another_function():
    print()

  # If we have a mathy look now
  # We'll have the following operation
  # 3 O(1)  + 4 O(N)
  # 3 + n + n + n + n
  # 3 + 4n
  # Our Big O notation is  O(3 + 4n)
  # Simplifying it would be O(n)