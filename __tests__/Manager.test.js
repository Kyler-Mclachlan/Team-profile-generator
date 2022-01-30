const Manager = require('../lib/Manager.js');

// jest.mock('../lib/Manager.js');

test('creates a Employee object', () => {
    const manager = new Manager(25);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));

    // expect(employee.role).toBe("Employee");
    expect((manager.getRole())).toBe("Manager");
  });