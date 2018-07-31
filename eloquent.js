1.
function min(a, b) {
    if (a < b) return a;
    else return b;
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

2.
function isEven(n) {
    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else if (n < 0) {
      return undefined; 
    } else {
      return isEven(n - 2)
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

3. 
const countBs = function(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
    counter ++;
    } else if (string[i] === !"B"){
    counter;
  }
  }
  return counter;
};

const countChar = function(string, letter) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
    counter ++;
    } else if (string[i] === !letter){
    counter;
  }
  }
  return counter;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4