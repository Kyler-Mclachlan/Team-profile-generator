const Engineer = require('../lib/Engineer.js');

// jest.mock('../lib/Manager.js');

test('creates a Employee object', () => {
    const engineer = new Engineer("testGithub");
    
    expect(engineer.github).toEqual(expect.any(String));

    // expect(employee.role).toBe("Employee");
    expect((engineer.getRole())).toBe("Engineer");
    expect((engineer.getGithub())).toBe("testGithub");
  });