const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber){
        super();
        this.officeNumber = officeNumber;
    }
    getRole = function(){
        this.role = 'Manager';
        return this.role; 
    }
}

module.exports = Manager;