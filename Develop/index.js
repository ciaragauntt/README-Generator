// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type:'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (value) => {if(value){return true}else {return 'Please enter a title for your project.'}},
        },
        {
            type: 'input',
            message: 'Please add a description of your repository',
            name: 'description',
            validate: (value) => {if(value){return true}else {return 'Please add a description to your README.'}},
        },
        {
            type: 'input',
            message: 'Please provide instillation instructions if there are any...',
            name:'installation'
        },
        {
            type: 'input',
            message: 'Please add usage information if any...',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Do you have any contribution guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please add test instructions if any...',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'What license will you be using?',
            name: 'license',
            choices: ['MIT', 'ISC', 'GNUPLv3'],
            filter(val) {
                return val.toLowerCase();
            }
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ];

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            return console.log(err)
        }
        console.log("You successfully generated a README.md file!")
    })
};

// TODO: Create a function to initialize app
 function init() {
    return inquirer.prompt(questions);
}
 

init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})

// Function call to initialize app

