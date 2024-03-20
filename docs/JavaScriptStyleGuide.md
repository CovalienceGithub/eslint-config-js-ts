### JavaScript Style Guide()

1. [`camelcase`]: _Enforce camelcase naming convention_

```js
// BAD CODE
const my_var = 10;
// GOOD CODE
const myVar = 10;
```

2. [`curly`]: _Enforce consistent brace style for all control statements_

```js
// BAD CODE
if (condition) console.log("Hello");
// GOOD CODE
if (condition) {
  console.log("Hello");
}
```

3. [`default-case`]: _Require default cases in switch statements_

```js
// BAD CODE
switch (foo) {
  case 1:
    // Do something
    break;
}
// GOOD CODE
switch (foo) {
  case 1:
    // Do something
    break;
  default:
  // Do something else
}
```

4. [`default-param-last`]: _Enforce default parameters to be last_

```js
// GOOD CODE
function greet(name = "World", greeting) {
  console.log(`${greeting}, ${name}!`);
}
// BAD CODE
function greet(name = "World", greeting) {
  console.log(`${greeting}, ${name}!`);
}
```

5. [`eqeqeq`]: _Require the use of === and !==_

```js
// BAD CODE
if (x == 10) {
  // Do something
}
// GOOD CODE
if (x === 10) {
  // Do something
}
```

6. [`no-multi-assign`]: _Disallow use of chained assignment expressions_

```js
// BAD CODE
let a = 1,
  b = 2,
  c = 3;
// GOOD CODE
let a = 1;
let b = 2;
let c = 3;
```

7. [`no-console`]:_Disallow the use of console_

```js
// BAD CODE
console.log("Hello");
// GOOD CODE
// Remove out console.log('Hello');
```

8. [`no-use-before-define`]: _Disallow the use of variables before they are defined_

```js
// BAD CODE
console.log(myVar);
const myVar = 10;

// GOOD CODE
const myVar = 10;
console.log(myVar);
```

9. [`no-eval`]: _Disallow the use of eval()_

```js
// BAD CODE
eval('console.log("Hello")');
// GOOD CODE
// Avoid using eval
```

10. [`no-alert`]: _Disallow the use of alert, confirm, and prompt_

```js
// BAD CODE
alert("Hello");
// GOOD CODE
// Don't use it
```

11. [`no-implied-eval`]: _Disallow the use of eval()-like methods_

