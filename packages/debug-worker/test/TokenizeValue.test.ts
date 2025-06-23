import { test, expect } from '@jest/globals'
import { tokenizeValue } from '../src/parts/TokenizeValue/TokenizeValue.ts'

// Basic tokenization tests
test('tokenizes function declaration', () => {
  const result = tokenizeValue('function abc(){}')
  expect(result).toEqual(['function', 'Function', ' ', 'WhiteSpace', 'abc', 'Identifier', '(', 'Punctuation', ')', 'Punctuation', '{', 'Punctuation', '}', 'Punctuation'])
})

test('tokenizes variable declaration', () => {
  const result = tokenizeValue('let x = 42')
  expect(result).toEqual(['let', 'Keyword', ' ', 'WhiteSpace', 'x', 'Identifier', ' ', 'WhiteSpace', '=', 'Operator', ' ', 'WhiteSpace', '42', 'Number'])
})

test('tokenizes const declaration', () => {
  const result = tokenizeValue('const PI = 3.14159')
  expect(result).toEqual(['const', 'Keyword', ' ', 'WhiteSpace', 'PI', 'Identifier', ' ', 'WhiteSpace', '=', 'Operator', ' ', 'WhiteSpace', '3.14159', 'Number'])
})

test('tokenizes var declaration', () => {
  const result = tokenizeValue('var message = "hello"')
  expect(result).toEqual(['var', 'Keyword', ' ', 'WhiteSpace', 'message', 'Identifier', ' ', 'WhiteSpace', '=', 'Operator', ' ', 'WhiteSpace', '"hello"', 'String'])
})

// String tests
test('tokenizes double quoted strings', () => {
  const result = tokenizeValue('"hello world"')
  expect(result).toEqual(['"hello world"', 'String'])
})

test('tokenizes single quoted strings', () => {
  const result = tokenizeValue("'hello world'")
  expect(result).toEqual(["'hello world'", 'String'])
})

test('tokenizes template literals', () => {
  const result = tokenizeValue('`hello ${name}`')
  expect(result).toEqual(['`hello ${name}`', 'String'])
})

test('tokenizes escaped strings', () => {
  const result = tokenizeValue('"hello\\nworld"')
  expect(result).toEqual(['"hello\\nworld"', 'String'])
})

test('tokenizes empty string', () => {
  const result = tokenizeValue('""')
  expect(result).toEqual(['""', 'String'])
})

// Number tests
test('tokenizes integers', () => {
  const result = tokenizeValue('123')
  expect(result).toEqual(['123', 'Number'])
})

test('tokenizes decimals', () => {
  const result = tokenizeValue('123.456')
  expect(result).toEqual(['123.456', 'Number'])
})

test('tokenizes scientific notation', () => {
  const result = tokenizeValue('1.23e-10')
  expect(result).toEqual(['1.23e-10', 'Number'])
})

test('tokenizes hex numbers', () => {
  const result = tokenizeValue('0xFF')
  expect(result).toEqual(['0xFF', 'Number'])
})

test('tokenizes binary numbers', () => {
  const result = tokenizeValue('0b1010')
  expect(result).toEqual(['0b1010', 'Number'])
})

test('tokenizes octal numbers', () => {
  const result = tokenizeValue('0o755')
  expect(result).toEqual(['0o755', 'Number'])
})

test('tokenizes negative numbers', () => {
  const result = tokenizeValue('-42')
  expect(result).toEqual(['-', 'Operator', '42', 'Number'])
})

// Operator tests
test('tokenizes arithmetic operators', () => {
  const result = tokenizeValue('a + b - c * d / e')
  expect(result).toEqual([
    'a',
    'Identifier',
    ' ',
    'WhiteSpace',
    '+',
    'Operator',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ' ',
    'WhiteSpace',
    '-',
    'Operator',
    ' ',
    'WhiteSpace',
    'c',
    'Identifier',
    ' ',
    'WhiteSpace',
    '*',
    'Operator',
    ' ',
    'WhiteSpace',
    'd',
    'Identifier',
    ' ',
    'WhiteSpace',
    '/',
    'Operator',
    ' ',
    'WhiteSpace',
    'e',
    'Identifier',
  ])
})

test('tokenizes comparison operators', () => {
  const result = tokenizeValue('a == b && c !== d')
  expect(result).toEqual([
    'a',
    'Identifier',
    ' ',
    'WhiteSpace',
    '==',
    'Operator',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ' ',
    'WhiteSpace',
    '&&',
    'Operator',
    ' ',
    'WhiteSpace',
    'c',
    'Identifier',
    ' ',
    'WhiteSpace',
    '!==',
    'Operator',
    ' ',
    'WhiteSpace',
    'd',
    'Identifier',
  ])
})

