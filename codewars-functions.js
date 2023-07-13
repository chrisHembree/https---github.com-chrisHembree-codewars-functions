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



    ........................................................................























