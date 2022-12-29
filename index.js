// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


const inquirer = require("inquirer");
const fs = require("fs")
const prompt = inquirer.createPromptModule();

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const addManager = prompt([
    {
        type: "input",
        message: "Who is the manager of this team?",
        name: "mName",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the name of your team's manager to continue!");
                return false; 
            }
        }
    },
    {
        type: "input",
        message:(answers) => `What is ${answers.mName}'s employee ID?`,
        name: "mId",
        validate: (mId) => {
            return /^[0-9]*$/.test(mId);
        }
    },
    {
        type: "input",
        message:(answers) => `What is ${answers.mName}'s email address?`,
        name: "mEmail",
        validate: function(mEmail)
        {
            // Regex email check (return true if valid mail) from emailregex.com

            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mEmail);
        }
    },
    {
        type: "input",
        message:(answers) => `What is ${answers.mName}'s office number?`,
        name: "mOffice",
        validate: (mId) => {
            return /^[0-9]*$/.test(mId);
        }
    },
    
])
    .then()
    .then()
