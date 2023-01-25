// operators

// 1.Arithmetic operators

let x = 10;
let y = 20;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// increment (++)
console.log(++x);

// decrement (--)
console.log(--x);

// 2.Assignment operators

x = x + 5;
x +=3; 

x = x * 5;
x *=3;
 
x = x - 5;
x -=3; 
 
// 3.comparison operators

//relational
console.log(x > 0); 
console.log(x < 0); 
console.log(x <= 0)
console.log(x >= 0); 

//Equality
console.log(x === 10); 
console.log(x !== 10); 

// 4.Equality operators

// strict equality(sametype + same value)

console.log(10 === 10); //true
console.log('10' === 10); //false

//lose equality

console.log(10 == 10); //true
console.log('10' == 10); //true
console.log(true == 10); //true

//5.ternary operator

  let point = 110;
  let type = point > 100 ? 'gold' : 'silver';
  console.log(type); 

  //6.logical operator

  let highIncome = true;
  let goodCreditscore = true;
//   AND &&
  let EligibleForLoan = highIncome && goodCreditscore;
//OR ||
  let EligibleForLoans = highIncome || goodCreditscore;

  //NOT !
  let EligibleForLoan1 = !EligibleForLoan1;

  console.log(EligibleForLoan);

// 6.Bitwise operater

//1 = 0000001
//2 = 00000010
console.log(1  | 2);


// 7. operater precendence

let z = (2 + 3) * 4;
console.log(z);

 

