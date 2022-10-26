//import and declare constants-----
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const chalk = require('chalk');
var team = [];
var teamHTML;
//import and declare constants------


//declare functions-----
function getManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: `What is the "Team Manager's name?"`,
                name: "name",
            },
            {
                type: "input",
                message: `Enter the "Team Manager's employee id:"`,
                name: "id",
            },
            {
                type: "input",
                message: `Enter the "Team Manager's email:"`,
                name: "email",
            },
            {
                type: "input",
                message: `Enter the "Team Manager's office number:"`,
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
                choices: ["Engineer", "Intern", "Finished"]
            },
        ])
        .then((answers) => {
            switch (answers.menu){
                case "Engineer": addEngineer();
                break;
                case "Intern": addIntern();
                break;
                case "Finished": showHTML();
                break;
            }
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: `What is the "Engineer's name?`,
                name: "name",
            },
            {
                type: "input",
                message: `Enter the "Engineer's employee id:`,
                name: "id",
            },
            {
                type: "input",
                message: `Enter the "Team Manager's email:`,
                name: "email",
            },
            {
                type: "input",
                message: `Enter the "Engineer's github account:`,
                name: "extra",
            },
        ])
        .then((answers) => {
            team.push(new Engineer(answers));
            console.log(team);
            menu();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: `What is the "Intern's name?`,
                name: "name",
            },
            {
                type: "input",
                message: `Enter the "Intern's employee id:`,
                name: "id",
            },
            {
                type: "input",
                message: `Enter the "Intern's email:`,
                name: "email",
            },
            {
                type: "input",
                message: `Enter the "Intern's school:`,
                name: "extra",
            },
        ])
        .then((answers) => {
            team.push(new Intern(answers));
            console.log(team);
            menu();
        });
}

function showHTML(){
var cardHTML
team.forEach(member => 
    cardHTML+= `
    
    
    `)
}

//declare functions------

//main-----
getManager();
//main-----