## Typescript Style Guide()

1. [`@typescript-eslint/prefer-for-of`]: _Enforce the use of for-of loop over the standard for loop where possible._

```typescript
// BAD CODE
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// GOOD CODE
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item);
}
```

2. [`@typescript-eslint/adjacent-overload-signatures`]: _Require that function overload signatures be consecutive._

```typescript
// BAD CODE
class Example {
  method(x: number): void;
  method(x: string): void;
  method(x: any): void {}
}
// GOOD CODE
class Example {
  method(x: number | string): void {}
}
```

3. [`@typescript-eslint/non-nullable-type-assertion-style`]: _Enforce non-null assertions over explicit type casts_

```typescript
// BAD CODE
const num: number = 10!;
// GOOD CODE
const num: number = 10 as number;
```

4. [`@typescript-eslint/no-empty-function`]: _Disallow empty functions._

```typescript
// BAD CODE
function example() {}
// Add some logic inside the function
function example() {
  console.log("example");
  // Do something
}
```

5. [`@typescript-eslint/array-type`]: _Require consistently using either T[] or Array<T> for arrays._

```typescript
// BAD CODE
const arr: Array<number> = [1, 2, 3];
// GOOD CODE
const arr: number[] = [1, 2, 3];
```

6. [`@typescript-eslint/no-confusing-non-null-assertion`]: _Disallow non-null assertion in locations that may be confusing._

```typescript
// BAD CODE
interface Foo {
  bar?: string;
  num?: number;
}

const foo: Foo = getFoo();
const isEqualsBar = foo.bar! == "hello";
const isEqualsNum = 1 + foo.num! == 2;
// GOOD CODE
interface Foo {
  bar?: string;
  num?: number;
}

const foo: Foo = getFoo();
const isEqualsBar = foo.bar == "hello";
const isEqualsNum = 1 + foo.num! == 2;
```

7. [`@typescript-eslint/no-empty-interface`]

```typescript
// BAD CODE
interface Empty {}
// GOOD CODE
// Add some properties/methods inside the interface
interface NotEmpty {
  prop: string;
}
```

8. [`@typescript-eslint/prefer-nullish-coalescing`]: _Enforce using the nullish coalescing operator instead of logical assignments or chaining._

```typescript
// BAD CODE
const value =
  something !== null && something !== undefined ? something : "default";

// GOOD CODE
const value = something ?? "default";
```

9. [`@typescript-eslint/prefer-optional-chain`]: _Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects._

```typescript
// BAD CODE
const result = obj && obj.prop && obj.prop.subprop;
// GOOD CODE
const result = obj?.prop?.subprop;
```

10. [`@typescript-eslint/unified-signatures`]: _Disallow two overloads that could be unified into one with a union or an optional/rest parameter._

```typescript
// BAD CODE
class Example {
  method(x: string): void;
  method(x: number): void;
  method(x: any): void {}
}
// GOOD CODE
class Example {
  method(x: string | number): void {}
}
```

11. [`@typescript-eslint/prefer-literal-enum-member`]: _Require all enum members to be literal values._

```typescript
// BAD CODE
const str = "Test";
enum Invalid {
  A = str, // Variable assignment
  B = {}, // Object assignment
  C = `A template literal string`, // Template literal
  D = new Set(1, 2, 3), // Constructor in assignment
  E = 2 + 2, // Expression assignment
}
// GOOD CODE
enum Valid {
  A,
  B = "TestStr", // A regular string
  C = 4, // A number
  D = null,
  E = /some_regex/,
}
```

12. [`@typescript-eslint/no-useless-template-literals`]: _Disallow unnecessary template literals._

```typescript
// BAD CODE
const ab1 = `${"a"}${"b"}`;
// GOOD CODE
const ab1 = "ab";
```

13. [`@typescript-eslint/no-throw-literal`]: _Disallow throwing literals as exceptions._

```typescript
// BAD CODE
throw "error";
// GOOD CODE
throw new Error("error");
```

