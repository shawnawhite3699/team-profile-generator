//Node modules
const inquirer = require('inquirer');
const fs = require('fs');

//link to page generator
const generateHTML = require('./src/generateHTML');

//Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Team array
const teamArray = [];

//Manager prompts array
const managerPrompts = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: "Please enter the team manger's name:",
            name: 'managerName'
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the manager's email address:",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'officeNumber'
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};