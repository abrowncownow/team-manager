
class Manager{
    constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.email = data.email;
      this.officeNumber = data.officeNumber;
      this.role = "Manager";
      this.emblem = "../dist/assets/images/manager.png";
    }
  }

  module.exports = Manager;