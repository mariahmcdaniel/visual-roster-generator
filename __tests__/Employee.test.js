const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("creates an Employee object with the name, id, and email properties", () => {
    const employee = new Employee("Jane", 11, "jane@employee.com");
    expect(employee.name).toBe("Jane");
    expect(employee.id).toBe(11);
    expect(employee.email).toBe("jane@employee.com");
  });

  describe("getName method", () => {
    it("returns the name of the employee", () => {
      const employee = new Employee("Jane", 11, "jane@employee.com");
      expect(employee.getName()).toBe("Jane");
    });
  });

  describe("getId method", () => {
    it("returns the id of the employee", () => {
      const employee = new Employee("Jane", 11, "jane@employee.com");
      expect(employee.getId()).toBe(11);
    });
  });

  describe("getEmail method", () => {
    it("returns the email address of the employee", () => {
      const employee = new Employee("Jane", 11, "jane@employee.com");
      expect(employee.getEmail()).toBe("jane@employee.com");
    });
  });

  describe("getRole method", () => {
    it("returns 'Employee'", () => {
      const employee = new Employee("Jane", 11, "jane@employee.com");
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
