// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;                
            }
            else {
                console.log('Please enter a project name!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Please provide a description of your project!');
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'installation',
        message: 'What are steps required to install your project?',
        choices: ['Github', 'VSCode', 'Terminal', 'Node']
    },

    {
        type: 'checkbox',
        name: 'usage',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },

    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
    },
    
    ]);
}
// TODO: Create a function to write README file
questions()
.then ((data) => {
    fs.writeFile('./READMEGenerator',generateMarkdown(data), err => {
if (err) throw new Error(err);
console.log('README generated!');  
    });
});
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
