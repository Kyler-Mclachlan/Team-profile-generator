const Manager = require('../lib/Manager.js');

// jest.mock('../lib/Manager.js');

test('creates a Employee object', () => {
    const manager = new Manager(25);
  
    expect(manager.name).toBe('Dave');
    // expect((employee.getName())).toEqual(expect.any(String));

    expect(manager.id).toEqual(expect.any(Number));
    // expect((employee.getId())).toEqual(expect.any(Number));

    expect(manager.email).toEqual(expect.any(String));
    // expect((employee.getEmail())).toEqual(expect.any(String));

    expect(manager.officeNumber).toEqual(expect.any(Number));

    // expect(employee.role).toBe("Employee");
    expect((manager.getRole())).toBe("Manager");
  });