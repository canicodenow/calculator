# calculator
Create a working calculator in javaScript

V2 - you can now carry on doing sums after pressing equals

V3 = it should round so that all numbers fit in the display (partially done)

V4 = added keyboard support for digits and equals

V5 = it does not let you divide by 0

V6 = added keyboard support for operators

V7 = removed rounding because it doesn't work properly.
     found some more bugs
     added DEL button to CSS


//Todo

1. the display should show the full entry (e.g. 44 + 5 - 6 * 3)
2. it should have a backspace button
3. it should allow one decimal point in a sum

//Bugs:

1. cannot chain the same operator (6 + 6 + 6 + 6) after pressing equals - I think the solution is to use a separate string for the display and the numbers I'm doing maths on.

2. pressing equals with no operator has strange results - for addition it seems ok, but multiply and divide default to 0. Also when equalsPressed == true ass and minus no longer work.