```js
// BAD CODE
setTimeout("console.log('Hello')", 1000);
// GOOD CODE
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

12. [`no-loop-func`]: _Disallow function declarations that contain unsafe references inside loop statements_

```js
// BAD CODE
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// GOOD CODE
for (let i = 0; i < 5; i++) {
  ((j) => {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}
```

13. [`no-await-in-loop`]: _Disallow await inside of loops_

```js
// BAD CODE
async function fetchData(urls) {
  for (const url of urls) {
    const data = await fetch(url);
    console.log(data);
  }
}
// GOOD CODE
async function fetchData(urls) {
  const promises = urls.map((url) => fetch(url));
  for await (const data of promises) {
    console.log(data);
  }
}
```

14. [`no-constructor-return`]: _Disallow returning value from constructor_

```JS
// BAD CODE
class Example {
  constructor() {
    return 10;
  }
}
// GOOD CODE
class Example {
  constructor() {
    // Do something
  }
}
```

15. [`no-duplicate-imports`]: _Disallow duplicate module imports_

```js
// BAD CODE
import { foo } from "./module";
import { bar } from "./module";
// GOOD CODE
import { foo, bar } from "./module";
```

16. [`no-new-native-nonconstructor`]:_Disallow new operators with global non-constructor functions_

```js
// BAD CODE
const num = new Number(10);
// GOOD CODE
const num = Number(10);
```

17. [`no-promise-executor-return`]: _Disallow returning values from Promise executor functions_

```js
// BAD CODE
new Promise((resolve, reject) => {
  return resolve("foo");
});
// GOOD CODE
new Promise((resolve, reject) => {
  resolve("foo");
});
```

18. [`no-self-compare`]: _Disallow comparisons where both sides are exactly the same_

```js
// BAD CODE
if (x === x) {
  // Do something
}
// GOOD CODE
// Avoid self-comparison
```

19. [`no-unmodified-loop-condition`]: _Disallow unmodified loop conditions_

```js
// BAD CODE
let i = 0;
while (i === 0) {
  // Do something
}
// GOOD CODE
let i = 0;
while (true) {
  if (i !== 0) break;
  // Do something
}
```

20. [`no-unreachable-loop`]: _Disallow loops with a body that allows only one iteration_

```js
// BAD CODE
while (false) {
  // Do something
}
// GOOD CODE
// Remove or comment out unreachable loop
```

21. [`no-unused-private-class-members`]: _Disallow unused private class members_

```js
// BAD CODE
class Example {
  #privateMember = 10;
}
// GOOD CODE
// Use the private member somewhere in the class
class Example {
  #privateMember = 10;
  constructor() {
    console.log(this.#privateMember);
  }
}
```

22. [`prefer-exponentiation-operator`]: _Disallow the use of Math.pow in favor of the \*\* operator_

```js
// BAD CODE
const result = Math.pow(2, 3);
// GOOD CODE
const result = 2 ** 3;
```

23. [`prefer-const`]: _Require const declarations for variables that are never reassigned after declared_

```js
// BAD CODE
let x = 10;
x = 20;
// GOOD CODE
const x = 10;
```

24. [`require-await`]: _Disallow async functions which have no await expression_

```js
// BAD CODE
async function example() {
  return 10;
}
// GOOD CODE
async function example() {
  return await Promise.resolve(10);
}
```

25. [`symbol-description`]: _Require symbol descriptions_

```js
// BAD CODE
const mySymbol = Symbol();
console.log(mySymbol);
// GOOD CODE
const mySymbol = Symbol("description");
console.log(mySymbol);
```

26. [`yoda`]: _Require or disallow "Yoda" conditions_

```js
if (10 == x) {
  // Do something
}

if (x === 10) {
  // Do something
}
```

27. [`vars-on-top`]: _Require var declarations be placed at the top of their containing scope_

```js
// GOOD CODE
function example() {
  console.log(a);
  var a = 10;
}
// BAD CODE
function example() {
  var a = 10;
  console.log(a);
}
```

28. [`prefer-spread`]: _Require spread operators instead of .apply()_

```js
// BAD CODE
const arr = [1, 2, 3];
const copy = [].concat(arr);
// GOOD CODE
const arr = [1, 2, 3];
const copy = [...arr];
```

29. [`prefer-rest-params`]: _Require rest parameters instead of arguments_

```js
// BAD CODE
function example() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}
// GOOD CODE
function example(...args) {
  console.log(args);
}
```

30. [`prefer-promise-reject-errors`]: _Require using Error objects as Promise rejection reasons_

```js
// BAD CODE
new Promise((resolve, reject) => {
  reject("error");
});
// GOOD CODE
new Promise((resolve, reject) => {
  reject(new Error("error"));
});
```

31. [`prefer-destructuring`]: _Require destructuring from arrays and/or objects_

```js
// BAD CODE
const arr = [1, 2, 3];
const first = arr[0];
const second = arr[1];
// GOOD CODE
const arr = [1, 2, 3];
const [first, second] = arr;
```

32. [`prefer-arrow-callback`]: _Require using arrow functions for callbacks_

```js
// BAD CODE
function example() {
  return function () {
    // Do something
  };
}
// GOOD CODE
const example = () => {
  // Do something
};
```

33. [`operator-assignment`]: _Require or disallow assignment operator shorthand where possible_

```js
// BAD CODE
x = x + 1;
// GOOD CODE
x += 1;
```

34. [`no-void`]: _Disallow void operators_

```js
// BAD CODE
void 0;
// GOOD CODE
// Avoid using void operator
```

35. [`no-useless-return`]: _Disallow redundant return statements_

```js
// BAD CODE
function example() {
  return;
}
// GOOD CODE
function example() {
  // Do something
}
```

36. [`no-unneeded-ternary`]: _Disallow ternary operators when simpler alternatives exist_

```js
// BAD CODE
const result = condition ? true : false;
// GOOD CODE
const result = condition;
```

37. [`no-undefined`]: _Disallow the use of undefined as an identifier_

```js
// BAD CODE
if (typeof x === "undefined") {
  // Do something
}
// GOOD CODE
if (x === undefined) {
  // Do something
}
```

38. [`no-undef-init`]: _Disallow initializing variables to undefined_

```js
// GOOD CODE
let x = undefined;
// BAD CODE
let x;
```

49. [`no-var`]: _Require let or const instead of var_

```js
// BAD CODE
var x = 10;
// GOOD CODE
let x = 10;
```

40. [`no-useless-constructor`]: _Disallow unnecessary constructors_

```js
// GOOD CODE
class Example {
  constructor() {}
}
// BAD CODE
class Example {}
```
