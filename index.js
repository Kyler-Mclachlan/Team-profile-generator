// importing required packages and files

// packages from local and npm
const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./dist/generate-site');
const generateWebpage = require('./dist/generateHTML');

// classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');

// set ups array to collect staff members
var staff =[];

const staffInfoWebPage = function (){
  writeFile(generateWebpage(staff));
  };

// const for command line interface for user to choose staff type
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

// const containing intern questions as well as callback to async menu function
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
        restOfStaff()
      })
};

// const containing engineer questions as well as callback to async menu function 
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
      restOfStaff()
    })
};

// const that logs end of program and that will eventuall kick of html creation
const exitProgram = () =>{
  console.log('input logged!');
  staffInfoWebPage();
};

const restOfStaff = async () => {
  await userMenu()
.then(answers => {
  if (answers.employeeType ===  "Intern"){
    internQuestions();
  }
  if (answers.employeeType ===  "Engineer"){
    engineerQuestions();
  }
  if (answers.employeeType ===  "Exit/Done") {
    exitProgram();
  }
})
}  

// inital function that gather manager input can kicks off other functions
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
        restOfStaff();
      })
};


// kicks of program when user enters node index in command line
userInput();
  // .then(staff =>{
  //   console.log(staff);
  //   const staffInfoWebPage = generateWebpage(staff)
  //     fs.write('./staffPage.html', staffInfoWebPage, err => {
  //       if (err) throw new Error(err);
  //     });
  //     console.log('Page created! Check out index.html in this directory to see it!');
  // });
