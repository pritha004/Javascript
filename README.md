# Javascript

- ***Dynamically typed language***
    - JavaScript is called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
    - Dynamic typing refers to a feature of some programming languages where variable types are determined at runtime rather than at compile-time. In other words, in dynamically typed languages, we don’t need to specify the type of a variable when we declare it. Instead, the type is assigned based on the value that is currently held by the variable.

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

- ***Logical Operators***
    - || : A chain of OR ( || ) returns the first truthy value or the last one if no truthy value is found.
    - && : AND returns the first falsy value or the last value if none were found.
    - !  : Converts the operand to boolean type and returns the inverse value.
    - ?? : Nullish Coalescing ( ?? ) returns the first argument if it’s not null/undefined. Otherwise, the second one.

- ***Difference between || and ??***
    The important difference between them is that:
    - || returns the first truthy value.
    - ?? returns the first defined value.

        In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.\
        We may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

        ```javascript
            let height = 0;

            alert(height || 100); // 100
            alert(height ?? 100); // 0
        ```
- ***Strict mode***
    - To fully enable all features of modern JavaScript, we should start scripts with "use strict". The directive must be at the top of a script or at the beginning of a function body.

    - Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d generally prefer the modern behavior.

    - Some modern features of the language (like classes) enable strict mode implicitly.

- ***Debugging***
    - “Resume”: continue the execution, hotkey F8
    - “Step”: run the next command, hotkey F9
    - “Step over”: run the next command, but don’t go into a function, hotkey F10.
        Similar to the previous “Step” command, but behaves differently if the next statement is a function call (not a built-in, like alert, but a function of our own).

        If we compare them, the “Step” command goes into a nested function call and pauses the execution at its first line, while “Step over” executes the nested function call invisibly to us, skipping the function internals.
        The execution is then paused immediately after that function call.
    - “Step into”, hotkey F11.
        That’s similar to “Step”, but behaves differently in case of asynchronous function calls. 

        “Step” command ignores async actions, such as setTimeout (scheduled function call), that execute later. The “Step into” goes into their code, waiting for them if necessary.
    - “Step out”: continue the execution till the end of the current   function, hotkey Shift+F11.
        Continue the execution and stop it at the very last line of the current function. That’s handy when we accidentally entered a nested call using , but it does not interest us, and we want to continue to its end as soon as possible.
    - enable/disable all breakpoints.
        That button does not move the execution. Just a mass on/off for breakpoints.

    - enable/disable automatic pause in case of an error.
        When enabled, if the developer tools is open, an error during the script execution automatically pauses it. Then we can analyze variables in the debugger to see what went wrong. So if our script dies with an error, we can open debugger, enable this option and reload the page to see where it dies and what’s the context at that moment.

- ***Transpilers***
    - A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
    E.g. JavaScript before year 2020 didn’t have the “nullish coalescing operator” ??. So, if a visitor uses an outdated browser, it may fail to understand the code like 
    height = height ?? 100.
    A transpiler would analyze our code and rewrite height ?? 100 into (height !== undefined && height !== null) ? height : 100.

        ```javascript
            // before running the transpiler
            height = height ?? 100;

            // after running the transpiler
            height = (height !== undefined && height !== null) ? height : 100;  
        ```

    - Usually, a developer runs the transpiler on their own computer, and then deploys the transpiled code to the server.
    Speaking of names, **Babel** is one of the most prominent transpilers out there.
    Modern project build systems, such as **webpack**, provide a means to run a transpiler automatically on every code change, so it’s very easy to integrate into the development process.

- ***Polyfills***
    - A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.
    In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.
    There’s no need to transpile anything here. We just need to declare the missing function.
    - For this particular case, the polyfill for Math.trunc is a script that implements it, like this:

        ```javascript
            if (!Math.trunc) { // if no such function
            // implement it
            Math.trunc = function(number) {
            // Math.ceil and Math.floor exist even in ancient JavaScript engines
            return number < 0 ? Math.ceil(number) : Math.floor(number);
            };
            }
        ```

- ***Object***
    - Object can be created in two ways: Object Constructor and Object Literal.

        ```javascript
            let user = new Object(); // "object constructor" syntax
            let user = {};  // "object literal" syntax
        ```

    - "in" : Check whether a property name/ key exists in an object. Left side of "in" there must be a property name.

        ```javascript
            let user = { name: "John", age: 30 };

            alert( "age" in user ); // true, user.age exists
            alert( "blabla" in user ); // false, user.blabla doesn't exist
    
            let key = "age";
            alert( key in user ); // true, property "age" exists
        ```

    - Most of the time the comparison with undefined works fine. But   there’s a special case when it fails, but "in" works correctly. It’s when an object property exists, but stores undefined:

        ```javascript
            let obj = {
                test: undefined
            };

            alert( obj.test ); // it's undefined, so - no such property?
            alert( "test" in obj ); // true, the property does exist!
        ```

    - To delete a property: delete obj.prop.

    - To iterate over an object: for (let key in obj) loop.
    - Comparison by reference: Two objects are equal only if they are the same object (reference the same object).
      
      ```javascript
          let a = {};
          let b = a; // copy the reference
          alert( a == b ); // true, both variables reference the same object
          alert( a === b ); // true

          let a = {};
          let b = {}; // two independent objects
          alert( a == b ); // false
      ```
