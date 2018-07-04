/**
 * Display the current year
 */
module.exports = function TheYear() {
  const date = new Date();
  return date.getFullYear();
}
