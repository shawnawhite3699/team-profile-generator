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
            name: 'name',
            message: "Please enter the team manger's name:"   
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const otherEmployeePrompts = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role on the team?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's GitHub username?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does this intern attend?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'continueAdding',
            message: "Would you like to add more team members?",
            default: false
        },
    ])
    
}