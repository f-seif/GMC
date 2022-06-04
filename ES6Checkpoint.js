//Vowel Count
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++){
    vowels.forEach(el => {
      if (el == str[i]) vowelsCount++;
    })
   }
  return vowelsCount;
}

//Even or Odd
function even_or_odd(number) {
  return number % 2 == 0 ? 'Even' : 'Odd';
}

//Get the middle character
function getMiddle(s) {
  return s.length % 2 !== 0 ? s[Math.floor(s.length / 2)] : s[(s.length / 2) - 1] + s[s.length / 2];
}

//Opposite number
function opposite(number) {
  return number * -1;
}

//Mumbling
function accum(s) {
  let a = [];
	for (let i = 0; i < s.length; i++){
    let b = s[i].toUpperCase();
    for (let j = 0; j < i; j++){
      b += s[i].toLowerCase();
    }
    a.push(b);
  }
  return a.join("-");
}

//You're a square!
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n)) ? true : false;
}

//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
}

//Highest and Lowest
function highAndLow(numbers){
  let a = numbers.split(' ');
  let b = a.map(el => Number(el));
  let max = Math.max(...b);
  let min = Math.min(...b);
  return max +' '+ min;
}

//Exes and Ohs
function XO(str) {
  let x = str.match(/x/ig);
  xl = x !== null ? x.length : 0;
  let o = str.match(/o/ig);
  ol = o !== null ? o.length : 0;
  return xl === ol ? true : false;
}

//Square Every Digit
function squareDigits(num){
  let s = num.toString();
  let a = s.split('');
  let b = a.map(Number);
  let c = b.map(el => el*el);
  let d = c.join('');
  return Number(d);
}

//Shortest Word
function findShort(s){
  let a = s.split(' ');
  let b = a[0].length;
  for (let i = 1; i < a.length; i++){
    if (a[i].length < b) b = a[i].length;
  }
  return b;
}

//Complementary DNA
function DNAStrand(dna){
  let a = dna.split('');
  for (let i = 0; i < a.length; i++){
    switch(a[i]){
        case 'A':
        a[i] = 'T';
        break;
        case 'T':
        a[i] = 'A';
        break;
        case 'G':
        a[i] = 'C';
        break;
        case 'C':
        a[i] = 'G';
        break;
    }
  }
  return a.join('');
}

//Descending Order
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

//Sum of positive
function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

//Isograms
function isIsogram(str){
  let  i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

//List Filtering
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
};

//Growth of a Population
function nbYear(p0, percent, aug, p) {
    let result = 0;
  while(p0 < p){
    p0 += Math.floor(p0 * percent / 100 + aug);
    result++;
  }
  return result;
}

//String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

//Is this a triangle?
function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}

//Find the next perfect square!
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}

//Credit Card Mask
function maskify(cc) {
  cc = cc.split("");
  for(let i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}
cc = cc.join("");
return cc
}

//Sum of odd numbers
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

//Find the divisors!
function divisors(integer) {
  let d = [];
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      d.push(i);
    }
  }
  return d.length ? d : integer + ' is prime';
}

//Return Negative
function makeNegative(num) {
  return num < 0 ? num : -num;
}

//Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
}

//Remove String Spaces
function noSpace(x){
    return x.split(' ').join('');
}

//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

//Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}

//Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

//Sum of the first nth term of Series
function SeriesSum(n) {
  let a = 0;
  for (let i = 0; i < n; i++) {
    a += 1 / (1 + i * 3)
  }
  return a.toFixed(2);
}

//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

//Century From Year
function century(year) {
  return Math.ceil(year/100);
}

//Beginner - Lost Without a Map
function maps(x){
  return x.map(n => n * 2);
}

//Reversed Strings
function solution(str){
  return str.split('').reverse().join('');
}

//String ends with?
function solution(str, ending){
  return str.endsWith(ending);
}

//Do I get a bonus?
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}

//Abbreviate a Two Word Name
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

//DNA to RNA Conversion
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

//Counting sheep...
function countSheeps(arrayOfSheeps) {
  return arrayOfSheep.filter(Boolean).length;
}

//Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

//A Needle in the Haystack
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

//Remove the minimum
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((a, b)=> b !== indexOfMin);
}

//Convert number to reversed array of digits
function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

//Make a function that does arithmetic!
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

//Regular Ball Super Ball
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

//Make them bark!
Dog.prototype.bark = function bark() {
  return 'Woof!';
}

//Add property to every object in array
questions.forEach(function (i) {
    i.usersAnswer = null;
});

//Fixme: Get Full Name
class Dinglemouse{
  constructor( firstName, lastName ){
    this.firstName = firstName.concat(" ");
    this.lastName = lastName;
  }
  getFullName(){
    return this.firstName.concat(this.lastName).trim();
  }
}

//Grasshopper - Summation
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

//Jenny's secret message
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

//Function 1 - hello world
function greet() {
    return "hello world!";
}

