const Employee = require('./Employee');

class Intern extends Employee{
    constructor(data) {
      super(data.name, data.id, data.email)
      this.extra = `School: ${data.school}`;
      this.school = data.school;
      this.role = "Intern";
      this.emblem = "../dist/assets/images/intern.png"
    }
    getSchool(){
      return this.school;
    }
  }
  
  module.exports = Intern;