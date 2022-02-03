const Engineer = require('../lib/Engineer.js');


test('creates a Employee object', () => {
    const engineer = new Engineer('The-Engineer', 7, 'engineer@yahoo.com', 'testGithub');
    
    expect(engineer.github).toEqual(expect.any(String));

    // expect(employee.role).toBe("Employee");
    expect((engineer.getRole())).toBe("Engineer");
    expect((engineer.getGithub())).toBe("testGithub");
  });