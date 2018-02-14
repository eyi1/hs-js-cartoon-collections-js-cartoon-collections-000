function dwarfRollCall(dwarves) {
var rollCall = "";
for(var i = 0; i<dwarves.length; i++){
  rollCall += [i+1] + ". " + dwarves[i] + " ";
}
return rollCall
}

function summonCaptainPlanet(planeteerCalls){
var array = [];
for(var i =0; i<planeteerCalls.length; i++){
  array.push(planeteerCalls[i].toUpperCase() + "!")
}
return array;
}

function longPlaneteerCalls(words) {
  var result = "";
  for (var i =0; i<words.length; i++){
    if (words.length > 4){
      result = true
    }else{
        result = false
      }
    }
return result;
  }




function findTheCheese (foods) {
  for (var i =0; i<foods.length; i++){
    if(foods[i] === "cheddar"){
      return "cheddar"
    }
  }
      return "no cheese!"
}
