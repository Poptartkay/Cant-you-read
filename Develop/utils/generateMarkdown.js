// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  let badge = "";
  let licenseOptions =
  {
    "Apache license 2.0": "https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg",
    "GNU General Public License v3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "MIT License": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "BSD 2-Clause \"Simplified\" License": "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
    "BSD 3-Clause \"New\" or \"Revised\" License": "https://img.shields.io/badge/License-BSD_3--Clause-orange.svg",
    "Boost Software License 1.0": "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    "Creative Commons Zero v1.0 Universal": "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
    "Eclipse Public License 2.0": "https://img.shields.io/badge/License-EPL_2.0-red.svg",
    "GNU Affero General Public License v3.0": "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
    "GNU General Public License v2.0": "https://img.shields.io/badge/License-GPL_v2-blue.svg",
    "GNU Lesser General Public License v2.1": "https://img.shields.io/badge/License-LGPL_v2.1-blue.svg",
    "Mozilla Public License 2.0": "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    "The Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg"
  }

  if (license !== "None") {
    badge = `![License](${licenseOptions[license]})`
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `- [License](#lic)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License Application is covered by ${license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}
  # ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of contents
${renderLicenseLink(data.license)}
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [License](#license)  
- [Test](#test)
- [Deployed application](#deployed)
${renderLicenseSection(data.license)}
## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.installation}
## Contributions
${data.contributing}
 
## Questions
If you have further questions please email me at ${data.email}
To view my GitHub profile go to [${data.github}](https://github.com/${data.github})
## License
${data.license}
## Test
${data.test}
## Deployed application
${data.deployed}
`;
}

module.exports = generateMarkdown;