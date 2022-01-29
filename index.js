const inquirer = require('inquirer');
const fs = require('fs');

function userInput(){
    console.log(`
   ||=======================================================================||
     Welcome! Please enter your Team Info - Starting with the Team's Manager 
   ||=======================================================================||
    `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "Please enter the team manager's name.",
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter your team manager's name!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Please enter the manager's ID",
        validate: managerIdInput => {
          if (managerIdInput) {
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
        name: 'managerEmailAddress',
        message: "Please enter your manager's email address.",
        validate: managerEmailAddressInput => {
          if (managerEmailAddressInput) {
            return true;
          } else {
            console.log("Please enter your manager's email address!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Please enter your manager's office number.",
        validate: managerOfficeNumberInput => {
          if (managerOfficeNumberInput) {
            return true;
          } else {
            console.log("Please enter your manager's office number!")
            return false;
          }
        }
      },

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
    ])   
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
