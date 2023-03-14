function convertToKhmerNumber(number) {
  const khmerNumbers = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  let result = "";
  const numString = number.toString();
  for (let i = 0; i < numString.length; i++) {
    const digit = parseInt(numString.charAt(i));
    result += khmerNumbers[digit];
  }
  return result;
}

export { convertToKhmerNumber };
