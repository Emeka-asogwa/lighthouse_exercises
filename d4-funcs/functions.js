// The function below is being defined and assigned to a variable myFunc!
const myFunc = function() {
  console('Hello from myFunc!');
}

// We can now call myFunc() with the () syntax.
myFunc()

// We can also assign that value to other variables!
const anotherVar = myFunc; 

// And call them the same way
anotherVar() // => Same as myFunc()!