const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    

  return drivers.filter(n => n.toLowerCase() === name.toLowerCase());
}

console.log(findMatching(drivers, 'Bobby', 'Sammy')) 

function fuzzyMatch(drivers, letters) {
  return drivers.filter(d => d.startsWith(letters));
}

console.log(fuzzyMatch(drivers, 'Sa')); 
console.log(fuzzyMatch(drivers, 'y')); 
console.log(fuzzyMatch(drivers, 'mm'))




//  matchName = obj.drivers.filter(function (n){
//  return n.name == 'Bobby' &&
//         n.hometown == 'Pittsburgh'
// })

function matchName(drivers, name){
  return drivers.filter(n => n.name === name)
}

