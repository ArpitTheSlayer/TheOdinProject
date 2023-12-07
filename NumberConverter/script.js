function convert() {
  let decimal = +document.getElementById("decimal").value;
  let binary = decimalToOthers(decimal, 2);
  let octadecimal = decimalToOthers(decimal, 8);
  let hexadecimal = decimalToOthers(decimal, 16);

  document.getElementById("binary").value = binary;
  document.getElementById("octadecimal").value = octadecimal;
  document.getElementById("hexadecimal").value = hexadecimal;
}

function decimalToOthers(decimal, base) {
  let result = "";
  while (decimal) {
    let bit = decimal % base;
    decimal = Math.floor(decimal / base);
    if (bit >= 10) {
      switch (bit) {
        case 10:
          bit = "A";
          break;
        case 11:
          bit = "B";
          break;
        case 12:
          bit = "C";
          break;
        case 13:
          bit = "D";
          break;
        case 14:
          bit = "E";
          break;
        case 15:
          bit = "F";
          break;
      }
    }
    result += `${bit}`;
  }
  return result.split("").reverse().join("");
}
