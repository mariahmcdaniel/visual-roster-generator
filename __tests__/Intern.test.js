const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("creates an intern object with the name, id, email and school properties", () => {
    const intern = new Intern("Lisa", 8, "lisa@intern.com", "Harvard");
    expect(intern.name).toBe("Lisa");
    expect(intern.id).toBe(8);
    expect(intern.email).toBe("lisa@intern.com");
    expect(intern.school).toBe("Harvard");
  });

  describe("getName method", () => {
    it("returns the name of the intern", () => {
      const intern = new Intern("Lisa", 8, "lisa@intern.com", "Harvard");
      expect(intern.getName()).toBe("Lisa");
    });
  });

  describe("getId method", () => {
    it("returns the id of the intern", () => {
      const intern = new Intern("Lisa", 8, "lisa@intern.com", "Harvard");
      expect(intern.getId()).toBe(8);
    });
  });

  describe("getEmail method", () => {
    it("returns the email address of the intern", () => {
      const intern = new Intern("Lisa", 8, "lisa@intern.com", "Harvard");
      expect(intern.getEmail()).toBe("lisa@intern.com");
    });
  });

  describe("getRole method", () => {
    it("returns 'Intern'", () => {
      const intern = new Intern("Lisa", 8, "lisa@intern.com", "Harvard");
      expect(intern.getRole()).toBe("Intern");
    });
  });

  describe("getSchool method", () => {
    it("returns the intern's school", () => {
      const intern = new Intern("Lisa", 8, "lisa@intern.com", "Harvard");
      expect(intern.getSchool()).toBe("Harvard");
    });
  });
});
