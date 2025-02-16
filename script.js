const makeChange = (c) => {
  // your name here
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize the result object
  const result = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  // Calculate the number of quarters
  result.q = Math.floor(c / quarterValue);
  c %= quarterValue;

  // Calculate the number of dimes
  result.d = Math.floor(c / dimeValue);
  c %= dimeValue;

  // Calculate the number of nickels
  result.n = Math.floor(c / nickelValue);
  c %= nickelValue;

  // The remaining c are pennies
  result.p = c;

  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
