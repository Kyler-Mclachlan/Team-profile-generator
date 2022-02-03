const Intern = require('../lib/Intern.js');

test('creates a Employee object', () => {
    const intern = new Intern('The Intern', 55, 'theIntern@hotmail.com', 'UMN Bootcamp');
    
    expect(intern.school).toEqual(expect.any(String));

    expect((intern.getRole())).toBe("Intern");
    expect((intern.getSchool())).toBe("UMN Bootcamp");
  });