14. [`@typescript-eslint/no-dynamic-delete`]: _Disallow using the delete operator on computed key expressions._

```typescript
// BAD CODE
delete obj[prop];
// GOOD CODE
// Avoid dynamic delete
```

15. [@typescript-eslint/no-array-delete]: _Disallow using the delete operator on array values._

```typescript
// BAD CODE
const arr = [1, 2, 3];
delete arr[0];
// GOOD CODE
arr.splice(0, 1);
```

16. [`@typescript-eslint/no-confusing-void-expression`]: _Require expressions of type void to appear in statement position._

```typescript
// BAD CODE
const result = void func();
// GOOD CODE
// Avoid confusing void expression
```

17. [`@typescript-eslint/no-invalid-void-type`]: _Disallow void type outside of generic or return types._

```typescript
// BAD CODE
const num: void = 10;
// GOOD CODE
// Avoid using void as a type
```

18. [`@typescript-eslint/no-meaningless-void-operator`]: _Disallow the void operator except when used to discard a value._

```typescript
// BAD CODE
const result = !!void value;
// GOOD CODE
// Avoid using meaningless void operator
```

19. [`@typescript-eslint/no-unnecessary-boolean-literal-compare`]: _Disallow unnecessary equality comparisons against boolean literals._

```typescript
// BAD CODE
const flag: boolean = true;
if (flag === true) {
  // Do something
}
// GOOD CODE
const flag: boolean = true;
if (flag) {
  // Do something
}
```

21. [`@typescript-eslint/no-unnecessary-condition`]: _Disallow conditionals where the type is always truthy or always falsy._

```typescript
// BAD CODE
if (value !== null || value !== undefined) {
  // Do something
}
// GOOD CODE
if (value) {
  // Do something
}
```

22. [`@typescript-eslint/no-mixed-enums`]: _Disallow enums from having both number and string members._

```typescript
// BAD CODE
enum Direction {
  Up = "UP",
  Down = 1,
}
// GOOD CODE
enum Direction {
  Up = "UP",
  Down = "DOWN",
}
```

23. [`@typescript-eslint/explicit-function-return-type`]: _Require explicit return types on functions and class methods._

```typescript
// BAD CODE
function greet(name: string) {
  console.log("Hello, " + name);
}
// GOOD CODE
function greet(name: string): void {
  console.log("Hello, " + name);
}
```

24. [`@typescript-eslint/no-magic-numbers`]: _Disallow magic numbers._

```typescript
// BAD CODE
function multiply(x: number, y: number) {
  return x * 1000 + y * 3600;
}
// GOOD CODE
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_HOUR = 3600;

function multiply(x: number, y: number) {
  return x * MILLISECONDS_PER_SECOND + y * SECONDS_PER_HOUR;
}
```

25. [`no-useless-empty-export`]:
    _Disallow empty exports that don't change anything in a module file._

```typescript
// BAD CODE
export const value = "Hello, world!";
export {};

// GOOD CODE
export const value = "Hello, world!";
```

26. [`require-array-sort-compare`]:
    _Require Array.sort() and Array.toSorted() calls to always provide a compareFunction._

When called without a compare function, Array.sort() and Array.toSorted() converts all non-undefined array elements into strings and then compares said strings based off their UTF-16 code units

```typescript
// [1, 2, 3, 10, 20, 30].sort(); //→ [1, 10, 2, 20, 3, 30]
// BAD CODE
const array: any[];
const stringArray: string[];

array.sort();

// String arrays should be sorted using `String#localeCompare`.
stringArray.sort();

// GOOD CODE
const array: any[];
const userDefinedType: { sort(): void };

array.sort((a, b) => a - b);
```

27. [`no-unsafe-unary-minus`]: Require unary negation to take a number

```typescript
// BAD CODE
declare const a: string;
-a;
declare const b: {};
-b;
// GOOD CODE
-42;
-42n;

declare const a: number;
-a;
declare const b: number;
-b;
```
