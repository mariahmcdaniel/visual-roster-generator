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
};

// export function to generate entire page
module.exports = (team) => {
  // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
};
