/*If statements
If statments are a way for our applications to take different paths through our code or make choices about what kind of behavior our application takes based on certain conditions or values in our variables. The variable or value that we are testing to be true is known as the condition.*/
/*In Human: If this condition is true, do something.*/

var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
}
/*If/Else Statements
If/Else statments have the same behavior as our if statement above but we can add a secondary condition in the case that our if statement is not true to take another action instead. What if our light is already turned off when we flip the switch?

In Human: If this condition is true, do something, else if it is false, do something else.*/

var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
  else{
    isTurnedOn = true;
  }
}
/*For loops
Sometimes we want to loop over a collection of data stored in an Arrayor inspect each character in a String. Or we just want to execute a block of code a set number of times before continuing on with the execution of our program. For loops allow us to execute a block of code and at the end of each iteration of our for loop we will evaluate a condition to determine if our loop should run again similar to our if statment.

Our for loop is made up of 3 parts: 1. Variable initialization 2. Termination condition 3. Afterthought

In Human: While our variable i is less than the size of our Array retrieve each element in the Array. At the end of each loop add 1 to the current value of i.*/

var lotteryNumbers = [0, 23, 12, 55, 2, 44, 65];
for(var i = 0; i < lotteryNumbers; i++){
  var currentLotteryNumber = lotteryNumbers[i];
  checkWinningNumber(currentLotteryNumber);
}

function makeCrazyLongString(string){
  var outputString = "";
  for(var i =0; i < 100; i++){
    outputString = outputString.concat(string);
  }
}
/*makeCrazyLongString('taco');
Function - youGetTaco
Write a function that takes a single String parameter called action. If the value passed into our function is eathave the function return the String value EAT TACOS.
*/

function youGetTaco(action){
  if(action === "eat"){
    return "Eat Tacos";
  }
}
youGetTaco();

console.log('youGetTaco eat:', youGetTaco("eat"));
console.log('youGetTaco drink:', youGetTaco("drink"));



/*function youGetTaco(action){
  if(action === "eat"){
    return "EAT TACOS";
  }
}

console.log(youGetTaco("eat"));
console.log('function youGetTaco("eat"): ' + youGetTaco("eat"));
console.log('function youGetTaco("drink"): ' + youGetTaco("drink"));*/



/*function youGetTaco(action){
  if(action === "eat"){
    return "EAT TACOS";
  }
}
console.log('\nyouGetTaco: ' + youGetTaco('eat'));
*/
/*Function - isNumberGreaterThan
Write a function that takes two variables of type Number called first and secondrespectively. Return true if the first number is greater than the second.*/

function isNumberGreaterThan(first, second){
  if(first > second){
    return true;
  }else{
    return false;
  }
}
console.log('isNumberGreaterThan', isNumberGreaterThan(2, 1));
console.log('isNumberGreaterThan', isNumberGreaterThan(3, 4));



/*function isNumberGreaterThan(first, second){
 if(first > second){
  return true;
 }else{
  return false;
 }
}
console.log('isNumberGreaterThan(3,2): ' + isNumberGreaterThan(3,2));
console.log('isNumberGreaterThan(2,3): ' + isNumberGreaterThan(2,3));*/


/*function isNumberGreaterThan(first, second){
  if(first>second){
    return true;
  }
}

console.log(isNumberGreaterThan(3,2));
console.log('function isNumberGreaterThan(3,2): ' +isNumberGreaterThan(3,2));
console.log('function isNumberGreaterThan(1,2): ' +isNumberGreaterThan(1,2));
*/

/*function isNumberGreaterThan(first, second){
  if(first > second){
    return true;
  }else{
    return false;
  }
}
console.log('\nisNumberGreaterThan: ' + isNumberGreaterThan(3,2));*/


/*Function - isTrue
Write a function that takes in a Boolean value named val and have the function return whether the value is true.*/

function isTrue(val){
 if(val === "doggy"){
  return true;
 }

}
console.log('isTrue', isTrue("doggy"));
console.log('isTrue', isTrue("cat"));