test('tokenizes assignment operators', () => {
  const result = tokenizeValue('x += y -= z *= w')
  expect(result).toEqual([
    'x',
    'Identifier',
    ' ',
    'WhiteSpace',
    '+=',
    'Operator',
    ' ',
    'WhiteSpace',
    'y',
    'Identifier',
    ' ',
    'WhiteSpace',
    '-=',
    'Operator',
    ' ',
    'WhiteSpace',
    'z',
    'Identifier',
    ' ',
    'WhiteSpace',
    '*=',
    'Operator',
    ' ',
    'WhiteSpace',
    'w',
    'Identifier',
  ])
})

test('tokenizes logical operators', () => {
  const result = tokenizeValue('a && b || !c')
  expect(result).toEqual([
    'a',
    'Identifier',
    ' ',
    'WhiteSpace',
    '&&',
    'Operator',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ' ',
    'WhiteSpace',
    '||',
    'Operator',
    ' ',
    'WhiteSpace',
    '!',
    'Operator',
    'c',
    'Identifier',
  ])
})

test('tokenizes bitwise operators', () => {
  const result = tokenizeValue('a & b | c ^ d')
  expect(result).toEqual([
    'a',
    'Identifier',
    ' ',
    'WhiteSpace',
    '&',
    'Operator',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ' ',
    'WhiteSpace',
    '|',
    'Operator',
    ' ',
    'WhiteSpace',
    'c',
    'Identifier',
    ' ',
    'WhiteSpace',
    '^',
    'Operator',
    ' ',
    'WhiteSpace',
    'd',
    'Identifier',
  ])
})

test('tokenizes shift operators', () => {
  const result = tokenizeValue('a << b >> c >>> d')
  expect(result).toEqual([
    'a',
    'Identifier',
    ' ',
    'WhiteSpace',
    '<<',
    'Operator',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ' ',
    'WhiteSpace',
    '>>',
    'Operator',
    ' ',
    'WhiteSpace',
    'c',
    'Identifier',
    ' ',
    'WhiteSpace',
    '>>>',
    'Operator',
    ' ',
    'WhiteSpace',
    'd',
    'Identifier',
  ])
})

test('tokenizes arrow function', () => {
  const result = tokenizeValue('x => x * 2')
  expect(result).toEqual([
    'x',
    'Identifier',
    ' ',
    'WhiteSpace',
    '=>',
    'Operator',
    ' ',
    'WhiteSpace',
    'x',
    'Identifier',
    ' ',
    'WhiteSpace',
    '*',
    'Operator',
    ' ',
    'WhiteSpace',
    '2',
    'Number',
  ])
})

test('tokenizes nullish coalescing', () => {
  const result = tokenizeValue('a ?? b')
  expect(result).toEqual(['a', 'Identifier', ' ', 'WhiteSpace', '??', 'Operator', ' ', 'WhiteSpace', 'b', 'Identifier'])
})

test('tokenizes optional chaining', () => {
  const result = tokenizeValue('obj?.prop')
  expect(result).toEqual(['obj', 'Identifier', '?.', 'Operator', 'prop', 'Identifier'])
})

// Keyword tests
test('tokenizes control flow keywords', () => {
  const result = tokenizeValue('if (condition) { return true; } else { return false; }')
  expect(result).toEqual([
    'if',
    'Keyword',
    ' ',
    'WhiteSpace',
    '(',
    'Punctuation',
    'condition',
    'Identifier',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'return',
    'Keyword',
    ' ',
    'WhiteSpace',
    'true',
    'Keyword',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '}',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'else',
    'Keyword',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'return',
    'Keyword',
    ' ',
    'WhiteSpace',
    'false',
    'Keyword',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '}',
    'Punctuation',
  ])
})

test('tokenizes loop keywords', () => {
  const result = tokenizeValue('for (let i = 0; i < 10; i++) { continue; }')
  expect(result).toEqual([
    'for',
    'Keyword',
    ' ',
    'WhiteSpace',
    '(',
    'Punctuation',
    'let',
    'Keyword',
    ' ',
    'WhiteSpace',
    'i',
    'Identifier',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    '0',
    'Number',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'i',
    'Identifier',
    ' ',
    'WhiteSpace',
    '<',
    'Operator',
    ' ',
    'WhiteSpace',
    '10',
    'Number',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'i',
    'Identifier',
    '++',
    'Operator',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'continue',
    'Keyword',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '}',
    'Punctuation',
  ])
})

