# Define a list of boxes
boxes = ['Sedex', 'UPS', 'Prime ship']

# Function to compress the first box and print it
def compress_first_box(boxes):
    print(boxes[0])

# Call the function with the list of boxes
compress_first_box(boxes)
# This function is an O of one no matter how many times the boxes increase here or however many boxes we have, were always having the same time
# This function has a time complexity of O(1) because it always takes a constant time to access the first element.

# Define a list of boxes2
boxes2 = [0, 1, 2, 3, 4, 5]

# Function to log the first two boxes
def log_first_two_boxes(boxes):
    print(boxes[0])  # O(1)
    print(boxes[1])  # O(1)
    # It's doing two constant-time operations, so the overall complexity is O(2), which simplifies to O(1).

# Call the function with the list of boxes2
log_first_two_boxes(boxes2) # O(2) simplified is O(1)
