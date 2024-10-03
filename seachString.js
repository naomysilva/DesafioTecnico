function countLetterA(str) {
  return str.toLowerCase().split("a").length - 1;
}

let string = prompt("Informe uma string: ");
let count = countLetterA(string);

if (count > 0) {
  console.log(`A letra 'a' ocorre ${count} vez(es) na string.`);
} else {
  console.log("A letra 'a' não ocorre na string.");
}
