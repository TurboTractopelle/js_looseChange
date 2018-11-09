function looseChange(cents) {
  let coinsValue = [25, 10, 5, 1]; // q, d, n, p
  let coins = [0, 0, 0, 0]; // q, d, n, p
  let value;

  const getNumber = function(value, coins, i) {
    console.log(coins, i, value);
    if (i < 4) {
      coins[i] = (value - (value % coinsValue[i])) / coinsValue[i];
      return getNumber(value - coins[i] * coinsValue[i], coins, ++i);
    }
  };

  cents > 0 ? (value = getNumber(Math.floor(cents), coins, 0, true)) : null;

  return {
    Nickels: coins[2],
    Pennies: coins[3],
    Dimes: coins[1],
    Quarters: coins[0]
  };
}

console.log(looseChange(7.9));

/*
const testCallBack = function(i, value){
  if(i < 5){
    i = i + 1
    console.log(i)
    return testCallBack(i++, value)
  } else {
    return "fini"
  }
}

console.log(testCallBack(0, 10))*/
