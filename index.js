//import and declare constants-----
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const chalk = require('chalk');
var team = [];
var addMember;
//import and declare constants------


//declare functions-----
function getManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: `What is the ${chalk.bold("Team Manager's name?")}`,
                name: "name",
            },
            {
                type: "input",
                message: `Enter the ${chalk.bold("Team Manager's employee id:")}`,
                name: "id",
            },
            {
                type: "input",
                message: `Enter the ${chalk.bold("Team Manager's email:")}`,
                name: "email",
            },
            {
                type: "input",
                message: `Enter the ${chalk.bold("Team Manager's office number:")}`,
                name: "number",
            },
        ])
        .then((answers) => {
            team.push(new Manager(answers));
            console.log(team);
            menu();
        });
}

function menu() {
    inquirer
        .prompt([
            {
                type: "list",
                message: `Select the type of team member to add or select "finished" to finish adding.`,
                name: "menu",
                choices: ["Engineer", "Intern", "finished"]
            },
        ])
        .then((answers) => {
            
        });
}
//declare functions------

//main-----
getManager();
//main-----