test('tokenizes class keywords', () => {
  const result = tokenizeValue('class MyClass extends BaseClass { constructor() { super(); } }')
  expect(result).toEqual([
    'class',
    'Keyword',
    ' ',
    'WhiteSpace',
    'MyClass',
    'Identifier',
    ' ',
    'WhiteSpace',
    'extends',
    'Keyword',
    ' ',
    'WhiteSpace',
    'BaseClass',
    'Identifier',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'constructor',
    'Identifier',
    '(',
    'Punctuation',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'super',
    'Keyword',
    '(',
    'Punctuation',
    ')',
    'Punctuation',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '}',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '}',
    'Punctuation',
  ])
})

test('tokenizes async/await keywords', () => {
  const result = tokenizeValue('async function fetchData() { const result = await api.get(); }')
  expect(result).toEqual([
    'async',
    'Keyword',
    ' ',
    'WhiteSpace',
    'function',
    'Function',
    ' ',
    'WhiteSpace',
    'fetchData',
    'Identifier',
    '(',
    'Punctuation',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'const',
    'Keyword',
    ' ',
    'WhiteSpace',
    'result',
    'Identifier',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    'await',
    'Keyword',
    ' ',
    'WhiteSpace',
    'api',
    'Identifier',
    '.',
    'Punctuation',
    'get',
    'Identifier',
    '(',
    'Punctuation',
    ')',
    'Punctuation',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '}',
    'Punctuation',
  ])
})

// Comment tests
test('tokenizes single line comments', () => {
  const result = tokenizeValue('// this is a comment')
  expect(result).toEqual(['// this is a comment', 'Comment'])
})

test('tokenizes multi-line comments', () => {
  const result = tokenizeValue('/* multi\nline\ncomment */')
  expect(result).toEqual(['/* multi\nline\ncomment */', 'Comment'])
})

test('tokenizes code with comments', () => {
  const result = tokenizeValue('let x = 1; // comment\nlet y = 2;')
  expect(result).toEqual([
    'let',
    'Keyword',
    ' ',
    'WhiteSpace',
    'x',
    'Identifier',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    '1',
    'Number',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '// comment',
    'Comment',
    '\n',
    'WhiteSpace',
    'let',
    'Keyword',
    ' ',
    'WhiteSpace',
    'y',
    'Identifier',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    '2',
    'Number',
    ';',
    'Punctuation',
  ])
})

// Object and array tests
test('tokenizes object literal', () => {
  const result = tokenizeValue('{name: "John", age: 30}')
  expect(result).toEqual([
    '{',
    'Punctuation',
    'name',
    'Identifier',
    ':',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '"John"',
    'String',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'age',
    'Identifier',
    ':',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '30',
    'Number',
    '}',
    'Punctuation',
  ])
})

test('tokenizes array literal', () => {
  const result = tokenizeValue('[1, 2, 3]')
  expect(result).toEqual([
    '[',
    'Punctuation',
    '1',
    'Number',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '2',
    'Number',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '3',
    'Number',
    ']',
    'Punctuation',
  ])
})

test('tokenizes nested objects', () => {
  const result = tokenizeValue('{user: {name: "John", settings: {theme: "dark"}}}')
  expect(result).toEqual([
    '{',
    'Punctuation',
    'user',
    'Identifier',
    ':',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    'name',
    'Identifier',
    ':',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '"John"',
    'String',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'settings',
    'Identifier',
    ':',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    'theme',
    'Identifier',
    ':',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '"dark"',
    'String',
    '}',
    'Punctuation',
    '}',
    'Punctuation',
    '}',
    'Punctuation',
  ])
})

// Identifier tests
test('tokenizes identifiers with underscores', () => {
  const result = tokenizeValue('user_name _private $jquery')
  expect(result).toEqual(['user_name', 'Identifier', ' ', 'WhiteSpace', '_private', 'Identifier', ' ', 'WhiteSpace', '$jquery', 'Identifier'])
})

test('tokenizes identifiers with numbers', () => {
  const result = tokenizeValue('user123 123user')
  expect(result).toEqual(['user123', 'Identifier', ' ', 'WhiteSpace', '123', 'Number', 'user', 'Identifier'])
})

test('tokenizes whitespace only', () => {
  const result = tokenizeValue('   \n\t  ')
  expect(result).toEqual(['   \n\t  ', 'WhiteSpace'])
})

test('tokenizes single character', () => {
  const result = tokenizeValue('a')
  expect(result).toEqual(['a', 'Identifier'])
})