/*function isTrue(val){
  if(val === true){
    return true;
  }
}
console.log(isTrue(true));
console.log('function isTrue(true): ' + isTrue(true));
console.log('function isTrue(false): ' + isTrue(false));*/


/*function isTrue(val){
  if(val === 1){
    return true;
  }else{
    return false;
  }
}
console.log('\nisTrue: ' + isTrue(1));*/


/*Function - isFalse
Write a function that takes in a Boolean value named val and have the function return whether the value is false.*/

function isFalse(val){
  if(val === "vegan pizza"){
    return false;
  }
}
console.log('isFalse', isFalse("vegan pizza"));

/*function isFalse(val){
  if(val === false){
    return false;
  }
}
console.log(isFalse(false));
console.log('isFalse(false): ' + isFalse(false));
console.log('isFalse(true): ' + isFalse(true));*/

/*function isFalse(val){
  if(val > 1){
    return false;
  }else{
    return true;
  }
}
console.log(isFalse(2));*/

/*Function - isEqual
Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.*/

function isEqual(firstWord, secondWord){
  if(firstWord === secondWord){
    return 'AWWWWRIGHT';
  }else{
    return 'Y U NO MATCH!';
  }

}
console.log('isEqual', isEqual("dog", "cat"));
console.log('isEqual', isEqual("dog", "dog"));


/*function isEqual(firstWord, secondWord){
  if(firstWord === secondWord){
    return "AWWWWRIGHT";
  }else{
    return "Y U MATCH!";
  }
}
console.log(isEqual("cats", "cats"));
console.log('isEqual("cats", "cats"): ' + isEqual("cats", "cats"));*/


/*function isEqual(firstWord, secondWord){
  if(firstWord === secondWord){
    return "AWWWWRIGHT";
  }else{
    return "Y U NO MATCH!";
  }
}
console.log(isEqual("ducky", "squishy"));*/


/*Function - isNotEqual
Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'.*/

/*function isNotEqual(firstWord, secondWord){
  if(firstWord !== secondWord){
    return "AWWWWRIGHT";
  }else{
    return 'Y U MATCH';
  }
}

console.log(isNotEqual("dog", "cat"));
console.log('isNotEqual("dog", "cat"): ' + isNotEqual("dog", "cat"));*/

/*function isNotEqual(firstWord, secondWord){
  if(firstWord != secondWord){
    return "AWWWWRIGHT";
  }else{
    return "Y U NO MATCH!";
  }
}
console.log(isNotEqual("ducky", "squishy"));*/

/*Function - doubleEquals
Write a function that takes two variables of type Boolean called first and secondrespectively. Return true if both values are true otherwise return false.*/

function doubleEquals(first, second){
  if(first && second === true){
    return true;
  }else{
    return false;
  }
}
console.log('doubleEquals', doubleEquals("dog", "Dog"));
console.log('doubleEquals', doubleEquals(2>1, 3>2));


/*function doubleEquals(first, second){
  if(first && second === true){
    return true;
  }else{
    return false;
  }
}
console.log('doubleEquals(true, true): ' + doubleEquals(true, true));
console.log('doubleEquals(true, false): ' + doubleEquals(true, false));*/


/*function doubleEquals(first, second){
 if(first && second === true){
  return true;
 }else{
  return false;
 }
}
console.log(doubleEquals(true, true));
console.log('doubleEquals(true, true): ' + doubleEquals(true, true));
console.log('doubleEquals(true, false): ' + doubleEquals(true, false));*/
/*function doubleEquals(first, second){
  if(first > 2 || second < 2 ){
    return true;
  }else{
    return false;
  }
}
console.log(doubleEquals(3, 1));*/

/*Function - totalOver30
Write a function that takes three variables of type Number called first and second and third respectively. Return true if the sum of all values are greater than 30 otherwise return false.*/

function totalOver30(first, second, third){
  if(first + second + third > 30){
    return true;
  }else{
    return false;
  }
}

console.log(totalOver30(10, 20, 50));
console.log('totalOver30(10, 20, 50): ' + totalOver30(10, 20, 50));
console.log('totalOver30(1, 2, 5): ' + totalOver30(1, 2, 5));

