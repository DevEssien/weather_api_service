const hash = require('object-hash');

exports.currentDate = function() {
  const dateNow = Date.now();
  const date = new Date(dateNow);
  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

exports.requestToKey = async function(req) {
  const requestDataToHash = {
    query: req.query,
    body: req.body
  }
  return `${req.url}@${hash.sha1(requestDataToHash)}`
}