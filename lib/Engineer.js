const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub = function(){
        return this.github;
    }
    getRole = function(){
        this.role = 'Engineer';
        return this.role; 
    }
}

module.exports = Engineer;