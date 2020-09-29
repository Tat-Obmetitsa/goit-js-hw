const formatString = function (string, maxLength = 40) {
  let words = string.split("");
  if (words.length <= maxLength) { words = string } else if (words.length > maxLength) { words.splice(40, `...`) };
  return words;
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));