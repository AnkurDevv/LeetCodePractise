var maximumUnits = function(B, T){
 B.sort((a,b) => b[1] - a[1])
 let ans = 0; 
 // eventually T becomes 0 which is falsy in JS resulting into break from for loop 
 for(let i= 0; T && i < B.length; i++){
  // math.min makes sure that remaining space is utilized as well in case 
  // count - T from prev step doesnt result in an exact 0 
  let count = Math.min(B[i][0], T) 
  console.log(count);
  ans += count * B[i][1]
  T -= count
 }
 return ans
}

console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));