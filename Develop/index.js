// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;
 

// Array of questions that will be calledback in the userPrompt
const questions = [
    'What is the name of your repo?',
    "Choose your license for your project.",
    "Project title?",
    "What does your project do?",
    "How do I install this project?",
    "How did you test this Project?",
    "Any Collaborators?",
    "Enter your email:",
    "Your Github Username",
    "Live Url link:",
   
];


const userPrompt = () =>{ 
return inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: questions[0]
    },
    {
        name: 'license',
        type: 'list',
        message: questions[1],
        choices: [
            {value: 'MIT'},
            {value: 'ISC'},
            {value: 'Apache'},
            {value: 'None'},
        ]
        },
    
    {
        name: 'title',
        type: 'input',
        message: questions[2]
    },
    {
        name: 'description',
        type: 'input',
        message: questions[3]
    },
    {
        name: 'installation',
        type: 'input',
        message: questions[4]
    },
    {
        name: 'test',
        type: 'input',
        message: questions[5]
        },
    {
        name: 'contribution',
        type: 'input',
        message: questions[6]
    },
    {
        name: 'email',
        type: 'input',
        message: questions[7]
    },
    {
        name: 'github',
        type: 'input',
        message: questions[8]
    },
    
        {
            name: 'deployed',
            type: 'input',
        message: questions[9]
        },
]);
};

const init = () => {
    userPrompt()

    .then((data) => writeFile(`${data.name}.md`, generateMarkdown(data)))
 
    .then(() => console.log('Thank you! Your Readme is now ready'))
    .catch((err) => console.error(err));
}

//initializes app
init();