const { AuthenticationError } = require("../libs/exceptions");

class Test {
  static sample() {
    throw new AuthenticationError('User not authenticated')
  }
}
exports.Test = Test;