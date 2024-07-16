// return masked string
function maskify(cc) {
    // If the string length is less than or equal to 4, return the string as is
     if (cc.length <= 4) {
       return cc;
     }
     // Mask all characters except the last four
     return '#'.repeat(cc.length - 4) + cc.slice(-4);
   }