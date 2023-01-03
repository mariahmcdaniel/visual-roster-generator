// create the team
const generateTeamMembers = (team) => {
  const generateManager = (manager) => {
    return `
        <article>
      <h2>${manager.getName()}</h2>
      <p>Manager</p>
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
        <h2>${engineer.getName()}</h2>
        <p>Engineer</p>
        <ul>
          <li>ID: ${engineer.getId()}</li>
          <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li>GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
        </ul>
      </article>
      
      `;
  };
  const generateIntern = (intern) => {
    return `
    <article>
      <h2>${intern.getName()}</h2>
      <p>Intern</p>
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

    body {
      background-color: #89a868;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    header {
      background-image: linear-gradient(#dfffbc, beige);
      color: darkslategrey;
    }

    article {
      width: 100%;
      background-color: beige;
      border-radius: 30px;
    }

    p {
      text-align: center;
      color: gray;
      background-color: #fff0f3;
    }

    h2 {
      text-align: center;
      color: #135505;
      background-color: #dfffbc;
      border-radius: 20px;
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
    <h1>Our Team</h1>
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
