function countSheeps(arrayOfSheep) {

    let numberOfSheep = 0
    for( let i=0;i<arrayOfSheep.length;i++){
      if(Boolean(arrayOfSheep[i]) === true){
        numberOfSheep += 1
      }
      
    }
    return numberOfSheep;
    
  }

........................................................................


function paperwork(n, m) {
    if (n < 0) {
      return 0;
  } else if (m < 0) {
      return 0;
  } else {
      return n * m;
  }
  }


  ........................................................................


  function betterThanAverage(classPoints, yourPoints) {

    const classAverage = classPoints.reduce((acc, ind)=> acc + ind, 0)/classPoints.length;
    
    if (classAverage >= yourPoints){
    return false}
    else {return true}
    
      
      }


........................................................................


function booleanToString(b){
    if(b === true){
      return "true";
    }else{
      return "false";
    }
  }


  ........................................................................

  function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++) {
      if(haystack[i] === 'needle') return `found the needle at position ${i}`;
    }
  }



//   better but not mine

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }
  ........................................................................


  function smash (words) {
    return words.join(" ")};

    ........................................................................


    function setAlarm(employed, vacation){

        if (employed == true && vacation == false)
        
        {return true}
        else
          {return false}
      }


      ........................................................................

// chatgpt solution

function queuetime(customers, n) {
    let tillstotalTime = []
    let tillOccupants = []
    let currentQueue = customers

   function initializeTills() {
        for ( i = 0; n > 0; i++) {
        tillOccupants[i] = currentQueue[i]
        currentQueue.splice(i, 1)
    }
}

initializeTills()

while (currentQueue!== []) {
    tillOccupants.forEach((occupant) => {
    if (tillOccupants[tillOccupants.indexOf(occupant)] > currentQueue[0]) {
        tillstotalTime[tillOccupants.indexOf(occupant)] == tillOccupants[tillOccupants.indexOf(occupant)]
        tillOccupants[tillOccupants.indexOf(occupant)] = currentQueue[0]
        currentQueue.splice(0, 1)
    }
} )
}
return Math.max(tillstotalTime)
}
,,,,,,,,

function queueTime(customers, n) {
  let tillsTotalTime = new Array(n).fill(0);

  for (let i = 0; i < customers.length; i++) {
    let minIndex = tillsTotalTime.indexOf(Math.min(...tillsTotalTime));
    tillsTotalTime[minIndex] += customers[i];
  }

  return Math.max(...tillsTotalTime);
}
........................................................................

function queueTime(customers, n) {
    let tillsTotalTime = new Array(n).fill(0);
  
    for (let i = 0; i < customers.length; i++) {
      let minIndex = tillsTotalTime.indexOf(Math.min(...tillsTotalTime));
      tillsTotalTime[minIndex] += customers[i];
    }
  
    return Math.max(...tillsTotalTime);
  }


  ........................................................................

  function solution(a, b){
 
    if (a.length > b.length) return `${b}${a}${b}`;
    if (b.length > a.length) return `${a}${b}${a}`;
      
    }
  


    ........................................................................

    function makeUpperCase(str) {return str.toUpperCase();}


    ........................................................................

    function stringToArray(string){
      return string.split(' ');
    }

    ........................................................................

    function sayHello(name) {
      return `Hello, ${name}`
    }

    ........................................................................

    function position(letter){

      const alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
       
      const position = alphabet.indexOf(letter) + 1;
      
      
      return "Position of alphabet: " + position.toString();  
        
      }

    ........................................................................

    function findAverage(array){
      if (array.length === 0) return 0
      const sum  = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
      const average = sum/array.length
      return average;
    }
    



    ........................................................................

    function findAverage(array){
      if (array.length === 0) return 0
      const sum  = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
      const average = sum/array.length
      return average;
    }
    

    ........................................................................


    function hero(bullets, dragons){
      if(bullets >= dragons*2)
        return true;
      else 
        return false;
    }

    ........................................................................



    function noBoringZeros(n) {
      let newString = n.toString();
    
      if (newString === "0")
        {return 0}; 
      
      
       for (let i = newString.length - 1; i >= 0; i--) {
        if (newString[i] === "0") {
          newString = newString.slice(0, i); 
        } else {
          break;
        }
      }
      
    
      return parseInt(newString);
    }

    ........................................................................

    function reverseList(list) {
      return list.reverse();
    }

    ........................................................................

    function strCount(str, letter){  
  
      let aNumber = 0
      
      for (let i = 0; i < str.length; i++) 
          if (str[i] === letter) 
            { aNumber ++}
      
      return aNumber
      
      
    } 
    ........................................................................

    function enough(cap, on, wait) {

      let sum = (cap - on);
       
      let waitList = wait - sum;
        
        if (waitList > 0)
        {return waitList}
        else {return 0};
        
        
      }



      ........................................................................
