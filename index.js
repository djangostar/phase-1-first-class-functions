// take a callback function as an argument
const receivesAFunction = (callback) => {
  // call the callback function
  callback();
  // it doesn't matter what this function returns, so long as it calls the callback function
};
// take no arguments
const returnsANamedFunction = () => {
  // return a named function
  return function Ace() {};
};
// take no arguments
const returnsAnAnonymousFunction = () => {
  return function () {};
};
