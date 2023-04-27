// Format number with spaces between thousands
function numberWithSpaces(number) {
  var parts = number.toFixed(2).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