//Count the Monkeys!
function monkeyCount(n) {
 let monkeys = [];
 for(let i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}

//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

//Find the capitals
let capitals = function (word) {
  let caps = [];
  for(let i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

//Plural
function plural(n) {
  return n !== 1;
}

//Drink about
const peopleWithAgeDrink = (age) => {
  switch (true) {
    case (age >= 21): return 'drink whisky'
    case (age >= 18): return 'drink beer'
    case (age >= 14): return 'drink coke'
    default: return 'drink toddy'
  }
};

//Leonardo Dicaprio and Oscars
function leo(oscar){
  switch (oscar){
    case 88:
      return "Leo finally won the oscar! Leo is happy";
      break;
    case 86:
      return  "Not even for Wolf of wallstreet?!";
      break;
    default:
      if(oscar<88) return "When will you give Leo an Oscar?";
      else return  "Leo got one already!";
  }
}

//Switch/Case - Bug Fixing #6
function evalObject(value){
  let result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
      break;
    case'-': result = value.a - value.b;
      break;
    case'/': result = value.a / value.b;
      break;
    case'*': result = value.a * value.b;
      break;
    case'%': result = value.a % value.b;
      break;
    case'^': result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

//Sentence Smash
function smash (words) {
    return words.join(' ');
};

//If you can't sleep, just count sheep!!
function countSheep (num) {
  const arr = [];
  for (i = 1; i <= num; i++) {
    arr.push(i + " sheep...");
  }
  return arr.join('');
}

//Double Char
const doubleChar = (str) => str.split("").map(c => c + c).join("");

//Unfinished Loop - Bug Fixing #1
function createArray(number){
  var newArray = [];
  var counter = 1;
  for( counter; counter <= number; counter++){
    newArray.push(counter);
  }
  return newArray;
}

//Sum of numbers from 0 to N
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var m = [], s=0;
    if(count === 0) return count + '=' + 0;
    if(count < 0) return count + '<' + 0;

    for(var i=0; i<=count; i++) {
      s+=i;
      m.push(i);
    };

    return m.join('+') + ' = ' + s;
  };

  return SequenceSum;

})();

//Multiples of 3 or 5
function solution(number){
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

//Sum of Digits / Digital Root
function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

//Who likes it?
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

//Find The Parity Outlier
function findOutlier(int){
  let even = int.filter(a=>a%2==0);
  let odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

//Stop gninnipS My sdroW!
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//////////////////////////////////////////////////////////////////
//You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}

//Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let a = (s1 + s2 + s3) / 3;
  if (a >= 90 && a <= 100){
    return 'A';
  }else if(a >= 80 && a < 90){
    return 'B';
  }else if(a >= 70 && a < 80){
    return 'C';
  }else if(a >= 60 && a < 70){
    return 'D';
  }else if(a >= 0 && a < 60){
    return 'F';
  }
}

//Function 3 - multiplying two numbers
function multiply(a, b){
  return a * b;
}

//Grasshopper - Terminal game move function
function move (position, roll) {
  // return the new position
  return position + roll * 2
}
//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
//All Star Code Challenge #18
function strCount(str, letter){
  return str.split('').filter(x => x == letter).length ;
}
//Quarter of the year
const quarterOf = (month) => {
      if (month <= 3){
        return 1;
      }else if (month > 3 && month <= 6){
        return 2;
      }else if (month > 6 && month <= 9){
        return 3;
      }else{
        return 4;
      }

}
//Convert a string to an array
function stringToArray(string){

  return string.split(' ')

}
//Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};
//Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
//The highest profit wins!
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; // fix me!
}
//You only need one - Beginner
function check(a, x) {
  return a.filter(e => e == x)[0] == x;
}
//Count by X
function countBy(x, n) {
  let z = [];
  for (let i=1; i < n + 1; i++){
    z.push(i * x)
  }
  return z;
}
//L1: Set Alarm
function setAlarm(employed, vacation){
if (vacation){
  return false;
}else if(!employed && !vacation){
  return false;
}else{
  return true
}
}
//Sum Arrays
function sum (numbers) {
    "use strict";
   return numbers.length > 0 ? numbers.reduce((p,c) => p+c) : 0;

};
//Find the first non-consecutive number
function firstNonConsecutive (arr) {
  let k = null;
  for (let i=0;i<arr.length - 1; i++){
    if(arr[i+1] !== (arr[i] + 1)){
      k = arr[i+1];
      break;
    }else{
      k = null;
    }
  }
  return k;
}
//Invert values
function invert(array) {
   return array.map(x => -(x));
}
//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  return this.split(' ').map(capitalize).join(' ');
};
//Can we divide it?
function isDivideBy(number, a, b) {
  return number % a == 0 && number % b == 0;
}
//Opposites Attract
function lovefunc(flower1, flower2){
  return (flower1 % 2 == 0 && flower2 %2 !== 0) || (flower2 % 2 == 0 && flower1 %2 !== 0);
}
//Write Number in Expanded Form
function expandedForm(num) {
  let a = num.toString().split('');
  let b = a.map(Number);
  let c = [];
  console.log('b')
  for (let i = 0; i < b.length; i++){
    if (b[i] !== 0){
      let d = b[i] * Math.pow(10, b.length - i - 1);
      c.push(d);
    }
  }
  return c.join(' + ')
}
//Sort the odd
function sortArray(array) {
  let a = [];
  let b = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0){
      a.push(i);
      b.push(array[i]);
    }
  }
  b.sort(function(a, b){return a - b});
  for (let j = 0; j < a.length; j++){
    array[a[j]] = b[j];
  }
  return array;
}
//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints);
  let avg = classPoints.reduce((p, c) => (p + c)) / (classPoints.length);
  return yourPoints > avg;
}
//Square(n) Sum
function squareSum(numbers){
  if (numbers.length > 0){
    return numbers.map(e => e**2).reduce((p, c) => p + c);
  }else{
    return 0;
  }

}
//Find Maximum and Minimum Values of a List
var min = function(list){

    return Math.min(...list);
}

