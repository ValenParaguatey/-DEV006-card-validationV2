const validator = {
  // ...
  isValid: function (tarjetaNum) {
    let sum = 0;
    let sumDoubled = 0;
    
    for (let i = tarjetaNum.length - 1; i >= 0; i--) {
      let actualDigit = parseInt(tarjetaNum.charAt(i));
      if((tarjetaNum.length-i) % 2 === 0) {
        if ((actualDigit *=2) > 9) actualDigit -=9;
        sumDoubled += actualDigit;
      } else {
        sum += actualDigit;
      }
    }
    const totalSum = sumDoubled + sum;
    console.log(totalSum);
    return totalSum % 10 === 0
  },

  maskify: function (tarjetaNum) {
    tarjetaNum = tarjetaNum.replace(/\s/g, '');
    // Ocultando todos los números excepto los últimos cuatro
    let maskedNumber = "";
    for (let i = 0; i < tarjetaNum.length - 4; i++) {
      maskedNumber += "#";
    }
    maskedNumber += tarjetaNum.substring(tarjetaNum.length - 4);
  
    return maskedNumber;
  }
};

export default validator;