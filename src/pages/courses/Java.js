export const javaContent = {
  name: "Java",
  description: "Learn Java - An object-oriented programming language",
  lessons: [
    {
      id: 1, title: "Java Introduction", icon: "☕", content: `1.1 What is Java?
Java is a popular and powerful programming language, created in 1995.
It is owned by Oracle, and more than 3 billion devices run Java.
It is used for:
Mobile applications (especially Android apps)
Desktop applications
Web applications
Web servers and application servers
Games
Database connection
And much, much more!
1.2 Why Use Java?
Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
It is one of the most popular programming languages in the world
It has a large demand in the current job market
It is easy to learn and simple to use
It is open-source and free
It is secure, fast and powerful
It has huge community support (tens of millions of developers)
Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs
As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa
**Java Example**
\`\`\`
public class Main {
  public static void main(String[] args) {
    String name = "John";
    System.out.println("Hello " + name);
  }
}
\`\`\`
1.3 Java Syntax
In the previous chapter, we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:
\`\`\`
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
\`\`\`
1.4 Java Statements
A computer program is a list of "instructions" to be "executed" by a computer.
In a programming language, these programming instructions are called statements.
The following statement "instructs" the compiler to print the text "Java is fun!" to the screen.
Example:
\`\`\`
System.out.println("Java is fun!");
\`\`\`
` },
    {
      id: 2, title: "Java Variables", icon: "💾", content: `2.1 Java Variables
Variables are containers for storing data values.
In Java, there are different types of variables, for example:
String - stores text, such as "Hello". String values are surrounded by double quotes
int - stores integers (whole numbers), without decimals, such as 123 or -123
float - stores floating point numbers, with decimals, such as 19.99 or -19.99
char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
boolean - stores values with two states: true or false
2.2 Declaring (Creating) Variables
To create a variable in Java, you need to:
Choose a type (like int or String)
Give the variable a name (like x, age, or name)
Optionally assign it a value using =
Syntax:
\`\`\`
type variableName = value;
\`\`\`
Example
Create a variable called name of type String and assign it the value "John".
Then we use println() to print the name variable:
\`\`\`
String name = "John";
System.out.println(name);
\`\`\`
2.3 Display Variables
The println() method is often used to display variables.
To combine both text and a variable, use the + character:
Example:
\`\`\`
String name = "John";
System.out.println("Hello " + name);
\`\`\`
2.4 Multiple Variables
To declare more than one variable of the same type, you can use a comma-separated list.
example:
\`\`\`
int x = 5;
int y = 6;
int z = 50;
System.out.println(x + y + z); // 61
\`\`\`
2.5 Java Identifiers
All Java variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
Example:
\`\`\`
int minutesPerHour = 60;
int m = 60;
\`\`\`
2.6 Constants (final keyword)
When you do not want a variable's value to change, use the final keyword.
A variable declared with final becomes a constant, which means unchangeable and read-only.
Example:
\`\`\`
final int myNum = 15;
myNum = 20;
\`\`\`
When to Use final?
You should declare variables as final when their values should never change. For example, the number of minutes in an hour, or your birth year:
` },
    {
      id: 3, title: "Java Data Types", icon: "📊", content: `3.1Java Data Types
Data types are divided into two groups:
**Primitive data types** - includes byte, short, int, long, float, double, boolean and char
**Non-primitive data types** - such as String, Arrays and Classes (you will learn more about these in a later chapter)
Primitive Data Types
A primitive data type specifies the type of a variable and the kind of values it can hold.
There are eight primitive data types in Java:
|||Data Type|Description
byte|Stores whole numbers from -128 to 127
short|Stores whole numbers from -32,768 to 32,767
int|Stores whole numbers from -2,147,483,648 to 2,147,483,647
long|Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
float|Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
double|Stores fractional numbers. Sufficient for storing 15 to 16 decimal digits
boolean|Stores true or false values
char|Stores a single character/letter or ASCII values|||
3.2Java Numbers
Primitive number types are divided into two groups:
**Integer types** stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are byte, short, int and long. Which type you should use, depends on the numeric value.
**Floating point types** represents numbers with a fractional part, containing one or more decimals. There are two types: float and double.
Integer Types
Byte
The byte data type can store whole numbers from -128 to 127. This can be used instead of int or other integer types to save memory when you are certain that the value will be within -128 and 127:
Example:\`\`\`
byte myNum = 100;
System.out.println(myNum);
\`\`\`
Short
The short data type can store whole numbers from -32768 to 32767:
Example:\`\`\`
short myNum = 5000;
System.out.println(myNum);
\`\`\`
Int
The int data type can store whole numbers from -2147483648 to 2147483647. In general, the int data type is the preferred data type when we create variables with a numeric value.
Example:\`\`\`
int myNum = 100000;
System.out.println(myNum);
\`\`\`
Long
The long data type can store whole numbers from -9223372036854775808 to 9223372036854775807. This is used when int is not large enough to store the value. Note that you should end the value with an "L":
Example:\`\`\`
long myNum = 15000000000L;
System.out.println(myNum);
\`\`\`
3.3Java Boolean
For this, Java has a boolean data type, which can only take the values true or false.
Example:\`\`\`
boolean isJavaFun = true;
boolean isFishTasty = false;
System.out.println(isJavaFun);    
System.out.println(isFishTasty); 
\`\`\`
3.4Java Characters
Characters
The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c'
Example:\`\`\`
char myGrade = 'B';
System.out.println(myGrade);
\`\`\`
Strings
The String data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:
Example:\`\`\`
String greeting = "Hello World";
System.out.println(greeting);
\`\`\`
3.5Non-Primitive Data Types
Non-primitive data types are called reference types because they refer to objects.
The main differences between primitive and non-primitive data types are:
- Primitive types in Java are predefined and built into the language, while non-primitive types are created by the programmer (except for String).
- Non-primitive types can be used to call methods to perform certain operations, whereas primitive types cannot.
- Primitive types start with a lowercase letter (like int), while non-primitive types typically starts with an uppercase letter (like String).
- Primitive types always hold a value, whereas non-primitive types can be null.
` },
    {
      id: 4, title: "Java Methods", icon: "⚙️", content: `4.1Java Methods
A method is a block of code which only runs when it is called.
You can pass data, known as parameters, into a method.
Methods are used to perform certain actions, and they are also known as functions.
Why use methods? To reuse code: define the code once, and use it many times.
Create a Method:
A method must be declared within a class. It is defined with the name of the method, followed by parentheses (). Java provides some pre-defined methods, such as System.out.println(), but you can also create your own methods to perform certain actions.
Example: Create a method inside Main:\`\`\`
public class Main {
  static void myMethod() {
    // code to be executed
  }
}
\`\`\`
Call a Method:
To call a method in Java, write the method's name followed by two parentheses () and a semicolon;
In the following example, myMethod() is used to print a text (the action), when it is called.
Example: Inside main, call the myMethod() method:\`\`\`
public class Main {
  static void myMethod() {
    System.out.println("I just got executed!");
  }
  public static void main(String[] args) {
    myMethod();
  }
}
\`\`\`
4.2Java Method Parameters
Parameters and Arguments
Information can be passed to methods as a parameter. Parameters act as variables inside the method.
Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.
The following example has a method that takes a String called fname as parameter. When the method is called, we pass along a first name, which is used inside the method to print the full name.
Example:\`\`\`
public class Main {
  static void myMethod(String fname) {
    System.out.println(fname + " Refsnes");
  }
  public static void main(String[] args) {
    myMethod("Liam");
    myMethod("Jenny");
    myMethod("Anja");
  }
}
\`\`\`
Multiple Parameters
You can have as many parameters as you like.
Example:\`\`\`
public class Main {
  static void myMethod(String fname, int age) {
    System.out.println(fname + " is " + age);
  }
  public static void main(String[] args) {
    myMethod("Liam", 5);
    myMethod("Jenny", 8);
    myMethod("Anja", 31);
  }
}
\`\`\`
4.3Java Method Overloading
Method Overloading
With method overloading, multiple methods can have the same name with different parameters.
Example:\`\`\`
static int plusMethodInt(int x, int y) {
  return x + y;
}
static double plusMethodDouble(double x, double y) {
  return x + y;
}
public static void main(String[] args) {
  int myNum1 = plusMethodInt(8, 5);
  double myNum2 = plusMethodDouble(4.3, 6.26);
  System.out.println("int: " + myNum1);
  System.out.println("double: " + myNum2);
}
\`\`\`
4.4Java Recursion
Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simpler problems which are easier to solve.
Recursion may be a bit difficult to understand. The best way to figure out how it works is to experiment with it.
Recursion Example
Adding two numbers together is easy to do, but adding a range of numbers is more complicated. In the following example, recursion is used to add a range of numbers together by breaking it down into the simple task of adding two numbers:
Example: Use recursion to add all numbers from 1 to 10:\`\`\`
public class Main {
  public static int sum(int k) {
    if (k > 0) {
      return k + sum(k - 1);
    } else {
      return 0;
    }
  }
  public static void main(String[] args) {
    int result = sum(10);
    System.out.println(result);
  }
}
\`\`\`
` },
    {
      id: 5, title: "Java Classes", icon: "🏛️", content: `5.1Java Classes and Objects
Java Classes/Objects
Java is an object-oriented programming language.
Everything in Java is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has attributes, such as weight and color, and methods, such as drive and brake.
A Class is like an object constructor, or a "blueprint" for creating objects.
Create a Class
To create a class, use the keyword class.
In this example, we create a class named "Main" with a variable x.
Example:Main.java\`\`\`
public class Main {
  int x = 5;
}
\`\`\`
Create an Object
In Java, an object is created from a class. We have already created the class named Main, so now we can use this to create objects.
To create an object of Main, specify the class name, followed by the object name, and use the keyword new.
Example: Create an object called "myObj" and print the value of x:\`\`\`
public class Main {
  int x = 5;
  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
\`\`\`
Multiple Objects
You can create multiple objects of one class.
Example: Create two objects of Main:\`\`\`
public class Main {
  int x = 5;
  public static void main(String[] args) {
    Main myObj1 = new Main();  // Object 1
    Main myObj2 = new Main();  // Object 2
    System.out.println(myObj1.x);
    System.out.println(myObj2.x);
  }
}
\`\`\`
Using Multiple Classes
You can also create an object of a class and access it in another class. This is often used for better organization of classes (one class has all the attributes and methods, while the other class holds the main() method (code to be executed)).
Remember that the name of the java file should match the class name. In this example, we have created two files in the same directory/folder.
Example:Main.java\`\`\`
public class Main {
  int x = 5;
}
\`\`\`
Example:Second.java\`\`\`
class Second {
  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
\`\`\`
5.2Java Class Attributes
In the previous chapter, we used the term "variable" for x in the example (as shown below).
In Java, variables declared inside a class are called "attributes".
You can also say that attributes are variables that belong to a class.
Accessing Attributes
You can access attributes by creating an object of the class, and by using the dot syntax (.):
The following example will create an object of the Main class, with the name myObj. We use the x attribute on the object to print its value.
Example: Create an object called "myObj" and print the value of x:\`\`\`
public class Main {
  int x = 5;
  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
\`\`\`
5.3Java Class Methods
You learned from the Java Methods chapter that methods are declared within a class, and that they are used to perform certain actions:
Create a method named myMethod() in Main:
Example:\`\`\`
public class Main {
  static void myMethod() {
    System.out.println("Hello World!");
  }
}
\`\`\`
Inside main, call myMethod():
Example:\`\`\`
public class Main {
  static void myMethod() {
    System.out.println("Hello World!");
  }
  public static void main(String[] args) {
    myMethod();
  }
}
\`\`\`
Access Methods With an Object
Example: Create a Car object named myCar. Call the fullThrottle() and speed() methods on the myCar object, and run the program:\`\`\`
// Create a Main class
public class Main {
  // Create a fullThrottle() method
  public void fullThrottle() {
    System.out.println("The car is going as fast as it can!");
  }
  // Create a speed() method and add a parameter
  public void speed(int maxSpeed) {
    System.out.println("Max speed is: " + maxSpeed);
  }
  // Inside main, call the methods on the myCar object
  public static void main(String[] args) {
    Main myCar = new Main();   // Create a myCar object
    myCar.fullThrottle();      // Call the fullThrottle() method
    myCar.speed(200);          // Call the speed() method
  }
}
\`\`\`
5.4Java Inheritance (Subclass and Superclass)
In Java, it is possible to inherit attributes and methods from one class to another. We group the "inheritance concept" into two categories:
**subclass (child)** - the class that inherits from another class
**superclass (parent)** - the class being inherited from
To inherit from a class, use the extends keyword.
In the example below, the Car class (subclass) inherits the attributes and methods from the Vehicle class (superclass):
Example:\`\`\`
class Vehicle {
  protected String brand = "Ford";        // Vehicle attribute
  public void honk() {                    // Vehicle method
    System.out.println("Tuut, tuut!");
  }
}
class Car extends Vehicle {
  private String modelName = "Mustang";    // Car attribute
  public static void main(String[] args) {
    // Create a myCar object
    Car myCar = new Car();
    // Call the honk() method (from the Vehicle class) on the myCar object
    myCar.honk();
    // Display the value of the brand attribute (from the Vehicle class) and the value of the modelName from the Car class
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}
\`\`\`
5.5Java Constructors
A constructor in Java is a special method that is used to initialize objects.
The constructor is called when an object of a class is created.
It can be used to set initial values for object attributes:
Example: Create a constructor:\`\`\`
// Create a Main class
public class Main {
  int x;  // Create a class attribute
  // Create a class constructor for the Main class
  public Main() {
    x = 5;  // Set the initial value for the class attribute x
  }
  public static void main(String[] args) {
    Main myObj = new Main(); // Create an object of class Main (This will call the constructor)
    System.out.println(myObj.x); // Print the value of x
  }
}
\`\`\`
` },
  ]
};
