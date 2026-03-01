export const dsaContent = {
    name: "Data Structures & Algorithms",
    description: "Learn DSA - Fundamental computer science concepts",
    lessons: [
        {
            id: 1, title: "DSA Introduction", icon: "🧠", content: `1.1What are Data Structures?
A data structure is a way to store data.
We structure data in different ways depending on what data we have, and what we want to do with it.
Family Tree
First, let's consider an example without computers in mind, just to get the idea.
If we want to store data about people we are related to, we use a family tree as the data structure. We choose a family tree as the data structure because we have information about people we are related to and how they are related, and we want an overview so that we can easily find a specific family member, several generations back.
With such a family tree data structure visually in front of you, it is easy to see, for example, who my mother's mother is—it is 'Emma,' right? But without the links from child to parents that this data structure provides, it would be difficult to determine how the individuals are related.
Data structures give us the possibility to manage large amounts of data efficiently for uses such as large databases and internet indexing services.
Data structures are essential ingredients in creating fast and powerful algorithms. They help in managing and organizing data, reduce complexity, and increase efficiency.
In Computer Science there are two different kinds of data structures.
\`\`\`
Primitive Data Structures are basic data structures provided by programming languages to represent single values, such as integers, floating-point numbers, characters, and booleans.
Abstract Data Structures are higher-level data structures that are built using primitive data types and provide more complex and specialized operations. Some common examples of abstract data structures include arrays, linked lists, stacks, queues, trees, and graphs.
\`\`\`
1.2What are Algorithms?
An algorithm is a set of step-by-step instructions to solve a given problem or achieve a specific goal.
Algorithms are fundamental to computer programming as they provide step-by-step instructions for executing tasks. An efficient algorithm can help us to find the solution we are looking for, and to transform a slow program into a faster one.
Algorithm examples:
- Finding the fastest route in a GPS navigation system
- Navigating an airplane or a car (cruise control)
- Finding what users search for (search engine)
- Sorting, for example sorting movies by rating
` },
        {
            id: 2, title: "Arrays and Lists", icon: "📑", content: `2.1DSA Arrays
An array is a data structure used to store multiple elements.
Arrays are used by many algorithms.
For example, an algorithm can be used to look through an array to find the lowest value, like the animation below shows:
Example:\`\`\`
my_array = [7, 12, 9, 4, 11]
print( my_array[0] )
\`\`\`
2.2Bubble Sort
Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.
Manual Run Through
Before we implement the Bubble Sort algorithm in a programming language, let's manually run through a short array only one time, just to get the idea.
Step 1: We start with an unsorted array.
[7, 12, 9, 11, 3]
Step 2: We look at the two first values. Does the lowest value come first? Yes, so we don't need to swap them.
[7, 12, 9, 11, 3]
Step 3: Take one step forward and look at values 12 and 9. Does the lowest value come first? No.
[7, 12, 9, 11, 3]
Step 4: So we need to swap them so that 9 comes first.
[7, 9, 12, 11, 3]
Step 5: Taking one step forward, looking at 12 and 11.
[7, 9, 12, 11, 3]
Step 6: We must swap so that 11 comes before 12.
[7, 9, 11, 12, 3]
Step 7: Looking at 12 and 3, do we need to swap them? Yes.
[7, 9, 11, 12, 3]
Step 8: Swapping 12 and 3 so that 3 comes first.
[7, 9, 11, 3, 12]
Bubble Sort Implementation
To implement the Bubble Sort algorithm in a programming language, we need:
- An array with values to sort.
- An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.
- An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.
The resulting code looks like this:
Example:\`\`\`
my_array = [64, 34, 25, 12, 22, 11, 90, 5]
n = len(my_array)
for i in range(n-1):
    for j in range(n-i-1):
        if my_array[j] > my_array[j+1]:
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]
print("Sorted array:", my_array)
\`\`\`
2.3Quicksort
As the name suggests, Quicksort is one of the fastest sorting algorithms.
The Quicksort algorithm takes an array of values, chooses one of the values as the 'pivot' element, and moves the other values so that lower values are on the left of the pivot element, and higher values are on the right of it.
Manual Run Through
Before we implement the Quicksort algorithm in a programming language, let's manually run through a short array, just to get the idea.
Step 1: We start with an unsorted array.
[ 11, 9, 12, 7, 3]
Step 2: We choose the last value 3 as the pivot element.
[ 11, 9, 12, 7, 3]
Step 3: The rest of the values in the array are all greater than 3, and must be on the right side of 3. Swap 3 with 11.
[ 3, 9, 12, 7, 11]
Step 4: Value 3 is now in the correct position. We need to sort the values to the right of 3. We choose the last value 11 as the new pivot element.
[ 3, 9, 12, 7, 11]
Step 5: The value 7 must be to the left of pivot value 11, and 12 must be to the right of it. Move 7 and 12.
[ 3, 9, 7, 12, 11]
Step 6: Swap 11 with 12 so that lower values 9 and 7 are on the left side of 11, and 12 is on the right side.
[ 3, 9, 7, 11, 12]
Step 7: 11 and 12 are in the correct positions. We choose 7 as the pivot element in sub-array [ 9, 7], to the left of 11.
[ 3, 9, 7, 11, 12]
Step 8: We must swap 9 with 7.
[ 3, 7, 9, 11, 12]
And now, the array is sorted.
Quicksort Implementation
To write a 'quickSort' method that splits the array into shorter and shorter sub-arrays we use recursion. This means that the 'quickSort' method must call itself with the new sub-arrays to the left and right of the pivot element.
To implement the Quicksort algorithm in a programming language, we need:
- An array with values to sort.
- A quickSort method that calls itself (recursion) if the sub-array has a size larger than 1.
- A partition method that receives a sub-array, moves values around, swaps the pivot element into the sub-array and returns the index where the next split in sub-arrays happens.
The resulting code looks like this:
Example:\`\`\`
def partition(array, low, high):
    pivot = array[high]
    i = low - 1
    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]
    array[i+1], array[high] = array[high], array[i+1]
    return i+1
def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1
    if low < high:
        pivot_index = partition(array, low, high)
        quicksort(array, low, pivot_index-1)
        quicksort(array, pivot_index+1, high)
my_array = [64, 34, 25, 12, 22, 11, 90, 5]
quicksort(my_array)
print("Sorted array:", my_array)
\`\`\`
2.4Merge Sort
The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.
**Divide**: The algorithm starts with breaking up the array into smaller and smaller pieces until one such sub-array only consists of one element.
**Conquer**: The algorithm merges the small pieces of the array back together by putting the lowest values first, resulting in a sorted array.
Manual Run Through
Let's try to do the sorting manually, just to get an even better understanding of how Merge Sort works before actually implementing it in a programming language.
Step 1: We start with an unsorted array, and we know that it splits in half until the sub-arrays only consist of one element.
[ 12, 8, 9, 3, 11, 5, 4]
[ 12, 8, 9] [ 3, 11, 5, 4]
[ 12] [ 8, 9] [ 3, 11, 5, 4]
[ 12] [ 8] [ 9] [ 3, 11, 5, 4]
Step 2: The splitting of the first sub-array is finished, and now it is time to merge. 8 and 9 are the first two elements to be merged.
[ 12] [ 8, 9] [ 3, 11, 5, 4]
Step 3: The next sub-arrays to be merged is [ 12] and [ 8, 9]. 8 is lower than 12, so 8 comes first, and 9 is also lower than 12.
[ 8, 9, 12] [ 3, 11, 5, 4]
Step 4: Now the second big sub-array is split recursively.
[ 8, 9, 12] [ 3, 11] [ 5, 4]
[ 8, 9, 12] [ 3] [ 11] [ 5, 4]
Step 5: 3 and 11 are merged back together in the same order as they are shown because 3 is lower than 11.
[ 8, 9, 12] [ 3, 11] [ 5, 4]
Step 6: Sub-array with values 5 and 4 is split, then merged so that 4 comes before 5.
[ 8, 9, 12] [ 3, 11] [ 4, 5]
Step 7: The two sub-arrays on the right are merged.
[ 8, 9, 12] [ 3, 4, 5, 11]
Step 8: The two last remaining sub-arrays are merged.
[ 3, 8, 9, 12] [ 4, 5, 11]
Step 9: 4 is lower than 8:
[ 3, 4, 8, 9, 12] [ 5, 11]
Step 10: 5 is lower than 8:
[ 3, 4, 5, 8, 9, 12] [ 11]
Step 11: 8 and 9 are lower than 11:
[ 3, 4, 5, 8, 9, 12] [ 11]
Step 12: 11 is lower than 12:
[ 3, 4, 5, 8, 9, 11, 12]
The sorting is finished!
Merge Sort Implementation
To implement the Merge Sort algorithm we need:
- An array with values that needs to be sorted.
- A function that takes an array, splits it in two, and calls itself with each half of that array.
- Another function that merges the sub-arrays back together in a sorted way.
The resulting code looks like this:
Example:\`\`\`
def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    leftHalf = arr[:mid]
    rightHalf = arr[mid:]
    sortedLeft = mergeSort(leftHalf)
    sortedRight = mergeSort(rightHalf)
    return merge(sortedLeft, sortedRight)
def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13]
sortedArr = mergeSort(unsortedArr)
print("Sorted array:", sortedArr)
\`\`\`
2.5Linear Search
The Linear Search algorithm searches through an array and returns the index of the value it searches for.
Linear Search Implementation
To implement the Linear Search algorithm we need:
- An array with values to search through.
- A target value to search for.
- A loop that goes through the array from start to end.
- An if-statement that compares the current value with the target value.
The resulting code for Linear Search looks like this:
Example:\`\`\`
def linearSearch(arr, targetVal):
    for i in range(len(arr)):
        if arr[i] == targetVal:
            return i
    return -1
arr = [3, 7, 2, 9, 5]
targetVal = 9
result = linearSearch(arr, targetVal)
if result != -1:
    print("Value",targetVal,"found at index",result)
else:
    print("Value",targetVal,"not found")
\`\`\`
2.6Binary Search
The Binary Search algorithm searches through an array and returns the index of the value it searches for.
Binary Search Implementation
To implement the Binary Search algorithm we need:
- An array with values to search through.
- A target value to search for.
- A loop that runs as long as left index is less than, or equal to, the right index.
- An if-statement that compares the middle value with the target value.
- An if-statement that checks if the target value is less than, or larger than, the middle value.
The resulting code for Binary Search looks like this:
Example:\`\`\`
def binarySearch(arr, targetVal):
    left = 0
    right = len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == targetVal:
            return mid
        if arr[mid] < targetVal:
            left = mid + 1
        else:
            right = mid - 1
    return -1
myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
myTarget = 15
result = binarySearch(myArray, myTarget)
if result != -1:
    print("Value",myTarget,"found at index", result)
else:
    print("Target not found in array.")
\`\`\`
2.7DSA Linked Lists
Linked Lists
A linked list consists of nodes with some sort of data, and a pointer, or link, to the next node.
A big benefit with using linked lists is that nodes are stored wherever there is free space in memory, the nodes do not have to be stored contiguously right after each other like elements are stored in arrays. Another nice thing with linked lists is that when adding or removing nodes, the rest of the nodes in the list do not have to be shifted.
Types of Linked Lists
There are three basic forms of linked lists:
1.Singly linked lists
A singly linked list is the simplest kind of linked lists. It takes up less space in memory because each node has only one address to the next node, like in the image below.
2.Doubly linked lists
A doubly linked list has nodes with addresses to both the previous and the next node, like in the image below, and therefore takes up more memory. But doubly linked lists are good if you want to be able to move both up and down in the list.
3.Circular linked lists
A circular linked list is like a singly or doubly linked list with the first node, the "head", and the last node, the "tail", connected.
In singly or doubly linked lists, we can find the start and end of a list by just checking if the links are null. But for circular linked lists, more complex code is needed to explicitly check for start and end nodes in certain applications.
Circular linked lists are good for lists you need to cycle through continuously.
2.8Linked List Operations
1.Traversal of a Linked List
Traversing a linked list means to go through the linked list by following the links from one node to the next.
Traversal of linked lists is typically done to search for a specific node, and read or modify the node's content, remove the node, or insert a node right before or after that node.
Example
\`\`\`
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def traverseAndPrint(head):
    currentNode = head
    while currentNode:
        print(currentNode.data, end=" -> ")
        currentNode = currentNode.next
    print("null")
node1 = Node(7)
node2 = Node(11)
node3 = Node(3)
node4 = Node(2)
node5 = Node(9)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
traverseAndPrint(node1)
\`\`\`
2. Delete a Node in a Linked List
In this case we have the link (or pointer or address) to a node that we want to delete.
It is important to connect the nodes on each side of the node before deleting it, so that the linked list is not broken.
So before deleting the node, we need to get the next pointer from the previous node, and connect the previous node to the new next node before deleting the node in between.
In a singly linked list, like we have here, to get the next pointer from the previous node we actually need traverse the list from the start, because there is no way to go backwards from the node we want to delete.
The simulation below shows the node we want to delete, and how the list must be traversed first to connect the list properly before deleting the node without breaking the linked list.
Example
\`\`\`
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def traverseAndPrint(head):
    currentNode = head
    while currentNode:
        print(currentNode.data, end=" -> ")
        currentNode = currentNode.next
    print("null")
def deleteSpecificNode(head, nodeToDelete):
    if head == nodeToDelete:
        return head.next
    currentNode = head
    while currentNode.next and currentNode.next != nodeToDelete:
        currentNode = currentNode.next
    if currentNode.next is None:
        return head
    currentNode.next = currentNode.next.next
    return head
node1 = Node(7)
node2 = Node(11)
node3 = Node(3)
node4 = Node(2)
node5 = Node(9)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
print("Before deletion:")
traverseAndPrint(node1)
# Delete node4
node1 = deleteSpecificNode(node1, node4)
print("\nAfter deletion:")
traverseAndPrint(node1)
\`\`\`
3. Insert a Node in a Linked List
Inserting a node into a linked list is very similar to deleting a node, because in both cases we need to take care of the next pointers to make sure we do not break the linked list.
To insert a node in a linked list we first need to create the node, and then at the position where we insert it, we need to adjust the pointers so that the previous node points to the new node, and the new node points to the correct next node.
Example
\`\`\`
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def traverseAndPrint(head):
    currentNode = head
    while currentNode:
        print(currentNode.data, end=" -> ")
        currentNode = currentNode.next
    print("null")
def insertNodeAtPosition(head, newNode, position):
    if position == 1:
        newNode.next = head
        return newNode
    currentNode = head
    for _ in range(position - 2):
        if currentNode is None:
            break
        currentNode = currentNode.next
    newNode.next = currentNode.next
    currentNode.next = newNode
    return head
node1 = Node(7)
node2 = Node(3)
node3 = Node(2)
node4 = Node(9)
node1.next = node2
node2.next = node3
node3.next = node4
print("Original list:")
traverseAndPrint(node1)
# Insert a new node with value 97 at position 2
newNode = Node(97)
node1 = insertNodeAtPosition(node1, newNode, 2)
print("After insertion:")
traverseAndPrint(node1)
\`\`\`` },
        {
            id: 3, title: "Stacks and Queues", icon: "📚", content: `3.1DSA Stacks
A stack is a data structure that can hold many elements.
In a pile of pancakes, the pancakes are both added and removed from the top. So when removing a pancake, it will always be the last pancake you added. This way of organizing elements is called LIFO: Last In First Out.
**Basic operations on a stack**:
**Push**: Adds a new element on the stack.
**Pop**: Removes and returns the top element from the stack.
**Peek**: Returns the top element on the stack.
**isEmpty**: Checks if the stack is empty.
**Size**: Finds the number of elements in the stack.
Stacks can be implemented by using arrays or linked lists.
Stacks can be used to implement undo mechanisms, revert to previous states, create algorithms for depth-first search, or for backtracking.
Example in Python:
\`\`\`python
class Stack:
    def __init__(self):
        self.stack = []
    def push(self, element):
        self.stack.append(element)
    def pop(self):
        if self.isEmpty():
            return "Stack is empty"
        return self.stack.pop()
    def peek(self):
        if self.isEmpty():
            return "Stack is empty"
        return self.stack[-1]
    def isEmpty(self):
        return len(self.stack) == 0
    def size(self):
        return len(self.stack)

myStack = Stack()
myStack.push('A')
myStack.push('B')
myStack.push('C')
print("Stack: ", myStack.stack)
print("Pop: ", myStack.pop())
print("Peek: ", myStack.peek())
print("isEmpty: ", myStack.isEmpty())
print("Size: ", myStack.size())
\`\`\`
3.2Stack Implementation using Linked Lists
**Dynamic size**: The stack can grow and shrink dynamically, unlike with arrays.
**Extra memory**: Each element must contain the address to the next element.
Example in Python:
\`\`\`python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
class Stack:
    def __init__(self):
        self.head = None
        self.size = 0
    def push(self, value):
        new_node = Node(value)
        if self.head:
            new_node.next = self.head
        self.head = new_node
        self.size += 1
    def pop(self):
        if self.isEmpty():
            return "Stack is empty"
        popped_node = self.head
        self.head = self.head.next
        self.size -= 1
        return popped_node.value
    def peek(self):
        if self.isEmpty():
            return "Stack is empty"
        return self.head.value
    def isEmpty(self):
       return self.size == 0 
    def stackSize(self):
        return self.size
myStack = Stack()
myStack.push('A')
myStack.push('B')
myStack.push('C')
print("Pop: ", myStack.pop())
print("Peek: ", myStack.peek())
print("isEmpty: ", myStack.isEmpty())
print("Size: ", myStack.stackSize())
\`\`\`
3.3Queues
A queue is a data structure where the first element added is the first one removed (FIFO: First In First Out).
**Basic operations on a queue**:
**Enqueue**: Adds a new element to the queue.
**Dequeue**: Removes and returns the first element.
**Peek**: Returns the first element.
**isEmpty**: Checks if the queue is empty.
**Size**: Finds the number of elements.
Example in Python:
\`\`\`python
class Queue:
    def __init__(self):
        self.queue = []
    def enqueue(self, element):
        self.queue.append(element)
    def dequeue(self):
        if self.isEmpty():
            return "Queue is empty"
        return self.queue.pop(0)
    def peek(self):
        if self.isEmpty():
            return "Queue is empty"
        return self.queue[0]
    def isEmpty(self):
        return len(self.queue) == 0
    def size(self):
        return len(self.queue)

myQueue = Queue()
myQueue.enqueue('A')
myQueue.enqueue('B')
myQueue.enqueue('C')
print("Queue: ", myQueue.queue)
print("Dequeue: ", myQueue.dequeue())
print("Peek: ", myQueue.peek())
print("isEmpty: ", myQueue.isEmpty())
print("Size: ", myQueue.size())
\`\`\`
3.4Queue Implementation using Linked Lists
**Benefits**: Dynamic size and no shifting required on dequeue.
Example in Python:
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
        self.length = 0
    def enqueue(self, element):
        new_node = Node(element)
        if self.rear is None:
            self.front = self.rear = new_node
            self.length += 1
            return
        self.rear.next = new_node
        self.rear = new_node
        self.length += 1
    def dequeue(self):
        if self.isEmpty():
            return "Queue is empty"
        temp = self.front
        self.front = temp.next
        self.length -= 1
        if self.front is None:
            self.rear = None
        return temp.data
    def peek(self):
        if self.isEmpty():
            return "Queue is empty"
        return self.front.data
    def isEmpty(self):
        return self.length == 0
    def size(self):
        return self.length
    def printQueue(self):
        temp = self.front
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()

myQueue = Queue()
myQueue.enqueue('A')
myQueue.enqueue('B')
myQueue.enqueue('C')
print("Queue: ", end="")
myQueue.printQueue()
print("Dequeue: ", myQueue.dequeue())
print("Peek: ", myQueue.peek())
print("isEmpty: ", myQueue.isEmpty())
print("Size: ", myQueue.size())
\`\`\` ` },
        {
            id: 4, title: "Trees and Graphs", icon: "🌳", content: `4.1Trees
The Tree data structure is similar to Linked Lists in that each node contains data and can be linked to other nodes.
We have previously covered data structures like Arrays, Linked Lists, Stacks, and Queues. These are all linear structures, which means that each element follows directly after another in a sequence. Trees however, are different. In a Tree, a single element can have multiple 'next' elements, allowing the data structure to branch out in various directions.
The Tree data structure can be useful in many cases:
Hierarchical Data: File systems, organizational models, etc.
Databases: Used for quick data retrieval.
Routing Tables: Used for routing data in network algorithms.
Sorting/Searching: Used for sorting data and searching for data.
Priority Queues: Priority queue data structures are commonly implemented using trees, such as binary heaps.
4.2Types of Trees
Trees are a fundamental data structure in computer science, used to represent hierarchical relationships. This tutorial covers several key types of trees.
Binary Trees: Each node has up to two children, the left child node and the right child node. This structure is the foundation for more complex tree types like Binay Search Trees and AVL Trees.
Binary Search Trees (BSTs): A type of Binary Tree where for each node, the left child node has a lower value, and the right child node has a higher value.
AVL Trees: A type of Binary Search Tree that self-balances so that for every node, the difference in height between the left and right subtrees is at most one. This balance is maintained through rotations when nodes are inserted or deleted.
4.3Binary Trees
A Binary Tree is a type of tree data structure where each node can have a maximum of two child nodes, a left child node and a right child node.
This restriction, that a node can have a maximum of two child nodes, gives us many benefits:
Algorithms like traversing, searching, insertion and deletion become easier to understand, to implement, and run faster.
Keeping data sorted in a Binary Search Tree (BST) makes searching very efficient.
Balancing trees is easier to do with a limited number of child nodes, using an AVL Binary Tree for example.
Binary Trees can be represented as arrays, making the tree more memory efficient.
**Types of Binary Trees**
A balanced Binary Tree has at most 1 in difference between its left and right subtree heights, for each node in the tree.

A complete Binary Tree has all levels full of nodes, except the last level, which is can also be full, or filled from left to right. The properties of a complete Binary Tree means it is also balanced.

A full Binary Tree is a kind of tree where each node has either 0 or 2 child nodes.

A perfect Binary Tree has all leaf nodes on the same level, which means that all levels are full of nodes, and all internal nodes have two child nodes.The properties of a perfect Binary Tree means it is also full, balanced, and complete.
Example:
\`\`\`
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
root = TreeNode('R')
nodeA = TreeNode('A')
nodeB = TreeNode('B')
nodeC = TreeNode('C')
nodeD = TreeNode('D')
nodeE = TreeNode('E')
nodeF = TreeNode('F')
nodeG = TreeNode('G')
root.left = nodeA
root.right = nodeB
nodeA.left = nodeC
nodeA.right = nodeD
nodeB.left = nodeE
nodeB.right = nodeF
nodeF.left = nodeG
# Test
print("root.right.left.data:", root.right.left.data)
\`\`\`
4.4Graphs
A Graph is a non-linear data structure that consists of vertices (nodes) and edges.
A vertex, also called a node, is a point or an object in the Graph, and an edge is used to connect two vertices with each other.
Graphs are non-linear because the data structure allows us to have different paths to get from one vertex to another, unlike with linear data structures like Arrays or Linked Lists.
Graphs are used to represent and solve problems where the data consists of objects and relationships between them, such as:
Social Networks: Each person is a vertex, and relationships (like friendships) are the edges. Algorithms can suggest potential friends.
Maps and Navigation: Locations, like a town or bus stops, are stored as vertices, and roads are stored as edges. Algorithms can find the shortest route between two locations when stored as a Graph.
Internet: Can be represented as a Graph, with web pages as vertices and hyperlinks as edges.
Biology: Graphs can model systems like neural networks or the spread of diseases.
**Graph Properties:**
A weighted Graph is a Graph where the edges have values. The weight value of an edge can represent things like distance, capacity, time, or probability.
A connected Graph is when all the vertices are connected through edges somehow. A Graph that is not connected, is a Graph with isolated (disjoint) subgraphs, or single isolated vertices.
A directed Graph, also known as a digraph, is when the edges between the vertex pairs have a direction. The direction of an edge can represent things like hierarchy or flow.
A cyclic Graph is defined differently depending on whether it is directed or not:
A directed cyclic Graph is when you can follow a path along the directed edges that goes in circles. Removing the directed edge from F to G in the animation above makes the directed Graph not cyclic anymore.
An undirected cyclic Graph is when you can come back to the same vertex you started at without using the same edge more than once. The undirected Graph above is cyclic because we can start and end up in vertes C without using the same edge twice.
A loop, also called a self-loop, is an edge that begins and ends on the same vertex. A loop is a cycle that only consists of one edge. By adding the loop on vertex A in the animation above, the Graph becomes cyclic.
4.5Graphs Traversal
To traverse a Graph means to start in one vertex, and go along the edges to visit other vertices until all vertices, or as many as possible, have been visited.
The two most common ways a Graph can be traversed are:
Depth First Search (DFS)
Breadth First Search (BFS)
**Depth First Search Traversal**
Depth First Search is said to go "deep" because it visits a vertex, then an adjacent vertex, and then that vertex' adjacent vertex, and so on, and in this way the distance from the starting vertex increases for each recursive iteration.
Example:
\`\`\`python
class Graph:
    def __init__(self, size):
        self.adj_matrix = [[0] * size for _ in range(size)]
        self.size = size
        self.vertex_data = [''] * size  
    def add_edge(self, u, v):
        if 0 <= u < self.size and 0 <= v < self.size:
            self.adj_matrix[u][v] = 1
            self.adj_matrix[v][u] = 1
    def add_vertex_data(self, vertex, data):
        if 0 <= vertex < self.size:
            self.vertex_data[vertex] = data
    def print_graph(self):
        print("Adjacency Matrix:")
        for row in self.adj_matrix:
            print(' '.join(map(str, row)))
        print("\\nVertex Data:")
        for vertex, data in enumerate(self.vertex_data):
            print(f"Vertex {vertex}: {data}")
    def dfs_util(self, v, visited):
        visited[v] = True
        print(self.vertex_data[v], end=' ')
        for i in range(self.size):
            if self.adj_matrix[v][i] == 1 and not visited[i]:
                self.dfs_util(i, visited)
    def dfs(self, start_vertex_data):
        visited = [False] * self.size
        start_vertex = self.vertex_data.index(start_vertex_data)
        self.dfs_util(start_vertex, visited)
g = Graph(7)
g.add_vertex_data(0, 'A')
g.add_vertex_data(1, 'B')
g.add_vertex_data(2, 'C')
g.add_vertex_data(3, 'D')
g.add_vertex_data(4, 'E')
g.add_vertex_data(5, 'F')
g.add_vertex_data(6, 'G')
g.add_edge(3, 0)  # D - A
g.add_edge(0, 2)  # A - C
g.add_edge(0, 3)  # A - D
g.add_edge(0, 4)  # A - E
g.add_edge(4, 2)  # E - C
g.add_edge(2, 5)  # C - F
g.add_edge(2, 1)  # C - B
g.add_edge(2, 6)  # C - G
g.add_edge(1, 5)  # B - F
g.print_graph()
print("\\nDepth First Search starting from vertex D:")
g.dfs('D')
\`\`\`
**Breadth First Search Traversal**
Breadth First Search visits all adjacent vertices of a vertex before visiting neighboring vertices to the adjacent vertices. This means that vertices with the same distance from the starting vertex are visited before vertices further away from the starting vertex are visited.
Example:
\`\`\`python
def bfs(self, start_vertex_data):
    queue = [self.vertex_data.index(start_vertex_data)]
    visited = [False] * self.size
    visited[queue[0]] = True
    while queue:
        current_vertex = queue.pop(0)
        print(self.vertex_data[current_vertex], end=' ')
        for i in range(self.size):
            if self.adj_matrix[current_vertex][i] == 1 and not visited[i]:
                queue.append(i)
                visited[i] = True
\`\`\``
        }
    ]
};
