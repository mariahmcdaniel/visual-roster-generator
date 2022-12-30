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


prompt([
    {
      type: "input",
          message: "Who is the manager of this team?",
          name: "mName",
          validate: (name) => {
              if (name) {
                  return true;
              } else {
                  return "Please enter the name of your team's manager to continue!" 
              }
          },
      },
      {
          type: "input",
          message:(answers) => `What is ${answers?.mName}'s employee ID?`,
          name: "mId",
          validate: (mId) => {
              return /^[0-9]*$/.test(mId) ? true : "Please enter the employee ID - only numerals are accepted"
          }
      },
      {
          type: "input",
          message:(answers) => `What is ${answers.mName}'s email address?`,
          name: "mEmail",
          validate: function(mEmail)
          {
              // Regex email check (return true if valid mail) from emailregex.com
  
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mEmail) ? true : "Please enter a valid email address!";
          }
      },
      {
          type: "input",
          message:(answers) => `What is ${answers.mName}'s office number?`,
          name: "office",
          validate: (officeNum) => {
              return /^[0-9]*$/.test(officeNum) ? true : "Please enter the office number - only numerals are accepted"
          }
      },
      {
          type: "list",
          message: "Add team members! Which type of employee would you like to add?",
          name: "nextEmpRole",
          choices: ["Engineer", "Intern"]
      },
  ]).then ((answers) => {
      console.log(answers);
      answers.nextEmpRole === "Engineer" ? generateEng() : generateInt()
  });
  
  
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
                          return "Please enter the name of your engineer to continue!" 
                      }
                  },
              },
              {
                  type: "input",
                  message:(answers) => `What is ${answers?.eName}'s employee ID?`,
                  name: "eId",
                  validate: (id) => {
                      return /^[0-9]*$/.test(id);
                  }
              },
              {
                  type: "input",
                  message:(answers) => `What is ${answers.eName}'s email address?`,
                  name: "eEmail",
                  validate: function(email)
                  {
                      // Regex email check (return true if valid mail) from emailregex.com
          
                      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ? true : "Please enter a valid email address!";
                  }
              },
              {
                  type: "input",
                  message:(answers) => `What is ${answers.eName}'s GitHub username?`,
                  name: "gitHub",
                  validate: (username) => {
                      return username ? true : `Please enter ${answers.eName}'s GitHub username to continue!`
                  }
              },
              {
                  type: "list",
                  message: "Would you like to add another team member?",
                  name: "nextEmpRoleE",
                  choices: ["Add another engineer", "Add an intern", "The team is complete!"]
              },
  
  
      ]).then ((answers) => {
          if (answers.nextEmpRoleE === "The team is complete!"){
              console.log("Your Team's profile is being created!")
              fs.writeFile(`${answers.eName}.HTML`, html, (err) => {
                  if(err)
                      throw err;
                  console.log("Success! Your HTML page has been generated")
              })
          } else {
             return answers.nextEmpRoleE === "Add another engineer" ? generateEng() : generateInt()
          }
      })
  
  }
  
  //Code from previous challenge for reference
  
  // const writeToFile = function (markdown) {
  //     fs.writeFile('newREADME.md', markdown, (err) => {
  //       if (err)
  //         throw err;
  //       console.log('Success! Your README has been generated')
  //     });
  //   };
  
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
                          return "Please enter the name of your intern to continue!" 
                      }
                  },
              },
              {
                  type: "input",
                  message:(answers) => `What is ${answers?.iName}'s employee ID?`,
                  name: "iId",
                  validate: (id) => {
                      return /^[0-9]*$/.test(id);
                  }
              },
              {
                  type: "input",
                  message:(answers) => `What is ${answers.iName}'s email address?`,
                  name: "iEmail",
                  validate: function(email)
                  {
                      // Regex email check (return true if valid mail) from emailregex.com
          
                      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ? true : "Please enter a valid email address!";
                  }
              },
              {
                  type: "input",
                  message:(answers) => `What school does ${answers.iName} attend?`,
                  name: "school",
                  validate: (school) => {
                      return school ? true : `Please enter the name of ${answers.eName}'s school to continue!`
                  }
              },
              {
                  type: "list",
                  message: "Would you like to add another team member?",
                  name: "nextEmpRoleE",
                  choices: ["Add another intern", "Add an engineer", "The team is complete!"]
              },
  
  
      ]).then ((answers) => {
          if (answers.nextEmpRoleI === "The team is complete!"){
              console.log("Your Team's profile is being created!")
              fs.writeFile(`${answers.iName}.HTML`, html, (err) => {
                  if(err)
                      throw err;
                  console.log("Success! Your HTML page has been generated")
              })
          } else {
             return answers.nextEmpRoleI === "Add another intern" ? generateInt() : generateEng()
          }
      })
  }
    
