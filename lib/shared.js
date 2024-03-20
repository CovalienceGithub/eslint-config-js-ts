const ESLintJSRules = require("./jsRules.js");
module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    // Apply special parsing for TypeScript files
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts", ".mts", ".cts"],
    },
  },
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs", "*.jsx"],
      extends: ["eslint:recommended"],
      rules: ESLintJSRules,
    },
    {
      files: ["*.ts", "*.mts", "*.cts", "*.tsx", "*.d.ts"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      rules: {
        ...ESLintJSRules,
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
    },
  ],
};
