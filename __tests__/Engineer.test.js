const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("creates an engineer object with the name, id, email and gitHub properties", () => {
    const engineer = new Engineer("Joey", 7, "joey@engineer.com", "joeyscode");
    expect(engineer.name).toBe("Joey");
    expect(engineer.id).toBe(7);
    expect(engineer.email).toBe("joey@engineer.com");
    expect(engineer.gitHub).toBe("joeyscode");
  });

  describe("getName method", () => {
    it("returns the name of the engineer", () => {
      const engineer = new Engineer(
        "Joey",
        7,
        "joey@engineer.com",
        "joeyscode"
      );
      expect(engineer.getName()).toBe("Joey");
    });
  });

  describe("getId method", () => {
    it("returns the id of the engineer", () => {
      const engineer = new Engineer(
        "Joey",
        7,
        "joey@engineer.com",
        "joeyscode"
      );
      expect(engineer.getId()).toBe(7);
    });
  });

  describe("getEmail method", () => {
    it("returns the email address of the engineer", () => {
      const engineer = new Engineer(
        "Joey",
        7,
        "joey@engineer.com",
        "joeyscode"
      );
      expect(engineer.getEmail()).toBe("joey@engineer.com");
    });
  });

  describe("getRole method", () => {
    it("returns 'Engineer'", () => {
      const engineer = new Engineer(
        "Joey",
        7,
        "joey@engineer.com",
        "joeyscode"
      );
      expect(engineer.getRole()).toBe("Engineer");
    });
  });

  describe("getGitHub method", () => {
    it("returns the GitHub username of the engineer", () => {
      const engineer = new Engineer(
        "Joey",
        7,
        "joey@engineer.com",
        "joeyscode"
      );
      expect(engineer.getGitHub()).toBe("joeyscode");
    });
  });
});
