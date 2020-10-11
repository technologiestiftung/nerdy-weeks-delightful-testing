function add(a, b) {
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

async function addAsync(a, b) {
  return add(a, b);
}

async function subtractAsync(a, b) {
  return subtract(a, b);
}

module.exports = { add, subtract, addAsync, subtractAsync };