test('tokenizes single operator', () => {
  const result = tokenizeValue('+')
  expect(result).toEqual(['+', 'Operator'])
})

test('tokenizes single punctuation', () => {
  const result = tokenizeValue(';')
  expect(result).toEqual([';', 'Punctuation'])
})

test('tokenizes unknown characters', () => {
  const result = tokenizeValue('@#$%')
  expect(result).toEqual(['@', 'Punctuation', '#', 'Punctuation', '$', 'Identifier', '%', 'Operator'])
})

// Complex expressions
test('tokenizes complex mathematical expression', () => {
  const result = tokenizeValue('result = (a + b) * (c - d) / e')
  expect(result).toEqual([
    'result',
    'Identifier',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    '(',
    'Punctuation',
    'a',
    'Identifier',
    ' ',
    'WhiteSpace',
    '+',
    'Operator',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '*',
    'Operator',
    ' ',
    'WhiteSpace',
    '(',
    'Punctuation',
    'c',
    'Identifier',
    ' ',
    'WhiteSpace',
    '-',
    'Operator',
    ' ',
    'WhiteSpace',
    'd',
    'Identifier',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '/',
    'Operator',
    ' ',
    'WhiteSpace',
    'e',
    'Identifier',
  ])
})

test('tokenizes function call with arguments', () => {
  const result = tokenizeValue('calculate(a, b, "string", 123)')
  expect(result).toEqual([
    'calculate',
    'Identifier',
    '(',
    'Punctuation',
    'a',
    'Identifier',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '"string"',
    'String',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '123',
    'Number',
    ')',
    'Punctuation',
  ])
})

test('tokenizes ternary operator', () => {
  const result = tokenizeValue('condition ? value1 : value2')
  expect(result).toEqual([
    'condition',
    'Identifier',
    ' ',
    'WhiteSpace',
    '?',
    'Operator',
    ' ',
    'WhiteSpace',
    'value1',
    'Identifier',
    ' ',
    'WhiteSpace',
    ':',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'value2',
    'Identifier',
  ])
})

test('tokenizes template literal with expressions', () => {
  const result = tokenizeValue('`Hello ${name}, you are ${age} years old`')
  expect(result).toEqual(['`Hello ${name}, you are ${age} years old`', 'String'])
})

test('tokenizes destructuring assignment', () => {
  const result = tokenizeValue('const {name, age} = user')
  expect(result).toEqual([
    'const',
    'Keyword',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    'name',
    'Identifier',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'age',
    'Identifier',
    '}',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    'user',
    'Identifier',
  ])
})

test('tokenizes array destructuring', () => {
  const result = tokenizeValue('const [first, second] = array')
  expect(result).toEqual([
    'const',
    'Keyword',
    ' ',
    'WhiteSpace',
    '[',
    'Punctuation',
    'first',
    'Identifier',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'second',
    'Identifier',
    ']',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    'array',
    'Identifier',
  ])
})

test('tokenizes spread operator', () => {
  const result = tokenizeValue('const newArray = [...oldArray, newItem]')
  expect(result).toEqual([
    'const',
    'Keyword',
    ' ',
    'WhiteSpace',
    'newArray',
    'Identifier',
    ' ',
    'WhiteSpace',
    '=',
    'Operator',
    ' ',
    'WhiteSpace',
    '[',
    'Punctuation',
    '...',
    'Operator',
    'oldArray',
    'Identifier',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'newItem',
    'Identifier',
    ']',
    'Punctuation',
  ])
})

test('tokenizes rest parameters', () => {
  const result = tokenizeValue('function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }')
  expect(result).toEqual([
    'function',
    'Function',
    ' ',
    'WhiteSpace',
    'sum',
    'Identifier',
    '(',
    'Punctuation',
    '...',
    'Operator',
    'numbers',
    'Identifier',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '{',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'return',
    'Keyword',
    ' ',
    'WhiteSpace',
    'numbers',
    'Identifier',
    '.',
    'Punctuation',
    'reduce',
    'Identifier',
    '(',
    'Punctuation',
    '(',
    'Punctuation',
    'a',
    'Identifier',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ')',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '=>',
    'Operator',
    ' ',
    'WhiteSpace',
    'a',
    'Identifier',
    ' ',
    'WhiteSpace',
    '+',
    'Operator',
    ' ',
    'WhiteSpace',
    'b',
    'Identifier',
    ',',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '0',
    'Number',
    ')',
    'Punctuation',
    ';',
    'Punctuation',
    ' ',
    'WhiteSpace',
    '}',
    'Punctuation',
  ])
})
