export const pythonContent = {
  name: "Python",
  description: "Learn Python - A versatile programming language",
  lessons: [
    {
      id: 1, title: "Python Introduction", icon: "🐍", content: `1.1What is Python?
Python is a:
- **High-level programming language**
- **Interpreted language**
- **General-purpose language**
- **Object-oriented language**
- **Dynamically typed language**
Python was created by Guido van Rossum and first released in 1991.
Python was designed with the philosophy of:
- **Code readability**
- **Simplicity**
- **Rapid development**
- **Fewer lines of code**
- **Clear syntax**
Python is widely used in:
- **Web development**
- **Artificial Intelligence**
- **Data Science**
- **Automation**
- **Game development**
- **Cybersecurity**
1.2How Python Works Internally
When you write:
\`\`\`
print("Hello")
\`\`\`
Internally, Python performs the following steps:
1. The source code is converted into **bytecode**.
2. Bytecode is executed by the **Python Virtual Machine (PVM)**.
3. The result is displayed as output.
**Important Note**:
Python is not purely interpreted. It first compiles code into bytecode and then executes it using the PVM.
1.3Python vs Other Programming Languages
|||Feature|Python|C|Java
Syntax|**Simple**|Complex|Moderate
Typing|**Dynamic**|Static|Static
Compilation|**Interpreted + Bytecode**|Compiled|Compiled + JVM
Development Speed|**Fast**|Slower|Moderate
Memory Management|**Automatic**|Manual|Automatic|||
Python focuses more on productivity and readability rather than low-level memory control.
1.4Writing Your First Programs
Example 1: Basic Output
\`\`\`
print("Welcome to Python Learning Platform")
\`\`\`
Example 2: Multiple Print Statements
\`\`\`
print("Name: Rahul")
print("Age: 20")
print("Course: Python")
\`\`\`
Example 3: Using Separator
\`\`\`
print("2026", "03", "01", sep="-")
\`\`\`
Output:
\`\`\`
2026-03-01
\`\`\`
Example 4: Taking User Input
\`\`\`
name = input("Enter your name: ")
print("Hello", name)
\`\`\`
Example 5: Simple Calculator Program
\`\`\`
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
sum = a + b
print("Sum =", sum)
\`\`\`
` },
    {
      id: 2, title: "Python Variables", icon: "📥", content: `2.1Introduction to Variables
A variable is a symbolic name that refers to an object stored in memory.
In Python:
- Variables do not directly store values.
- They reference objects.
- Type is determined at runtime.
- No need for explicit declaration.
Example:
\`\`\`
x = 10
name = "Rahul"
\`\`\`
2.2How Variables Work Internally
When you write:
\`\`\`
x = 10
\`\`\`
Python:
1. Creates an integer object 10.
2. Allocates memory.
3. Assigns reference of that object to variable **x**.
If you write:
\`\`\`
y = x
\`\`\`
Both **x** and **y** refer to the same object in memory.
2.3Dynamic Typing
Python allows changing the type of variable during execution.
\`\`\`
x = 10
x = "Hello"
\`\`\`
**Advantages**:
- Faster development
- Less code
**Disadvantage**:
- Type-related errors may occur if not careful.
2.4Object Identity and Memory
You can check memory address using **id()**:
\`\`\`
x = 10
print(id(x))
\`\`\`
Python uses **Reference counting** and **Garbage collection** to manage memory automatically.
2.5Variable Naming Rules
**Valid**:
- Must start with letter or underscore
- Case-sensitive
- Cannot use keywords
**Valid Examples**:
- student_name
- _count
- totalMarks
**Invalid Examples**:
- 1name
- class
- for
2.6Types of Variable Assignment
Single Assignment
\`\`\`
x = 5
\`\`\`
Multiple Assignment
\`\`\`
x, y, z = 1, 2, 3
\`\`\`
Same Value Assignment
\`\`\`
a = b = c = 100
\`\`\`
Swapping Variables
\`\`\`
x = 5
y = 10
x, y = y, x
\`\`\`
2.7Variable Scope
Local Scope: Declared inside a function.
Global Scope: Declared outside functions.
Example:
\`\`\`
x = 10  # Global
def show():
    x = 5   # Local
    print("Inside:", x)
show()
print("Outside:", x)
\`\`\`
2.8Constants in Python
Python does not enforce constants but by convention:
\`\`\`
PI = 3.14
GRAVITY = 9.8
\`\`\`
Constants are written in uppercase.
2.9Best Practices
- Use meaningful variable names
- Follow **snake_case**
- Avoid unnecessary global variables
- Keep naming consistent
` },
    {
      id: 3, title: "Python Data Types", icon: "📄", content: `3.1Introduction
A data type defines:
- Type of value
- Memory usage
- Supported operations
Python automatically determines data type during execution.
3.2Numeric Data Types
Integer (**int**)
\`\`\`
a = 100
b = -50
print(type(a))
\`\`\`
Python supports unlimited integer precision.
Float
\`\`\`
pi = 3.14159
print(round(pi, 2))
\`\`\`
Complex
\`\`\`
z = 2 + 3j
print(z.real)
print(z.imag)
\`\`\`
3.3Boolean Type
\`\`\`
x = True
y = False
print(10 > 5)
print(5 > 10)
\`\`\`
Used in Conditions, Comparisons, and Loops.
3.4Strings
Strings are Ordered, Immutable, and Indexed.
Indexing
\`\`\`
name = "Python"
print(name[0])
print(name[-1])
\`\`\`
Slicing
\`\`\`
text = "Programming"
print(text[0:6])
print(text[:4])
print(text[4:])
\`\`\`
Methods
\`\`\`
name = "python"
print(name.upper())
print(name.capitalize())
print(name.replace("p", "P"))
print(name.count("o"))
\`\`\`
f-String Formatting
\`\`\`
name = "Rahul"
age = 20
print(f"My name is {name} and I am {age} years old.")
\`\`\`
3.5Lists
Lists are Mutable, Ordered, and Allow duplicates.
\`\`\`
numbers = [1, 2, 3, 4]
\`\`\`
Access & Modify
\`\`\`
print(numbers[0])
numbers[0] = 10
\`\`\`
Methods
\`\`\`
numbers.append(5)
numbers.insert(1, 20)
numbers.remove(3)
numbers.pop()
numbers.sort()
numbers.reverse()
\`\`\`
List Comprehension
\`\`\`
squares = [x*x for x in range(5)]
\`\`\`
3.6Tuples
Tuples are **immutable** sequences.
\`\`\`
t = (1, 2, 3)
print(t[0])
\`\`\`
Used when data should not change.
3.7Sets
Sets store unique values.
\`\`\`
s = {1, 2, 3, 3}
print(s)
\`\`\`
Set Operations
\`\`\`
a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))
print(a.intersection(b))
\`\`\`
3.8Dictionaries
Store key-value pairs.
\`\`\`
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}
\`\`\`
Access & Modify
\`\`\`
print(student["name"])
student["age"] = 21
\`\`\`
Looping
\`\`\`
for key, value in student.items():
    print(key, value)
\`\`\`
3.9Type Conversion
Implicit Conversion – **Automatic**
Explicit Conversion – Using: **int()**, **float()**, **str()**, **list()**, **tuple()**.
` },
    {
      id: 4, title: "Python Functions", icon: "🛠️", content: `4.1Introduction
A function is a reusable block of code designed to perform a specific task.
**Benefits**:
- Code reuse
- Modularity
- Reduced repetition
- Easier debugging
4.2Types of Functions
Built-in Functions: **print()**, **len()**, **type()**, **input()**.
User-Defined Functions
\`\`\`
def greet():
    print("Hello Student")
\`\`\`
4.3Parameters and Arguments
Positional
\`\`\`
def add(a, b):
    return a + b
\`\`\`
Keyword
\`\`\`
add(b=5, a=10)
\`\`\`
Default
\`\`\`
def greet(name="Student"):
    print(name)
\`\`\`
Variable-Length
\`\`\`
def add(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total
\`\`\`
4.4Return Statement
Functions return values using **return**.
If no return is written, Python returns **None**.
4.5Scope (LEGB Rule)
**Local**, **Enclosing**, **Global**, **Built-in**.
Determines how variables are searched.
4.6Recursion
Function calling itself.
\`\`\`
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)
\`\`\`
Must have a **Base case** and a **Recursive case**.
4.7Lambda Functions
\`\`\`
square = lambda x: x * x
\`\`\`
Used for small anonymous functions.
` },
    {
      id: 5, title: "Python Loops", icon: "🔄", content: `5.1Introduction
Loops repeat code automatically. They reduce redundancy and improve efficiency.
5.2for Loop
Used when iterations are known.
\`\`\`
for i in range(1, 11):
    print(i)
\`\`\`
5.3while Loop
Used when condition-based repetition is required.
\`\`\`
i = 2
while i <= 10:
    print(i)
    i += 2
\`\`\`
5.4Loop Control Statements
**break**: Stops loop.
**continue**: Skips current iteration.
**pass**: Placeholder statement.
5.5Nested Loops
\`\`\`
for i in range(5):
    for j in range(i+1):
        print("*", end="")
    print()
\`\`\`
5.6Prime Number Example
\`\`\`
num = 7
flag = True
for i in range(2, num):
    if num % i == 0:
        flag = False
        break
if flag:
    print("Prime")
else:
    print("Not Prime")
\`\`\`
5.7Loop Efficiency
**Important concepts**:
- Time complexity
- Avoid unnecessary nested loops
- Use break when possible
- Prefer list comprehension when suitable
` },
  ]
};
