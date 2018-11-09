function looseChange(cents) {
 
  let j=0, k=0, l=0
  let value = Math.floor(cents)

  let conv = {'Pennies': 1, 'Nickels': 5, 'Dimes': 10, 'Quarters': 25}

  //(value) % conv['Quarters']% > 

  const getNumber = (value, coinValue) => (value - (value % coinValue)) / coinValue
  
  let i = getNumber(value, conv['Quarters'])

  return { 'Nickels': l, 'Pennies': k, 'Dimes': j, 'Quarters': i }

}

console.log(looseChange(122))

const testCallBack = function(i, value){
  if(i < 5){
    console.log(i)
    return testCallBack(i++, value)
  } else {
    return "fini"
  }
}

console.log(testCallBck(0, 10))