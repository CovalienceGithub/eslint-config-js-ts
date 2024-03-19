
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    }
  },
  rules: {
    // enforces camelcase naming convention
    // https://eslint.org/docs/latest/rules/camelcase
    camelcase: "error",

    // enforce consistent brace style for all control statements
    // https://eslint.org/docs/latest/rules/curly
    curly: ["error", "multi-line"],

    // require default cases in switch statements
    // https://eslint.org/docs/latest/rules/default-case
    "default-case": ["error", { commentPattern: "^no default$" }],

    // enforce default parameters to be last
    // https://eslint.org/docs/latest/rules/default-param-last
    "default-param-last": "error",

    // Require the use of === and !==
    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: "error",

    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/latest/rules/no-multi-assign
    "no-multi-assign": ["error"],

    // Disallow the use of console
    // https://eslint.org/docs/latest/rules/no-console
    "no-console": "error",

    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/latest/rules/no-use-before-define
    "no-use-before-define": "error",

    // Disallow the use of eval()
    // https://eslint.org/docs/latest/rules/no-eval
    "no-eval": "error",

    // Disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/latest/rules/no-alert
    "no-alert": "warn",

    // Disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/latest/rules/no-useless-concat
    "no-useless-concat": "error",

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/latest/rules/no-useless-rename
    "no-useless-rename": "error",

    // Disallow the use of eval()-like methods
    // https://eslint.org/docs/latest/rules/no-implied-eval
    "no-implied-eval": "error",

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/latest/rules/no-loop-func
    "no-loop-func": "error",

    // Disallow await inside of loops
    // https://eslint.org/docs/latest/rules/no-await-in-loop
    "no-await-in-loop": "error",

    // Disallow returning value from constructor
    // https://eslint.org/docs/latest/rules/no-constructor-return
    "no-constructor-return": "error",

    // Disallow duplicate module imports
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    "no-duplicate-imports": ["error", { includeExports: true }],

    // Disallow new operators with global non-constructor functions
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    "no-new-native-nonconstructor": "error",

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/latest/rules/no-promise-executor-return
    "no-promise-executor-return": "error",

    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/latest/rules/no-self-compare
    "no-self-compare": "error",

    // Disallow unmodified loop conditions
    // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "error",

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/latest/rules/no-unreachable-loop
    "no-unreachable-loop": "error",

    // Disallow unused private class members
    // https://eslint.org/docs/latest/rules/no-unused-private-class-members
    "no-unused-private-class-members": "error",

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": ["error"],

    // Require const declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/latest/rules/prefer-const
    "prefer-const": "error",

    // Disallow async functions which have no await expression
    // https://eslint.org/docs/latest/rules/require-await
    "require-await": "error",

    // Require symbol descriptions
    // https://eslint.org/docs/latest/rules/symbol-description
    "symbol-description": ["error"],

    // Require or disallow "Yoda" conditions
    // https://eslint.org/docs/latest/rules/yoda
    yoda: ["error", "never"],

    // Require var declarations be placed at the top of their containing scope
    // https://eslint.org/docs/latest/rules/vars-on-top
    "vars-on-top": "error",

    // Require spread operators instead of .apply()
    // https://eslint.org/docs/latest/rules/prefer-spread
    "prefer-spread": "error",

    // Require rest parameters instead of arguments
    // https://eslint.org/docs/latest/rules/prefer-rest-params
    "prefer-rest-params": "error",

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": "error",

    // https://eslint.org/docs/latest/rules/prefer-destructuring
    // Require destructuring from arrays and/or objects
    "prefer-destructuring": "error",

    // Require using arrow functions for callbacks
    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    "prefer-arrow-callback": "error",

    // Require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/latest/rules/operator-assignment
    "operator-assignment": "error",

    // Disallow void operators
    // https://eslint.org/docs/latest/rules/no-void
    "no-void": "error",

    // Disallow redundant return statements
    // https://eslint.org/docs/latest/rules/no-useless-return
    "no-useless-return": "error",

    // Disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/latest/rules/no-unneeded-ternary
    "no-unneeded-ternary": "error",

    // Disallow the use of undefined as an identifier
    // https://eslint.org/docs/latest/rules/no-undefined
    "no-undefined": "error",

    // Disallow initializing variables to undefined
    // https://eslint.org/docs/latest/rules/no-undef-init
    "no-undef-init": "error",

    // Require let or const instead of var
    // https://eslint.org/docs/latest/rules/no-var
    "no-var": "error",

    // Disallow unnecessary constructors
    // https://eslint.org/docs/latest/rules/no-useless-constructor
    "no-useless-constructor": "error",

    // STYLISTIC Category
    // Enforce the use of for-of loop over the standard for loop where possible.
    // https://typescript-eslint.io/rules/prefer-for-of/
    "@typescript-eslint/prefer-for-of": "error",


    // Require that function overload signatures be consecutive.
    // https://typescript-eslint.io/rules/adjacent-overload-signatures/
    "@typescript-eslint/adjacent-overload-signatures": "error",

    // Disallow empty functions.
    // https://typescript-eslint.io/rules/no-empty-function/
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",

    // Require consistently using either T[] or Array<T> for arrays.
    // https://typescript-eslint.io/rules/array-type/
    "@typescript-eslint/array-type": "error",

    // Disallow non-null assertion in locations that may be confusing.
    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
    "@typescript-eslint/no-confusing-non-null-assertion": ["error"],

    // Disallow the declaration of empty interfaces.
    // https://typescript-eslint.io/rules/no-empty-interface/
    "@typescript-eslint/no-empty-interface": ["error"],

    // Enforce using the nullish coalescing operator instead of logical assignments or chaining.
    // https://typescript-eslint.io/rules/prefer-nullish-coalescing/
    "@typescript-eslint/prefer-nullish-coalescing": ["error"], // "strictNullChecks" needs to be enabled

    // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
    // https://typescript-eslint.io/rules/prefer-optional-chain/
    "@typescript-eslint/prefer-optional-chain": ["error"], // "strictNullChecks" needs to be enabled

    // STRICT Category
    // Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
    // https://typescript-eslint.io/rules/unified-signatures/
    "@typescript-eslint/unified-signatures": ["error"],

    // Require all enum members to be literal values.
    // https://typescript-eslint.io/rules/prefer-literal-enum-member/
    "@typescript-eslint/prefer-literal-enum-member": ["error"],

    // Disallow unnecessary template literals.
    // https://typescript-eslint.io/rules/no-useless-template-literals/
    "@typescript-eslint/no-useless-template-literals": "error",

    // Disallow throwing literals as exceptions.
    // https://typescript-eslint.io/rules/no-throw-literal/
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",

    // Disallow using the delete operator on computed key expressions.
    // https://typescript-eslint.io/rules/no-dynamic-delete/
    "@typescript-eslint/no-dynamic-delete": ["error"],

    // Disallow using the delete operator on array values.
    // https://typescript-eslint.io/rules/no-array-delete/
    "@typescript-eslint/no-array-delete": "error",

    // Require expressions of type void to appear in statement position.
    // https://typescript-eslint.io/rules/no-confusing-void-expression/
    "@typescript-eslint/no-confusing-void-expression": "error",

    // Disallow void type outside of generic or return types.
    // https://typescript-eslint.io/rules/no-invalid-void-type/
    "@typescript-eslint/no-invalid-void-type": "error",

    // Disallow the void operator except when used to discard a value.
    // https://typescript-eslint.io/rules/no-meaningless-void-operator/
    "@typescript-eslint/no-meaningless-void-operator": "error",

    // Disallow unnecessary equality comparisons against boolean literals.
    // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

    // Disallow conditionals where the type is always truthy or always falsy.
    // https://typescript-eslint.io/rules/no-unnecessary-condition/
    "@typescript-eslint/no-unnecessary-condition": "error",

    // Disallow enums from having both number and string members.
    // https://typescript-eslint.io/rules/no-mixed-enums/
    "@typescript-eslint/no-mixed-enums": "error",


    // OTHER Category
    // Require explicit return types on functions and class methods.
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    "@typescript-eslint/explicit-function-return-type": "error",

    // Disallow magic numbers.
    // https://typescript-eslint.io/rules/no-magic-numbers/
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreTypeIndexes: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
      },
    ],

    // Require unary negation to take a number.
    // https://typescript-eslint.io/rules/no-unsafe-unary-minus/
    "@typescript-eslint/no-unsafe-unary-minus": "error",

    // Require Array#sort and Array#toSorted calls to always provide a compareFunction.
    // https://typescript-eslint.io/rules/require-array-sort-compare/
    "@typescript-eslint/require-array-sort-compare": "error",

    // Disallow empty exports that don't change anything in a module file.
    // https://typescript-eslint.io/rules/no-useless-empty-export/
    "@typescript-eslint/no-useless-empty-export": "error",
  },
};
