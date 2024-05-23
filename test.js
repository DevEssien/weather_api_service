const cur = Date.now();
const date  = new Date(cur);
console.log(date.getDate());

function currentDate() {
  const dateNow = Date.now();
  const date = new Date(dateNow);
  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}
console.log(currentDate());