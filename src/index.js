module.exports = function multiply(first, second) {
  var product = BigInt(first) * BigInt(second);
  return product.toString();
}
