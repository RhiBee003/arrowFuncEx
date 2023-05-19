//ES5 Map Callback
const double = arr => arr.map(val * 2);

//refactoring
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);
