class Employee {
    constructor( name = '', id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName = function() {
        this.name = name;
    }

    getId = function(){
        this.id = id;
    }

    getEmail = function() {
        this.email = email;
    }

    getRole = function(){
        this.role = "Employee";
        return this.role;
    }
}


module.exports = Employee;