---
title: 'PHP Operators'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Operators

Used to perform operations on variables and values.

Divided into multiple groups:
- Arithmetic.
- Assignment.
- Comparison.
- Increment/Decrement.
- Logical.
- String.
- Array.
- Conditional Assignments.

## Arithmetic

Used with numerical operatiosn to perform common arithmetical operations.

```
+
Addition.
$x + $y
Sum of $x and $y

-
Subtraction.
$x - $y
Difference of $x and $y

*
Multiplication.
$x * $y
Product of $x and $y

/
Division.
$x / $y
Quotient of $x and $y

%
Modulo.
$x % $y
Remainder of $x divided by $y

**
Exponentiation.
$x ** $y
Result of raising $x to the $y'th power.
```

## Assignments

Used with numeric values to write a value to a variable.
- Basic operator is '='. The left operand is assigned to the value of the expression on the right.

```
x = y
Same as x = y
Left operand assigned value of the expression on the right

x += y
x = x + y
Addition

x -= y
x = x - y
Subtraction

x *= y
x = x * y
Multiplication

x /= y
x = x / y
Division

x %= y
x = x % y
Modulus
```

## Comparison

Used to compare two values (number or string).

```
==
Equal
$x == $y
Return true if $x is equal to $y

===
Identical
$x === $y
Returns true if $x is equal to $y, and they are the same type

!=
Not equal
$x != $y
Returns true is $x is not equal to $y

<>
Not equal
$x <> $y
Returns true if $x is not equal to $y

!==
Not identical
$x !== $y
Returns true if $x is not equal to $y, or they are not the same type

>
Greater than
$x > $y
Returns true if $x is greater than $y

<
Less than
$x < $y
Returns true if $x is less than $y

>=
Greater than or equal to
$x >= $y
Returns true if $x is greater than or equal to $y

<=
Less than or equal to
$x <= $y
Returns true if $x is less than or equal to $y

<=>
Spaceship
$x <=> $y
Returns an integer less than, equal to, or greater than zero, depending on if $x is less than, equal to, or greater than $y.
```

## Increment / Decrement

Used to increment or decrement a variable's value.

```
++$x
Pre-increment
Increments $x by one, then returns $x

$x++
Post-increment
Returns $x, then increments $x by one

--$x
Pre-decrement
Decrements $x by one, then returns $x

$x--
Post-decrement
Returns $x, then decrements $x by one
```

## Logical Operators

Used to combine conditional statements

```
and
And
$x and $y
True if both $x and $y are true

or
Or
$x or $y
True if either $x or $y are true

xor
Xor
$x xor $y
True if either $x or $y is true, not both

&&
And
$x && $y
True if both $x and $y are true

||
Or
$x || $y
True if either $x or $y are true

!
Not
!$x
True if $x is not true
```

## String Operators

These operators are designed for concatenation of strings

```
.
Concatenation
$msg1 . $msg2
Concatenation of $msg1 and $msg2

.=
Concatenation Assignment
$msg1 . $msg2
Appens $msg1 to $msg2
```

## Array Operators

Used to compare arrays.

```
+
Union
$x + $y
Union of $x and $y

==
Equality
$x == $y
Returns true if $x and $y have the same key/value pairs

===
Identity
$x == $y
Returns true if $x and $y have the same key/value pairs in the same order and of the same types

!=
Inequality
$x != $y
Returns true if $x is not equal to $y

<>
Inequality
$x <> $y
Returns true if $x is not equal to $y

!==
Non-identity
Returns true if $x is not identicaly $y
```

## Conditional Assignment Operators

Used to set a value depending on conditions.

```
?:
Ternary
$x = expr1 ? expr2 : expr3
Returns the value of $x
$x becomes expr2 if expr1 is true
$x becomes expr3 if expr1 is false

??
Null Coalescing
$x = expr1 ?? expr2
Returns the value of $x
$x is expr1 if expr1 exists, and not null.
$x becomes expr2 otherwise
```