/*function totalOver30(first, second, third){
  if(first + second + third > 30){
    return true;
  }else{
    return false;
  }
}
console.log('\ntotalOver30: ' + totalOver30(1, 2, 3));*/

/*Function - totalUnderWhat
Write a function that takes four variables of type Number called first and second and third and fourth respectively. Return true if the sum of first, second and third are less than fourth otherwise return false.*/

function totalUnderWhat(first, second, third, fourth){
  if((first + second + third) < fourth){
    return true;
  }else{
    return false;
  }
}
console.log(totalUnderWhat(1, 2, 3, 10));
console.log('totalUnderWhat(1, 2, 3, 10): ' + totalUnderWhat(1, 2, 3, 10));
console.log('totalUnderWhat(10, 2, 3, 10): ' + totalUnderWhat(10, 2, 3, 10));


/*function totalUnderWhat(first, second, third, fourth){
  if((first + second + third) < fourth){
    return true;
  }else{
    return false;
  }
}
console.log('totaUnderWhat: ' + totalUnderWhat(1,6,8,8));*/

/*Function - looptoNumber
Write a function that takes in a Number value named limit and have the function write a for loop that loops the number of times of limit and console.log each number as the loop executes.*/

function looptoNumber(limit){
  for(var i = 0; i<limit; i++){
    console.log('team: ' + i);
  }
}
looptoNumber(5);


/*function looptoNumber(limit){
  for(var i = 0; i<limit; i++){
    console.log(i);
    console.log('team: ' + i);
  }
}
looptoNumber(5);*/


/*function looptoNumber(limit){
  for(var i = 0; i<limit; i++){
    console.log("cohort " + i);
  }
}
looptoNumber(9);*/

/*Function - showEachValue
Write a function that takes in a Array value named characters that has a sequence of single character String values and have the function write a for loop that loops for each number of elements in the Array and console.log each character as the loop executes.*/

/*var arr = ["a", "b", "c"];

function showEachValue(characters){
  for(var i = 0; i<characters.length; i++){
    var currentCharacter = characters[i];
    console.log(currentCharacter);
  }
}
showEachValue(arr);*/
 

var word = ["a", "b", "c"];

function showEachValue(characters){
 for(var i = 0; i<characters.length; i++){
  console.log(characters[i]);
 }
}
showEachValue(word);
showEachValue("cats");


/*function showEachValue(characters){
  for(var i = 0; i<characters.length; i++){
    console.log(characters[i]);
  }
}
 
showEachValue("dogggie");*/

/*Function - createArrayFromString
Write a function that takes a single variable of type String called word and write a for loop that creates an Array made up of each character in word except for A. We don't want no stinking A in our Array. Note: You will need to use the Array.push() method to complete this function.*/

var phrase = "He ate Apple Jacks all day.";
var arrayNoA = [];

function createArrayFromString(word){
 for(var i = 0; i<word.length; i++){
  var currentLetter = word.charAt(i);
  if(currentLetter[i] !=="A" && currentLetter[i] !== "a"){
    arrayNoA.push(currentLetter);
  }
 }
 return arrayNoA;
}
console.log('createArrayFromString',createArrayFromString(phrase));

/*var phrase = "All apples are awesome";
var letterArray = [];*/

/*function createArrayFromString(word){
  for(var i = 0; i<word.length; i++){
    if(word[i] != "A" && word[i] != 'a'){
      letterArray.push(word[i]);
    }
  }

}
console.log('createArrayFromString(phrase): ' + createArrayFromString(phrase));*/


/*var phrase = "All apples are awesome";
var letterArray = [];*/

/*function createArrayFromString(word){  
 for(var i = 0; i<word.length; i++){
  var currentLetter = word.charAt(i);*/ //charAt() method that returns the character at the specified index in a string
/*if(currentLetter !== "A" && currentLetter !== 'a'){
    letterArray.push(currentLetter);
  }
 }
  return letterArray;
}
console.log(createArrayFromString(phrase));*/

