// create the team
const generateTeamMembers = (team) => {
  const generateManager = (manager) => {
    return `
        <article>
      <h2>Manager</h2>
      <h3>${manager.getName()}</h3>
      <ul>
        <li>ID: ${manager.getId()}</li>
        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li>Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </article>
    
    `;
  };
  const generateEngineer = (engineer) => {
    return `
        <article>
        <h2>Engineer</h2>
        <h3>${engineer.getName()}</h3>
        <ul>
          <li>ID: ${engineer.getId()}</li>
          <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </article>
      
      `;
  };
  const generateIntern = (intern) => {
    return `
    <article>
      <h2>Intern</h2>
      <h3>${intern.getName()}</h3>
      <ul>
        <li>ID: ${intern.getId()}</li>
        <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li>School: ${intern.getSchool()}</li>
      </ul>
    </article>

    `;
  };
  const html = [];
  html.push(
    team
      .filter((member) => member.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((member) => member.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  html.push(
    team
      .filter((member) => member.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Roster</title>
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
  ${generateTeamMembers(team)}
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>

</html>
  `;
};
