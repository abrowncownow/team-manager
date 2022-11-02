const Intern = require('../lib/Intern');

const engData = {
    name: "Betty",
    id: 22,
    email: "betty@company.com",
    school: "UW",
    }

describe("Intern", () => {
  describe("name", () => {
    it("should create an object containing a name", () => {
      
        const intern = new Intern(engData);

        expect(intern.name).toBe("Betty");

    })
    it("should create an object containing an id", () => {
      
        const intern = new Intern(engData);

        expect(intern.getId()).toEqual(22);

    })
    it("should create an object containing an email", () => {
      
        const intern = new Intern(engData);

        expect(intern.getEmail()).toBe("betty@company.com");
    })
    it("getRole function should return Intern", () => {
      
        const intern = new Intern(engData);

        expect(intern.getRole()).toBe("Intern");
    })
    it("getSchool function should return Intern's School", () => {
      
        const intern = new Intern(engData);

        expect(intern.getSchool()).toBe("UW");
    })
  })
})