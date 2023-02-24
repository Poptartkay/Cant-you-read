function generateLicenseBadge(license) {
  if (license !== "None") {
    return `![License Badge](https://img.shields.io/badge/License-${license}-red.svg)`
  }
  return "";
}

// Create a function that returns the license link. If there is no license, return an empty string.
function generateLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return "";
}

// Create a function that returns the license section of README. If there is no license, return an empty string.
function generateLicenseSection(license) {
  if (license !== "None") {
    return `## License\nThis application is covered by the ${license} license.`
  }
  return "";
}

// Create a function to generate markdown for README.
function generateMarkdown(data) {
  return `
# ${data.name}

## ${data.title}

${generateLicenseBadge(data.license)}

## Table of Contents

${generateLicenseLink(data.license)}

- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Tests](#tests)
- [Deployed Application](#deployed-application)
- [Questions](#questions)
${generateLicenseSection(data.license)}

## Description

${data.description}

## Usage

${data.usage}

## Installation

${data.installation}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Deployed Application

${data.deployedApplication}

## Questions

If you have further questions, please email me at ${data.email}. You can also view my GitHub profile at [${data.github}](https://github.com/${data.github}).

## License

${data.license}
`;
}

module.exports = generateMarkdown;
