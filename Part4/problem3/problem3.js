// Your Code Here
var array = ["apel", "anggur", "lemon", "leci", "nanas"];
function joinArrayRemoveDuplicate(arrayA) {
  var joinArrayRemoveDuplicate = [];

  for (var i = 0; i < arrayA.length; i++) {
    if (joinArrayRemoveDuplicate.indexOf(arrayA[i]) === -1) {
      joinArrayRemoveDuplicate.push(arrayA[i]);
    }
  }
  return joinArrayRemoveDuplicate;
}

var array2 = ["samsung", "apple", "apple", "sony", "xiaomi"];
function joinArrayRemoveDuplicate(arrayA) {
  var joinArrayRemoveDuplicate = [];

  for (var i = 0; i < arrayA.length; i++) {
    if (joinArrayRemoveDuplicate.indexOf(arrayA[i]) === -1) {
      joinArrayRemoveDuplicate.push(arrayA[i]);
    }
  }
  return joinArrayRemoveDuplicate;
}

var array3 = (["football", "basketball"], ["basketball", "football"]);
function joinArrayRemoveDuplicate(arrayA) {
  var joinArrayRemoveDuplicate = [];

  for (var i = 0; i < arrayA.length; i++) {
    if (joinArrayRemoveDuplicate.indexOf(arrayA[i]) === -1) {
      joinArrayRemoveDuplicate.push(arrayA[i]);
    }
  }
  return joinArrayRemoveDuplicate;
}

var joinArrayRemove = joinArrayRemoveDuplicate(array);
console.log(joinArrayRemove);
var joinArrayRemove = joinArrayRemoveDuplicate(array2);
console.log(joinArrayRemove);
var joinArrayRemove = joinArrayRemoveDuplicate(array3);
console.log(joinArrayRemove);

// console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
// console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
// console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));

// module.exports = joinArrayRemoveDuplicate;
