const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school){
        super();
        this.school = school;
    }
    getSchool = function(){
        return this.school;
    }
    getRole = function(){
        this.role = 'Intern';
        return this.role; 
    }
}

module.exports = Intern;