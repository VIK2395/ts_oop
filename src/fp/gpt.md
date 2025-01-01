Functional programming (FP) is a programming paradigm centered around treating computation as the evaluation of mathematical functions and avoiding changes in state or mutable data. Here are the **key principles** of functional programming:

---

### 1. **First-Class and Higher-Order Functions**
   - **First-Class Functions**: Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
   - **Higher-Order Functions**: Functions can accept other functions as arguments or return functions as results.
     ```python
     def apply_function(func, value):
         return func(value)

     def square(x):
         return x * x

     print(apply_function(square, 5))  # Output: 25
     ```

---

### 2. **Pure Functions**
   - A **pure function** is a function where:
     1. The output depends only on its input arguments.
     2. It has no side effects (e.g., it does not modify global variables, mutate arguments, or perform I/O operations).
   - Benefits:
     - Easier to test and debug.
     - Promotes predictability and referential transparency.
     ```python
     def add(x, y):
         return x + y  # Pure function: always produces the same output for the same input.
     ```

---

### 3. **Immutability**
   - Data should not be modified after it is created. Instead of changing existing data, FP relies on creating new copies with the desired changes.
   - Benefits:
     - Avoids unintended side effects.
     - Simplifies reasoning about the program.
     ```python
     # Example without mutating
     original_list = [1, 2, 3]
     new_list = original_list + [4]
     print(new_list)  # Output: [1, 2, 3, 4]
     print(original_list)  # Output: [1, 2, 3]
     ```

---

### 4. **Referential Transparency**
   - An expression is referentially transparent if it can be replaced with its value without changing the program's behavior.
     ```python
     # Referentially transparent
     result = 2 + 3  # Can be replaced with 5 without changing the program's behavior.
     ```

---

### 5. **Higher-Order Abstractions**
   - FP promotes the use of higher-order functions like `map`, `filter`, and `reduce` to operate on data structures instead of explicit loops.
     ```python
     numbers = [1, 2, 3, 4]

     # Map: Apply a function to each element.
     squares = list(map(lambda x: x ** 2, numbers))

     # Filter: Select elements that satisfy a condition.
     evens = list(filter(lambda x: x % 2 == 0, numbers))

     # Reduce: Aggregate elements using a function.
     from functools import reduce
     sum_of_numbers = reduce(lambda x, y: x + y, numbers)

     print(squares)  # Output: [1, 4, 9, 16]
     print(evens)    # Output: [2, 4]
     print(sum_of_numbers)  # Output: 10
     ```

---

### 6. **Function Composition**
   - Combining simple functions to build more complex ones. This encourages modularity and code reuse.
     ```python
     def double(x):
         return x * 2

     def increment(x):
         return x + 1

     def double_and_increment(x):
         return increment(double(x))

     print(double_and_increment(3))  # Output: 7
     ```

---

### 7. **Recursion Over Iteration**
   - Recursion is preferred over explicit loops for repetitive tasks.
     ```python
     # Recursive factorial
     def factorial(n):
         return 1 if n == 0 else n * factorial(n - 1)

     print(factorial(5))  # Output: 120
     ```

---

### 8. **Lazy Evaluation**
   - Computations are deferred until their results are needed, often used in conjunction with infinite data structures or performance optimizations.
     ```python
     def generate_numbers():
         for i in range(1, 10):
             yield i * i

     squares = generate_numbers()  # No computation yet
     print(next(squares))  # Output: 1 (computation happens here)
     print(next(squares))  # Output: 4
     ```

---

### 9. **No Side Effects**
   - Avoid modifying global state or interacting with the outside world (e.g., printing, reading files) inside pure functions. Such effects are isolated.
     ```python
     # Non-functional approach (has side effects)
     x = 0
     def increment():
         global x
         x += 1

     # Functional approach (no side effects)
     def increment_functional(y):
         return y + 1
     ```

---

### 10. **Declarative Programming**
   - Functional programming emphasizes "what to do" rather than "how to do it."
     ```python
     # Imperative approach
     result = []
     for x in range(10):
         if x % 2 == 0:
             result.append(x)

     # Functional (declarative) approach
     result = list(filter(lambda x: x % 2 == 0, range(10)))
     ```

---

### Benefits of Functional Programming:
- **Modularity**: Code is more reusable and composable.
- **Predictability**: Pure functions and immutability reduce bugs.
- **Parallelism**: Easier to parallelize due to lack of side effects.
- **Readability**: Code is more expressive and concise.
