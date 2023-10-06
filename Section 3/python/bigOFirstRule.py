nemo = ["nemo"]
everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", 'nigel', 'squirt', 'darla', 'hank']
# The Big O first rule cares about the worst case which means, nemo might be at the end of the array
large = ["nemo"] * 100000

def find_nemo(array):
    for item in array:  
        print('Running')
        if item == "nemo":
            print("Found NEMO")
            break


 # CASES
 # 1. Nemo might be at the beginning of the array O(1) (GOOD CASE)
 # 2. Nemo might be at the end of the array O(n) (WORST CASE)

find_nemo(everyone)
