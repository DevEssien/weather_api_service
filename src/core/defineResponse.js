exports.defineResponse = function(data = {}) {
  return {
    status: "OK",
    statusCode: 200,
    message: data.message,
    data: data.data
  }

}