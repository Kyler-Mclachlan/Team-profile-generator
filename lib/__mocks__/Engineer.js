module.exports = function() {
    this.role = "Engineer";
    this.github = "testGithub";
}
getGithub = function(){
    return this.github;
}
getRole = function(){
    this.role = 'Engineer';
    return this.role; 
};
  