var max = function(list){

    return Math.max(...list);
}
//Convert a Boolean to a String
function booleanToString(b){
  return b == true ? 'true' : 'false';
}
//Categorize New Member
function openOrSenior(data){
  let o = [];
  for (let i = 0; i < data.length; i++){
    if (data[i][0] >= 55 && data[i][1] > 7){
      o.push('Senior');
    }else{
      o.push('Open');
    }
  }
  return o;
}
//Break camelCase
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1').trim();
}
//Odd or Even?
function oddOrEven(array) {
  if (array.length > 0){
    return array.reduce((p, c) => {return p + c}) % 2 == 0 ? 'even' : 'odd';
  }else{
    return 'even';
  }

}
//Switch it Up!
function switchItUp(number){
 switch(number){
     case 1:
     return 'One';
     break;
     case 2:
     return 'Two';
     break;
     case 3:
     return 'Three';
     break;
     case 4:
     return 'Four';
     break;
     case 5:
     return 'Five';
     break;
     case 6:
     return 'Six';
     break;
     case 7:
     return 'Seven';
     break;
     case 8:
     return 'Eight';
     break;
     case 9:
     return 'Nine';
     break;
     default:
     return 'Zero';
 }
}
//Testing 1-2-3
var number=function(array){
  if (array.length > 0){
    for (let i = 0; i < array.length; i++){
      array[i] = i + 1 +': '+array[i];
    }
    return array;
  }else{
    return [];
  }

}
//Convert a String to a Number!
const stringToNumber = function(str){
  // put your code here
  return Number(str);
}
//Total amount of points
function points(games) {
  let s = 0;
  for (let i = 0; i < games.length; i++){
    console.log(games[i].split(':')[0])
    if(games[i].split(':')[0] > games[i].split(':')[1]){
      s += 3;
    }else if(games[i].split(':')[0] == games[i].split(':')[1]){
      s += 1;
    }else{
      s = s;
    }
  }
  return s;
}
//Is he gonna survive?
function hero(bullets, dragons){
  return bullets >= dragons * 2;
}
//Will there be enough space?
function enough(cap, on, wait) {
  return cap - on > wait ? 0 : Math.abs(cap - on - wait);
}
//Sum Mixed Array
function sumMix(x){
  return x.map(Number).reduce((p, c) => p + c);
}
//Parse nice int from char problem
function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :)
  return Number(inputString[0])
}
//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (input && input.length > 0){
    let a = input.filter(e => e > 0);
    let b = input.filter(e => e < 0);
    return [a.length, b.reduce((p, c) => p + c)];
  }else{
    return [];
  }
}
//Removing Elements
function removeEveryOther(arr){
  let a = [];
  for (let i = 0; i < arr.length; i+=2){
    a.push(arr[i]);
  }
  return a;
}
//Beginner Series #2 Clock
function past(h, m, s){
  return h * 3600 * 1000 + m * 60 * 1000 + s * 1000;
}
//Beginner Series #3 Sum of Numbers
function getSum( a,b )
{
   if (a == b){
     return a;
   }else{
     let m = Math.min(a, b);
     let t = [];
     for (let i = 0; i < Math.abs(a - b) + 1; i++){
       t.push(m++);
     }
     return t.reduce((p, c) => {return p + c})
   }
}
//Friend or Foe?
function friend(friends){
  return friends.filter(e => {return e.length == 4})
}
//Beginner - Reduce but Grow
function grow(x){
  return x.map(Number).reduce((p, c) => {return p * c});
}
//Fake Binary
function fakeBin(x){
  let a = x.split('');
  console.log(a);
  for (let i = 0; i < a.length; i++){
    if (Number(a[i] < 5)){
      a[i] = 0;
    }else{
      a[i] = 1;
    }
  }
  return a.join('')
}
//Sum without highest and lowest number
function sumArray(array) {
  if (array == null || array == NaN || array == undefined || array == [] || array.length <= 1){
    return 0;
  }else{
    let a =  array.reduce((p, c) => {return p + c})
    return a - Math.min(...array) - Math.max(...array);
    }
}
//Two to One
function longest(s1, s2) {
  let s = [...s1.split(''), ...s2.split('')];
  let a = s.sort().join('');
  return Array.from(new Set(a.split(''))).join('');
}
//The Feast of Many Beasts
function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1])
}
