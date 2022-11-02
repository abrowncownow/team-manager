const Engineer = require('../lib/Engineer');

const engData = {
    name: "Steve",
    id: 123,
    email: "steve@company.com",
    github: "guysteve",
    }

describe("Engineer", () => {
  describe("name", () => {
    it("should create an object containing a name", () => {
      
        const engineer = new Engineer(engData);

        expect(engineer.name).toBe("Steve");

    })
    it("should create an object containing an id", () => {
      
        const engineer = new Engineer(engData);

        expect(engineer.getId()).toEqual(123);

    })
    it("should create an object containing an email", () => {
      
        const engineer = new Engineer(engData);

        expect(engineer.getEmail()).toBe("steve@company.com");
    })
    it("getRole function should return Engineer", () => {
      
        const engineer = new Engineer(engData);

        expect(engineer.getRole()).toBe("Engineer");
    })
    it("getGithub function should return github username", () => {
      
        const engineer = new Engineer(engData);

        expect(engineer.getGithub()).toBe("guysteve");
    })
  })
})