
/* Question: 1 */

function mindGame(number){  // this function will take a number as input and do some task like , multiply by 3, addition 10, divide by 2 , subtraction by 5 and finally return the result.
    if(typeof number !== 'number'){
        return 'Please enter a number.'
    }
let initialValue = (((number * 3) + 10) / 2) - 5 ;
return initialValue;
}
const input1 = 33;
const output1 = mindGame(input1);
console.log(output1);



/* Question: 2 */

function evenOdd(word) {   //this function will take a string as a input and count how many character are there in the string and if character is odd then it will return "Odd" , if the character is even it will return "Even".
    if (typeof word !== 'string') {
        return 'Please enter a string.'
    }
    let charLength = word.length;
    if(charLength % 2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
const input2 = 'Batch7';
const output2 = evenOdd(input2);
console.log(output2);



/* Question: 3 */

function isLGSeven(number) {   // this function will take a number as input and subtract 7 from it and check the result , it result is less than 7 then it will return the result, otherwise it will return the double of the result.
    if (typeof number !== 'number') {
        return 'Please enter a number.'
    }
    let difference = (number - 7);
    if(difference < 7){
        return difference;
    }
    else{
        return number * 2;
    }
}
const input3 = 15;
const output3 = isLGSeven(input3);
console.log(output3);



/* Question: 4 */

function findingBadData(array) {   // this function will take an array as input and check for negative value in the array and count the total negative value and give us the total number of negative value as result.
    let newArray = [];
    let checkArray = Array.isArray(array);
    if (checkArray !== true ) {
        return 'Please enter an array.';
    }

    for(i=0; i< array.length; i++){
        const element = array[i];
        if(element < 0){
            newArray.push(element);  
        }   
    }
    return newArray.length;  
}
const input4 = [-4, -9, -5, -33, -55];
const output4 = findingBadData(input4);
console.log(output4);



/* Question: 5 */

function gemsToDiamond(num1, num2, num3) {  // this function will take three number as input and do some task multiply and addition , then check it with 2000 and if result is less than 2000 then it will return the actual result as output. otherwise it will subtract 2000 from actual result and give it as output. 
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' ) {
        return 'Please enter a number.'
    }
    const firstFriendGems = num1 * 21;
    const secondFriendGems = num2 * 32;
    const thirdFriendGems = num3 * 43;

    const totalGems = firstFriendGems + secondFriendGems + thirdFriendGems;
    if(totalGems >= (1000*2)){
        return totalGems - 2000;
    }
    else{
        return totalGems;
    }
}
const output5 = gemsToDiamond(20, 200, 50);
console.log(output5);