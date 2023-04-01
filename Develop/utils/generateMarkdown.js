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
    if (license === "none") {
      return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  }
  return `## **License**
  License: ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

  ## **Description**
  - ${data.description}

  ## Table of Contents
  - [Installation]
  - [Usage]
  - [Testing](#testing)
  - [Contribution](#contribution)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## **Installation**
  ${data.install}

  ## **Usage**
  ${data.usage}

  ##Contribution**
  ${data.contribute}

  ##Testing**
  ${data.test}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ##Questions**
  Contact with any questions regarding this project, contact the following email [${
    data.email
  }](mailto:${data.email}).
  You can find this repository at ${data.username}](https://www.github.com/${
    data.username
  }).
`;
}

module.exports = generateMarkdown;
