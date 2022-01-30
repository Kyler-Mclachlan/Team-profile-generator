const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super();
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole = function(){
        this.role = 'Manager';
        return this.role; 
    }
}

module.exports = Manager;