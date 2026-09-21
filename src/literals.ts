// literal values cannot be assigned to any other function or its variable
// it works for itself
//it is different from type
//it can choose only those values which were used in the literal
// : is used for literals

//string literal
let stringLit: "stone" | "paper" | "scissor"
stringLit = "stone";

//number literal
let numLit: 1 | 2 | 3 | 4 | 5;
numLit = 3;

//combining with other types
// if we are given 2 different types, we can add literals to each of then
// and then create a new type using union, which can have either of the literals