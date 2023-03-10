const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArr = [];
const generateHTML = require("./src/page-template");

const writeToFile = function (data) {
  fs.writeFile("dist/team.html", data, (err) => {
    if (err) throw err;
    console.log("Success! your visual team roster has been created");
  });
};

const startTeam = () => {
  prompt([
    {
      type: "input",
      message: "Who is the manager of this team?",
      name: "mName",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          return "Please enter the name of your team's manager to continue!";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers?.mName}'s employee ID?`,
      name: "mId",
      validate: (id) => {
        if (id) {
          return /^[0-9]*$/.test(id)
            ? true
            : "Please enter the manager's employee id - only numerals are accepted";
        } else {
          return "Please enter the manager's employee id";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers.mName}'s email address?`,
      name: "mEmail",
      validate: function (mEmail) {
        if (mEmail) {
          // Regex email check (return true if valid mail) from emailregex.com
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            mEmail
          )
            ? true
            : "Please enter a valid email address!";
        } else {
          return "Please enter the manager's email address";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers.mName}'s office number?`,
      name: "office",
      validate: (officeNum) => {
        if (officeNum) {
          return /^[0-9]*$/.test(officeNum)
            ? true
            : "Please enter the office number - only numerals are accepted";
        } else {
          return "Please enter the manager's office number";
        }
      },
    },
    {
      type: "list",
      message:
        "Add team members! Which type of employee would you like to add?",
      name: "nextEmpRole",
      choices: ["Engineer", "Intern"],
    },
  ]).then((answers) => {
    const employee = new Manager(
      answers.mName,
      answers.mId,
      answers.mEmail,
      answers.office
    );
    teamArr.push(employee);
    answers.nextEmpRole === "Engineer" ? generateEng() : generateInt();
  });
};

const generateEng = () => {
  prompt([
    {
      type: "input",
      message: "What is this Engineer's name?",
      name: "eName",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          return "Please enter the name of your engineer to continue!";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers?.eName}'s employee ID?`,
      name: "eId",
      validate: (id) => {
        if (id) {
          return /^[0-9]*$/.test(id)
            ? true
            : "Please enter this engineer's employee id - only numerals are accepted";
        } else {
          return "Please enter this engineer's employee id";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers.eName}'s email address?`,
      name: "eEmail",
      validate: function (email) {
        if (email) {
          // Regex email check (return true if valid mail) from emailregex.com
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          )
            ? true
            : "Please enter a valid email address!";
        } else {
          return "Please enter the engineer's email address";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers.eName}'s GitHub username?`,
      name: "gitHub",
      validate: (username) => {
        return username
          ? true
          : `Please enter ${answers.eName}'s GitHub username to continue!`;
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "nextEmpRoleE",
      choices: [
        "Add another engineer",
        "Add an intern",
        "The team is complete!",
      ],
    },
  ]).then((answers) => {
    const employee = new Engineer(
      answers.eName,
      answers.eId,
      answers.eEmail,
      answers.gitHub
    );
    teamArr.push(employee);
    if (answers.nextEmpRoleE === "The team is complete!") {
      return writeToFile(generateHTML(teamArr));
    } else {
      return answers.nextEmpRoleE === "Add another engineer"
        ? generateEng()
        : generateInt();
    }
  });
};

const generateInt = () => {
  prompt([
    {
      type: "input",
      message: "What is this Intern's name?",
      name: "iName",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          return "Please enter the name of your intern to continue!";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers?.iName}'s employee ID?`,
      name: "iId",
      validate: (id) => {
        if (id) {
          return /^[0-9]*$/.test(id)
            ? true
            : "Please enter this intern's employee id - only numerals are accepted";
        } else {
          return "Please enter the intern's employee id";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What is ${answers.iName}'s email address?`,
      name: "iEmail",
      validate: function (email) {
        if (email) {
          // Regex email check (return true if valid mail) from emailregex.com
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          )
            ? true
            : "Please enter a valid email address!";
        } else {
          return "Please enter the manager's email address";
        }
      },
    },
    {
      type: "input",
      message: (answers) => `What school does ${answers.iName} attend?`,
      name: "school",
      validate: (school) => {
        return school
          ? true
          : `Please enter the name of ${answers.eName}'s school to continue!`;
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "nextEmpRoleI",
      choices: [
        "Add another intern",
        "Add an engineer",
        "The team is complete!",
      ],
    },
  ]).then((answers) => {
    const employee = new Intern(
      answers.iName,
      answers.iId,
      answers.iEmail,
      answers.school
    );
    teamArr.push(employee);
    if (answers.nextEmpRoleI === "The team is complete!") {
      return writeToFile(generateHTML(teamArr));
    } else {
      return answers.nextEmpRoleI === "Add another intern"
        ? generateInt()
        : generateEng();
    }
  });
};
startTeam();
exports.arr = { teamArr };
