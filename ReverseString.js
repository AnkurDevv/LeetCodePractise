function stringReversal(str){
 var r = "";
 for(var i= str.length -1; i>=0; i--){
  r += str.charAt(i);
 }
 return r;
}

stringReversal("abc"); // expected out cba