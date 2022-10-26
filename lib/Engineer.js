class Engineer {
    constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.email = data.email;
      this.extra = data.extra;
      this.type = "Engineer";
      this.emblem = "../dist/assets/images/engineer.png"
    }
  }
  
  module.exports = Engineer;