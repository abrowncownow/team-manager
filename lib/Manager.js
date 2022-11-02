const Employee = require('./Employee');

class Manager extends Employee{
    constructor(data) {
      super(data.name, data.id, data.email);
      this.officeNumber = data.officeNumber;
      this.role = "Manager";
      this.emblem = "../dist/assets/images/manager.png";
    }
  }

  module.exports = Manager;