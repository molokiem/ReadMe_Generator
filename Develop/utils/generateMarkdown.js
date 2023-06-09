// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "BSD") {
    return "[![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-red.svg)](https://opensource.org/license/bsd-3-clause)";
  }
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/license/mit)";
  }
  if (license === "GPL") {
    return "[![License: GPL](https://img.shields.io/badge/License-GPLv3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "none") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "BSD") {
    return "[BSD](https://opensource.org/license/bsd-3-clause)";
  }
  if (license === "MIT") {
    return "[MIT](https://opensource.org/license/mit)";
  }
  if (license === "GPL") {
    return "[GPL](https://www.gnu.org/licenses/gpl-3.0)";
  }
  {
    if (license === "None") {
      return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## **License**
  License: ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  - ${data.description}

  ## Table of Contents
  - [Installation](#installlink)
  - [Usage](#usagelink)
  - [Contribution](#contributionlink)]
  - [Testing](#testinglink)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questionslink)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribute}

  ## Testing
  ${data.test}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Questions
  [My Email](mailto:${data.email})
  
  [My Github](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
