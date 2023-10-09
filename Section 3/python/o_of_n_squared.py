# Log all pairs of array

boxes = [ 1,2,3,4,5]

def logPairs(boxes):
    for box in boxes:
        for box2 in boxes:
            print(box ,',', box2)

logPairs(boxes)
