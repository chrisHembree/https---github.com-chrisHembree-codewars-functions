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
  





