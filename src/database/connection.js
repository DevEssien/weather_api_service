class Database {
  constructor(DatabasePackage) {
    this.client = DatabasePackage;
    this.connectToDb();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance.client;
  }

  async connectToDb() {
    try {
      //code
    } catch (error) {
      console.log(error);
    }
  }
}

exports.isRedisWorking = () => {
  if (!Database.getInstance()) return false;
  return true;
}

exports.Database = Database;