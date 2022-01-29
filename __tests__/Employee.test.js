const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Employee.js');

test('creates a Employee object', () => {
    const employee = new Employee('Dave', 20, "davedave@gmail.com" );
  
    expect(employee.name).toBe('Dave');
    // expect((employee.getName())).toEqual(expect.any(String));

    expect(employee.id).toEqual(expect.any(Number));
    // expect((employee.getId())).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));
    // expect((employee.getEmail())).toEqual(expect.any(String));

    // expect(employee.role).toBe("Employee");
    expect((employee.getRole())).toBe("Employee");
  });