function pipeFix(numbers){
  
  let alpha = numbers[0];
  let omega = numbers[numbers.length -1];
   let newArray = []
       
  for (let i = alpha; i <= omega; i++){
    
      newArray.push(i);
  }
            
  return newArray
   
   
}
  
........................................................................
function getRealFloor(n) {
  if (n > 0 && n < 13) {
    return n-1;
} 
  if (n >= 13) {
    return n-2; 
}
  if (n <= 0){
    return n;
  }
}

........................................................................

function shortcut(string) {
  let newString = string.split(''); 
  
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "a" || newString[i] === "e" || newString[i] === "i" || newString[i] === "o" || newString[i] === "u") {
      newString.splice(i, 1); 
      i--; 
    }
  }

  return newString.join(''); 
} 

chatgpt refactor

function shortcut(string) {
  return string.replace(/[aeiou]/gi, '');
}

// In this version, the replace() method uses a regular expression [aeiou] to match any occurrence of the lowercase vowels "a", "e", "i", "o", or "u" in the input string (string). The /g flag makes the replacement global, meaning it replaces all occurrences of the matched characters, not just the first one. The /i flag makes the match case-insensitive, so both lowercase and uppercase vowels will be removed.

// The second argument of replace() is an empty string '', which effectively removes the matched vowels from the string.

........................................................................

function addLength(str) {
  
  let newString = str.split(" ");
                                                                                                                
 return newString.map((word) => word + " " + word.split("").length );
    
}

........................................................................
kyle calculated the 2 for 1 mangos kata

function mango(quantity, price){

  if (quantity % 3 !== 0)
   {return Math.floor(((quantity)-(quantity%3))*2/3*price) + (((quantity % 3)  ) * price) }
 else

 {return quantity*(2/3)*price}

}

........................................................................

function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    if (Number.isInteger(x) || Number(x) % 1 !== 0) {
      return "Who ate the last cookie? It was Monica!";
    }
  }
  return "Who ate the last cookie? It was the dog!";
}






........................................................................


function contamination(text, char){
  return char.repeat(text.length)
}



........................................................................


function binToDec(bin){
  return parseInt(bin,2);
}
........................................................................
function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}
........................................................................

function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}
........................................................................
function opposite(number) {

  return (-number);
  
}
........................................................................

var summation = function (num) {

  let newArray = []

  for (let i = 1; i <= num; i++){
     newArray.push(i);
}
const sum = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
         
return sum
    }

    
........................................................................

function reverseSeq(n) {
  

  let newArray = []

  for (let i = n; i >= 1; i--){
     newArray.push(i);
}
           
return newArray
    }


    ........................................................................


function isPalindrome(x) {
  const lowerCaseX = x.toLowerCase();
  const reversedStr = lowerCaseX.split('').reverse().join('');
  
  if (lowerCaseX === reversedStr)
    {return true}
  else
    {return false};
}
  



    ........................................................................

    class SmallestIntegerFinder {
  
      findSmallestInt(args) {
        
         return Math.min(...args);
            
      }
    }



    ........................................................................

    function arrayPlusArray(arr1, arr2) {
    
      return arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0) + arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       
    }



    ........................................................................


    function greet(name){
 
      if(name === "Johnny")
        return "Hello, my love!";
      else
         return "Hello, " + name + "!";
      
    }





    ........................................................................


    function DNAtoRNA(dna) {
  
      return dna.replace(/T/g, "U");
     
     }
     



    ........................................................................


    function makeNegative(num) {
      if (num > 0) {
        return -num;
      } else {
        return num;
      }
    }



    ........................................................................


    function unusualFive() {
 
      let numberFive = "seven";
      let newArray = numberFive.split('')
      return numberFive.length
      
    }





    ........................................................................

    function litres(time) {
  
      let totalWater = time * 0.5
      
      return Math.floor(totalWater);
        
    }




    ........................................................................


    function litres(time) {
    
      return Math.floor(time * 0.5);
        
    }


    ........................................................................

    function updateLight(current) {
  
      if (current == "green")
        {return "yellow"}
      if (current == "yellow")
        {return "red"}
      if (current == "red")
        {return "green"};
      
      }

    ........................................................................






    ........................................................................






    ........................................................................




    ........................................................................




    ........................................................................






    ........................................................................