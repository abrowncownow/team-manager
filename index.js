//import and declare constants-----
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const chalk = require('chalk');
const fs = require('fs');
const open = require('open');
var team = [];
var manager;
var indexHTML;
var cardHTML = ``;
const sleep = (ms = 2000) => new Promise ((r)=> setTimeout(r,ms))
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
            manager = new Manager(answers);
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
                case "Finished": generateHTML();
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
                message: `Enter the "Engineer's email:`,
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

async function generateHTML(){

    var managerHTML;
    managerHTML =`
        <article class="card">
            <div class="general">
                <img src="./assets/images/${manager.type}.png">
                <h1>${manager.type}</h1> 
                <h2><a href="mailto:${member.email}">${member.email}</a></h2>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office: ${manager.number}</p>
            </div>
        </article>`;
    cardHTML += managerHTML;
    team.forEach(member => 
        cardHTML+= `
                <article class="card">
                    <div class="general">
                        <img src="./assets/images/${member.type}.png">
                        <h1>${member.type}</h1> 
                        <h2>${member.name}</h2>
                        <p>ID: ${member.id}</p>
                        <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                        <p>${member.extra}</p>
                    </div>
                </article>
        
        `)
var indexHTML=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Dashboard</title>
    <link rel="stylesheet" href="./assets/style.css" />
</head>
<body>
    <header>
        <div>
        <h1 id="header-text">${member.name}'s team</h1>
        </div>
    </header>  

    <div class = "centered">
        <section class="cards">
                 
           ${cardHTML}


        </section>
    </div>
</body>
</html>
`;

fs.writeFile(`./dist/team_${manager.name}.html`,indexHTML,(err) =>
err ? console.error(err) : console.log('Success!'));
sleep();
open(`./dist/team_${manager.name}.html`);
}
//declare functions------

//main-----
getManager();
//main-----