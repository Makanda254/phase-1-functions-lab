// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance-42)   
}

function distanceFromHqInFeet(distance) {
    const blocks=distanceFromHqInBlocks(distance);
    const feetPerBlock = 264;
    return blocks * feetPerBlock

    /*if(distance > 42){
        //return ((distance - 42)*264);
    }else if(distance < 42){
        //return ((42 - distance)*264);   
   }*/
}

function distanceTravelledInFeet(start, destination) {
    
    const startDistance = distanceFromHqInFeet(start)
    const destinationDistance = distanceFromHqInFeet(destination)

    return Math.abs(startDistance-destinationDistance)

    /*if (destination > start){
        return ((destination - start)*264);
    }else if(destination < start){
        return ((start - destination)*264);
    }*/
  }

  function calculatesFarePrice(start, destination) {
    let distance= distanceTravelledInFeet(start, destination)

   if(distance <= 400){
    return 0;
   }else if(distance > 400 && distance <= 2000){
    return ((distance-400)*2/100);
   }else if(distance > 2000 && distance < 2500){
    return 25;
   }else if(distance > 2500){
    return "cannot travel that far"
   }
  }

console.log(distanceFromHqInBlocks(89))

console.log(distanceFromHqInFeet(89))

console.log(distanceTravelledInFeet(89, 70))

console.log(calculatesFarePrice(89, 70))





