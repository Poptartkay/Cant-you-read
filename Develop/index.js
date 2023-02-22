// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;
 

// TODO: Create an array of questions for user input
// update - changing const to .prompt

const userPrompt = () =>{ 
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your repo? (this will also be the title of the readme file)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        choices: [
            {value: 'MIT'},
            {value: 'ISC'},
            {value: 'Apache'},
            {value: 'None'},
        ]
        },
    
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your project aims to do.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do I install this project? Walk me through it.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you test this Project?',
        },
    {
        type: 'input',
        name: 'contribution',
        message: 'List your collaborators',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    
        {
            type: 'input',
        name: 'deployed',
        message: 'Please input location of your deployed site:',
        },
]);
};

//NOTES originally built input array within this const, after more research and review chose to change to above structure
// const questions = [
   
// ];

//Updates on TODO lines 83, 86, 110
const init = () => {
    userPrompt()
    //writeFile method imported from fs.promises to use promises instead of
    // a callback function
    // this was changed from function to const based on an in class mini project example
    // QUESTION TO GRADING TEAM, if I used line 88 instead of 89 where the readme file name is take and used from user input would I have gotten marked down for
    // not having the file name be called generic README.md?
    .then((data) => writeFile(`${data.name}.md`, generateMarkdown(data)))
    //.then((data) => writeFile("README.md", generateMarkdown(data)))
    .then(() => console.log('Thank you very much! Your Readme is now ready'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();