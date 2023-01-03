const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("creates a Manager object with the name, id, email and office number properties", () => {
    const manager = new Manager("Holly", 3, "holly@manager.com", 213);
    expect(manager.name).toBe("Holly");
    expect(manager.id).toBe(3);
    expect(manager.email).toBe("holly@manager.com");
    expect(manager.officeNumber).toBe(213);
  });

  describe("getName method", () => {
    it("returns the name of the manager", () => {
      const manager = new Manager("Holly", 3, "holly@manager.com", 213);
      expect(manager.getName()).toBe("Holly");
    });
  });

  describe("getId method", () => {
    it("returns the id of the manager", () => {
      const manager = new Manager("Holly", 3, "holly@manager.com", 213);
      expect(manager.getId()).toBe(3);
    });
  });

  describe("getEmail method", () => {
    it("returns the email address of the manager", () => {
      const manager = new Manager("Holly", 3, "holly@manager.com", 213);
      expect(manager.getEmail()).toBe("holly@manager.com");
    });
  });

  describe("getRole method", () => {
    it("returns 'Manager'", () => {
      const manager = new Manager("Holly", 3, "holly@manager.com", 213);
      expect(manager.getRole()).toBe("Manager");
    });
  });

  describe("getOfficeNumber method", () => {
    it("returns the office number of the manager", () => {
      const manager = new Manager("Holly", 3, "holly@manager.com", 213);
      expect(manager.getOfficeNumber()).toBe(213);
    });
  });
});
