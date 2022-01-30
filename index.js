// importing required packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
staff =[];

const userMenu = () => {
  const questions = [
    {
      type: "list",
      name: "employeeType",
      message: "What Type of Employee would you like to add next?",
      choices: ["Intern", "Engineer", "Exit/Done"],
    }
  ];
  return inquirer.prompt(questions);
};

const internQuestions = () => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: "Please enter your intern's name:",
          validate: NameInput => {
            if (NameInput) {
              return true;
            } else {
              console.log("Please enter your intern's name!")
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: "Please enter your intern's id:",
          validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter your interns id!")
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: "Please enter your intern's email:",
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your intern's id!")
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'school',
          message: "Please enter the name of your intern's school:",
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your intern's school!")
              return false;
            }
          }
        },
      ])
      .then(({name, id, email, school}) => {
        staff.push(new Intern(name, id, email, school));
        console.log(staff)
        console.log(name, id, email, school)
        restOfStaff()
      })
};

const engineerQuestions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter your engineer's name:",
        validate: NameInput => {
          if (NameInput) {
            return true;
          } else {
            console.log("Please enter your engineers name!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter your engineer's id:",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your engineers id!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter your engineer's email:",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your engineers id!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "Please enter the name of your engineers github username:",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your engineers github!")
            return false;
          }
        }
      },
    ])
    .then(({name, id, email, github}) => {
      staff.push(new Engineer(name, id, email, github));
      console.log(staff)
      console.log(name, id, email, github)
      restOfStaff()
    })
};

const exitProgram = () =>{
  console.log('input logged!');
  console.log(staff);
};

const restOfStaff = async () => {
  await userMenu()
.then(answers => {
  console.log(answers);
  if (answers.employeeType ===  "Intern"){
    internQuestions();
  }
  if (answers.employeeType ===  "Engineer"){
    engineerQuestions();
  }
  else{
    exitProgram
  }
})
}  

function userInput(){
    var staffSize = 0;
    console.log(`
   ||=======================================================================||
     Welcome! Please enter your Team Info - Starting with the Team's Manager 
   ||=======================================================================||
    `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter the team manager's name:",
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
        message: "Please enter the manager's ID:",
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
        message: "Please enter your manager's email address:",
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
        message: "Please enter your manager's office number:",
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
    .then (({name, id, email, officeNumber}) => {
        staff.push(new Manager(name, id, email, officeNumber));
        console.log(staff);
        restOfStaff();
      })
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
