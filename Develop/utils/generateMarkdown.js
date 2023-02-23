// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![Badge](https://img.shields.io/badge/License-${license}-red.svg)`
  }
  return ``;
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