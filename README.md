# Javascript

- ***Dynamically typed language?***\
JavaScript is called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.\
Dynamic typing refers to a feature of some programming languages where variable types are determined at runtime rather than at compile-time. In other words, in dynamically typed languages, we don’t need to specify the type of a variable when we declare it. Instead, the type is assigned based on the value that is currently held by the variable.

```javascript
let example = 42;   // Here, 'example' is assigned a number
example = "Hello";  // Now, 'example' holds a string
```
- ***8 Data Types***
    1. Number: Represents both integer and floating point numbers.
    2. BigInt: A BigInt value is created by appending n to the end of an integer.
    3. String
    4. Boolean: true and false
    5. null: Special value which represents “nothing”, “empty” or “value unknown”.
    6. undefined: Special value which represents “value is not assigned”.
    7. Objects
    8. Symbols: The symbol type is used to create unique identifiers for objects.

- ***Type Conversion***
    - String Conversion: String(value)
    - Numeric Conversion: Number(value)

        | Value | Becomes |
        |----------|----------|
        | undefined  | NaN   |
        | null   | 0   |
        | true/false   | 1/0  |
        | ""| 0 |
        |string|NaN|
    - Boolean Conversion: Boolean(value)

        | Value | Becomes |
        |----------|----------|
        | 0, null, undefined, NaN, ""  | false  |
        | any other value   | true |