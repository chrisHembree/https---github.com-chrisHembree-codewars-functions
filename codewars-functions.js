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






