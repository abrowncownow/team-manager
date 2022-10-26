class Intern {
    constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.email = data.email;
      this.extra = data.extra;
      this.type = "Intern";
      this.emblem = "../dist/assets/images/intern.png"
    }
  }
  
  module.exports = Intern;