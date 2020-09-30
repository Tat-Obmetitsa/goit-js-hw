const formatString = function (string, maxLength = 40) {
  let stringLength = string.split('');
  if (stringLength.length > maxLength) { stringLength.length = maxLength; return stringLength.join('') + '...'; } else { return stringLength.join(''); };
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));