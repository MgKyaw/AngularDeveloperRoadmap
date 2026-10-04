// <!-- firstName and lastName are concatenated before the result is passed to the uppercase pipe -->
// {{ firstName + lastName | uppercase }}

// {{ (isAdmin ? 'Access granted' : 'Access denied') | uppercase }}

// The pipe operator has higher precedence than the conditional (ternary) operator.
// {{ isAdmin ? 'Access granted' : 'Access denied' | uppercase }}