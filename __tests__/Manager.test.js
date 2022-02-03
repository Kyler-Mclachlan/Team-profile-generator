const Manager = require('../lib/Manager.js');

test('creates a Employee object', () => {
    const manager = new Manager('Micheal', 25, 'theoffice@nbc.com', 55);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));

    // expect(employee.role).toBe("Employee");
    expect((manager.getRole())).toBe("Manager");
  });