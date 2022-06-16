function inverter(palavra) {
  var splitP = palavra.split("");
  var result = [];
  index = splitP.length - 1;
  while (index >= 0) {
    result.push(splitP[index]);
    index--;
  }
  return result.join("");
}

console.log(inverter("hello"));
