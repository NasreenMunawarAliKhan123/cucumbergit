Feature: Arithmetic opertaions

This is done to check the arithmetic operations

Scenario Outline: Operations
Given I enter <1> in the calculator
And I press "<Symbol>" 
And I have entered <2> in the calculator
When I press equal symbol
Then The result is <3> is displayed

Examples:
| 1      | Symbol |   2    | 3      |
|  5     |  Add   |  10    |  15    |
|  10    |  Sub   |   5    |    5   |
|   20   |   Mul  |   30   |    600 |
|  20    | Div    |   5    |   4    |
