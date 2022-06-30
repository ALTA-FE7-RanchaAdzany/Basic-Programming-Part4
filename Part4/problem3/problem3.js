function joinArrayRemoveDuplicate(arrayA, arrayB) {
  // Your Code Here
  let result = [...arrayA, ...arrayB];
  return result;
}

console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));

// module.exports = joinArrayRemoveDuplicate;
