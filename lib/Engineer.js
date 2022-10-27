const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(data) {
      super(data.name, data.id, data.email);
      this.github = data.github;
      this.extra = `Github: <a href="http://github.com/${data.github}">@${data.github}</a>`;
      this.role = "Engineer";
      this.emblem = "../dist/assets/images/engineer.png"
    }
    getGithub(){
      return this.github
    }
  }
  
  module.exports = Engineer;