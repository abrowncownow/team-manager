const Manager = require('../lib/Manager');

const engData = {
    name: "Bob",
    id: 111,
    email: "bob@company.com",
    officeNumber: "123-456-7899",
    }

describe("Manager", () => {
  describe("name", () => {
    it("should create an object containing a name", () => {
      
        const manager = new Manager(engData);

        expect(manager.name).toBe("Bob");

    })
    it("should create an object containing an id", () => {
      
        const manager = new Manager(engData);

        expect(manager.getId()).toEqual(111);

    })
    it("should create an object containing an email", () => {
      
        const manager = new Manager(engData);

        expect(manager.getEmail()).toBe("bob@company.com");
    })
    it("getRole function should return manager", () => {
      
        const manager = new Manager(engData);

        expect(manager.getRole()).toBe("Manager");
    })
    it("should create an object containing office number", () => {
      
        const manager = new Manager(engData);

        expect(manager.officeNumber).toBe("123-456-7899");
    })
  })
})