// importing required packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const intern = require('./lib/intern');
function userInput(){
    this.staff = [] // setting up array that will be used to dynamically generate html
    console.log(`
   ||=======================================================================||
     Welcome! Please enter your Team Info - Starting with the Team's Manager 
   ||=======================================================================||
    `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter the team manager's name.",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your team manager's name!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's ID",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the manager's ID!"
            )
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter your manager's email address.",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your manager's email address!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter your manager's office number.",
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter your manager's office number!")
            return false;
          }
        }
      },
    ])  
      .then(({name, id, email, officeNumber}) => {
        this.staff.push(new Manager(name, id, email, officeNumber));
        console.log(this.staff)
      })
  };

userInput.prototype.mainMenu = function() {
    return inquirer.prompt([
              {
        type: 'list',
        name: 'employeeType',
        message: 'Provide your license type:',
        choices: ['Engineer', 'Intern', 'Exit/Done']
      }, 
    ])
    .then
  };

  userInput();


  // engineer prompt
      //   {
    //     type: 'input',
    //     name: 'github',
    //     message: 'Please provide your github user name:',
    //     validate: githubInput => {
    //       if (githubInput) {
    //         return true;
    //       } else {
    //         console.log('Please enter your github username!')
    //         return false;
    //       }
    //     }
    //   },
