// Your Code Here
function joinArrayRemoveDuplicate(arrayA, arrayB) {
  let isiArrayA = arrayA.slice("");
  let isiArrayB = arrayB.slice("");
  // gabungan array A ke array B
  let oneArray = isiArrayA.concat(isiArrayB);
  // console.log(oneArray);

  // kondisi yang belom selesai
  let arr = [];
  for (let i = 0; i < oneArray.length; i++) {
    if (arr.indexOf(oneArray[i]) === -1) {
      arr.push(oneArray[i]);
    }
  }

  return arr;
}
// Test cases
console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
// ["samsung", "apple", "sony", "xiaomi"]

console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
// [“football”, “basketball”]
