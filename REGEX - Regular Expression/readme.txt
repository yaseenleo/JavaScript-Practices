Regular Expressions (Regex)
Defines a search pattern that can be used to search for things in a string.

Regex is case sensitive
.test() method is used to match a string value with regex if the value matches it returns true else false
e.g  regexVariable.test(variable)
.match() method is used to matches a string an object and returns the text match on an array
e.g  variable.match(regexVariable)

/i is a flag which means ignore the case sensitive
/g is a flag which performs a global match to find all occurrences of the pattern instead of stopping and returns at match value in an array

. is a wildcard period which is used to match anything in period

[a-z] to select letters from a to z lower case

negated character set are a set of character which you don't want to match

* star means match the single or multiple character one or times
the star flag searches the character at initial if the character is not found at initial index it will not match 

Regex default pattern is Greedy match
Greedy match the longest possible part of string which matches regex pattern and returns as a match
A Lazy match matches the smallest possible part of string which matches regex pattern and return as a match

^ carrot sign character is used to match character in the beginning of string
carrot sign is used in the beginning of regex validation e.g  /^hello/

$ sign character is used to match character in the ending of string
dollar sign is used in the end of regex validation e.g  /hello$/

there is called a short hand character which is used to match wide range of things called \w which will match alphabets from a to z lowercase and uppercase, number and underscope
/\w/ = a to z 0 to 9 _

capital W does not match letters and numbers but matches spaces and period(.)
/\W/ = space .

\d is a short hand character to select all numbers in a string
/\d/

\D is a short hand character to match all non numbers
/\D/

\s is a short hand character which matches space, character turn, tab and a new line character.

You can specify the lower and upper number of pattern matches by quantity specifiers. Quantity Specifiers are specified by curly brackets you put two numbers inside the bracket for lower and upper number pattern
{} curly braces indicates the number of times the previous thing can match like e.g {2,} (minimum 2 times match repeat, maximum infinite letters match) inside curly bracket let side minimum number of letter matches and right side means maximum number of letters matches
