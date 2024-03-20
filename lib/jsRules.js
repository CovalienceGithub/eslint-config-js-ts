/**
 * ESLint Javascript rules
 */

export default {
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
};
