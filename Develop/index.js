// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ([
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
            name:'instillation'
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
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeToFile(fileName, JSON.stringify(data, null, '\t', (err) => 
    err ? console.log(err) : console.log('Your ReadMe has been generated! Yay!')
    ));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('README.md', generateMarkdown(data));
        console.log(data)
    })
};

// Function call to initialize app
init();
