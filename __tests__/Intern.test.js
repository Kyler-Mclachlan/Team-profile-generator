const Intern = require('../lib/Intern.js');

// jest.mock('../lib/Manager.js');

test('creates a Employee object', () => {
    const intern = new Intern("UMN Bootcamp");
    
    expect(intern.school).toEqual(expect.any(String));

    // expect(employee.role).toBe("Employee");
    expect((intern.getRole())).toBe("Intern");
    expect((intern.getSchool())).toBe("UMN Bootcamp");
  });