//create a word variable
/*var phrase = "An apple a day keeps...";

function createArrayFromString(word){
  var letterArray = []; //to store characters from var phrase
  for(var i = 0; i<word.length; i++){
    var currentLetter = word.charAt(i); //charAt() method returns the character at the specified index in a string
    if(currentLetter !== 'A' && currentLetter !== 'a'){ //currentLetter cannot equal to 'A' and 'a'
      letterArray.push(currentLetter); // push() method adds new items to the end of an array, in this example it will push all letters that aren't 'A' or 'a' into the letterArray [];
    }
  }
    return letterArray;
}
var newLetterArray = createArrayFromString(phrase);
console.log(newLetterArray);
*/
/*Function - greatSummator
Write a function that takes an Array with any number of type Number and write a for loop to add all numbers in the Array and return the sum.*/

var numbersArray = [3, 4, 5];
var sums = 0;

function greatSummator(num){
  for(var i = 0; i<num.length; i++){
    sums += num[i];
  }
  return sums;
}
console.log('greatSummator(): ' + greatSummator(numbersArray));


/*var numbersArray = [3, 3, 3];
var sumNumber = 0;

function greatSummator(number){  
  for(var i = 0; i<number.length; i++){
    sumNumber += number[i]; 
  }
  return sumNumber;
}
console.log(greatSummator(numbersArray));*/

/*var arrayNumbers = [1, 2, 3, 4, 5];
var newNumber = 0;

function greatSummator(number){
  for (var i = 0; i<number.length; i++){
   newNumber += number[i];
  }

  return newNumber;
  /*console.log('greatSummator: ' + newNumber);
}
console.log('greatSummator: ' + greatSummator(arrayNumbers));*/


/*Function - totalUnderWhatFor
Write a function that takes an Array with any number of type Number and second variable called total. Return true if the sum of all values in the Array are less than total otherwise return false.*/

var numArr = [2, 6, 8];
var sum = 0;
var totalNum = 20;

function totalUnderWhatFor(number, total){
  for(var i = 0; i<number.length; i++){
    sum +=number[i];
}
 return (sum < total);
}
console.log(totalUnderWhatFor(numArr, totalNum));

/*var array = [1, 2, 3, 4, 5];
var totalNum = 10;
var sum = 0;

function totalUnderWhatFor(arr, total){
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return (sum < total);
}

console.log(totalUnderWhatFor(array, totalNum));*/


/*function totalUnderWhatFor(numbers){
  var sum = 0; 
  for (var i = 0; i<numbers.length; i++){
    sum += numbers[i];
    if(sum < total){
      console.log('true');
    }else{
      console.log('false');
    }
  }
  return sum;
}

var total = 14;
var sumNumber = [1, 4, 3, 2];

console.log(totalUnderWhatFor(sumNumber));*/




/*Function - checkTrueValues
Write a function that takes an Array with any number of type Boolean values and write a for loop to call our isTrue function with each value as input and return true if all values return true from our isTrue function.*/



/*var booArr = [true, true, false];

function checkTrueValues(arr){
  for(var i =0; i<arr.length; i++){
    var result = isTrue(arr[i]);
    if(result === false){
      return false;
    }
  }
  return true;
}
checkTrueValues(booArr);*/

/*function isTrue (bool){
  return bool === true;
}

var someArr = [true, false, true];
var someArr2 = [true, true, true];

function checkTrueValues(arr){
 for(var i = 0; i <arr.length; i++){
 
  if(!isTrue(arr[i])){ 
    return true;
  }
 }
 return false;
}
console.log(checkTrueValues(someArr));
console.log(checkTrueValues(someArr2));*/

var boolArr = [true, false, true];
var boolArr2 = [true, true, true];

function checkTrueValues(arrayOfBools){
  var result = true;
  for(var i = 0; i<arrayOfBools.length; i++){
    if(!isTrue(arrayOfBools[i])){ //! not 
      return false;
    }
  }
  return result;
}
console.log(checkTrueValues(boolArr));
console.log(checkTrueValues(boolArr2));


/*function checkTrueValue(arr){
  for(var i = 0; i<arr.length; i++){
    var result = isTrue(arr[i]);*/
    /*console.log(result);*/
    /*if(result === false){
      return false;
    }

  }
  return true;
}

console.log(checkTrueValue([true, true, false, true]));*/