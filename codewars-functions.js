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







































