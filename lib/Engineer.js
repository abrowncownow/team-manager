class Engineer {
    constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.email = data.email;
      this.extra = `Github: <a href="http://github.com/${data.extra}">@${data.extra}</a>`;
      this.type = "Engineer";
      this.emblem = "../dist/assets/images/engineer.png"
    }
  }
  
  module.exports = Engineer;