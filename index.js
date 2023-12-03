const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => {
  return function namedFunction() {
    console.log("Returned");
  };
};

const returnsAnAnonymousFunction = () => {
  return function () {
    console.log("Anonymous function");
  };
};
