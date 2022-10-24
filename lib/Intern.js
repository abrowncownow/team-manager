class Manager {
    constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.email = data.email;
      this.number = data.number;
      this.type = "Manager";
      this.emblem = "../dist/assets/images/manager.png"
    }
  }
  
  module.exports = Manager(data);