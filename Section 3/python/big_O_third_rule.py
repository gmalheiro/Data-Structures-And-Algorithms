def aCompressBoxesTwice(boxes):
    for box in boxes :
        print(box)

def bCompressBoxesTwice(boxes,boxes2):
    for box in boxes:
        print(box)
    
    for box2 in boxes2:
        print(box2)

''''
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
    O(n + n) 
    O(n + a)
    AND THERE IT GOES
'''