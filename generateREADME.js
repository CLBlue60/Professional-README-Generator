const licensesInfo = require("./licensesInfo.js");

function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesInfo.filter(
    (licenseInfo) => licenseInfo.name == license
  );
  return result[0].link;
}

function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  }
  return `This application is licensed under [${license}](${renderLicenseLink(
    license
  )}) license. Click the link for license rights and limitations.`;
}

function generateTable(data) {
  if (!data.confirmTable) {
    return;
  }
  if (data.license == "None") {
    return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
  }
  return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ${generateTable(data)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contribute
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  [Link to my GitHub Profile](https://github.com/${data.username})
  For any additional questions, you can email me at:
  ${data.email}
`;
}

module.exports = generateMarkdown;
