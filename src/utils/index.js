exports.currentDate = function() {
  const dateNow = Date.now();
  const date = new Date(dateNow);
  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}