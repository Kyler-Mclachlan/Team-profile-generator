module.exports = function() {
    this.name = 'Dave';
    this.id = 20;
    this.email = "davedave@gmail.com";
    this.role = "Employee";
  }
    getName = function() {
      return this.name;
  }

  getId = function(){
       return this.id;
  }

  getEmail = function() {
      return this.email;
  }

  getRole = function(){
      this.role = "Employee";
      return this.role;
  };
  