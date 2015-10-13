var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeA =[]
var gradeB =[]
var gradeC =[]
var gradeD =[]
var gradeF =[]
//for highest and lowest
var highest = 0;
var lowest = 101;

for (var i = 0; i < scores.length; i++) {
  var grades = scores[i]

  //grab the grade
  //store it for highest and lowest
  //compare current grade to highest and lowest
  //if it's higher, that's the new high
  //same if it's lower

if (grades > highest) {
  highest = grades;
}
if (grades < lowest) {
  lowest = grades;
}



if (scores[i] > 91) {
    gradeA.push(grades);
} 
  else if (scores[i] > 81) {
    gradeB.push(grades);
} 
  else if (scores[i] > 71) {
    gradeC.push(grades);
}
  else if (scores[i] > 61) {
    gradeD.push(grades);
}
  else {
    gradeF.push(grades);
    
}
}

console.log(" There are " + gradeA.length + " A's ");
console.log(" There are " + gradeB.length + " B's ");
console.log(" There are " + gradeC.length + " C's ");
console.log(" There are " + gradeD.length + " D's ");
console.log(" There are " + gradeF.length + " F's ");
console.log(" The lowest grade was " + lowest);
console.log(" The highest grade was " + highest);


// //Using SWITCH statements instead of if/else (how i did)
//   switch (true) {
//     case (score < 61):
//     fs.push(score);
//     break;
//     case (score > 60 && score < 71):
//     ds.push(score);
//     break;
//     case (score > 70 && score < 81):
//     cs.push(score);
//     break;
//     case (score > 80 && score < 91):
//     bs.push(score);
//     break;
//     case (score > 90):
//     as.push(score);
//     break;
//   }



