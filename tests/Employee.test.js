const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("name", () => {
    it("should create an object containing a name", () => {
      
        const employee = new Employee("Steve", 22, "steve@company.com");

        expect(employee.name).toBe("Steve");

    })
    it("should create an object containing an id", () => {
      
        const employee = new Employee("Steve", 22, "steve@company.com");

        expect(employee.getId()).toEqual(22);

    })
    it("should create an object containing an email", () => {
      
        const employee = new Employee("Steve", 22, "steve@company.com");

        expect(employee.getEmail()).toBe("steve@company.com");
    })
    it("getRole function should return Employee", () => {
      
        const employee = new Employee("Steve", 22, "steve@company.com");

        expect(employee.getRole()).toBe("Employee");
    })
  })
})