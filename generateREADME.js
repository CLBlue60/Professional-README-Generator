// Require licensesInfo module
const licensesInfo = require("./licensesInfo.js");

// Function to render license link based on license name
function renderLicenseLink(license) {
  // If no license is selected, return empty string
  if (license == "None") {
    return ``;
  }
  // Filter licensesInfo array to find the license with the matching name
  let result = licensesInfo.filter(
    (licenseInfo) => licenseInfo.name == license
  );
  // Return the link of the matching license
  return result[0].link;
}

// Function to render license section based on selected license
function renderLicenseSection(license) {
  // If no license is selected, return empty string
  if (license == "None") {
    return ``;
  }
  // Return markdown section with license name and link
  return `This application is licensed under [${license}](${renderLicenseLink(
    license
  )}) license. Click the link for license rights and limitations.`;
}

// Function to generate table of contents based on selected license
function generateTable(data) {
  // If user does not confirm table of contents, return empty string
  if (!data.confirmTable) {
    return;
  }
  // If no license is selected, return table of contents without license section
  if (data.license == "None") {
    return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
  }
  // Return table of contents with license section
  return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
}

// Function to generate markdown content based on user input
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

// Export generateMarkdown function for use in other modules
module.exports = generateMarkdown;
