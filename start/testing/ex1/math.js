// lesson taken from testingjvascript.com
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

async function sumAsync(a, b) {
  return sum(a, b);
}

async function subtractAsync(a, b) {
  return subtract(a, b);
}

module.exports = { sum, subtract, sumAsync, subtractAsync };
