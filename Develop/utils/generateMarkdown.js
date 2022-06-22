// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)(${renderLicenseLink(license)}]`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'ISC') {
    return `https://choosealicense.com/licenses/isc/`
  }
  if (license === 'GNUPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
}
console.log(renderLicenseLink);
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``; 
  } else {
    return `## Licenses 
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top of the page.`
  }
}
console.log(renderLicenseSection);
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ${renderLicenseBadge(data.licenses)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
