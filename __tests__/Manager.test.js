const Player = require('../lib/Manager.js');

test('creates a player object', () => {
    const Manager = new Manager('Dave');
  
    expect(manager.name).toBe('Dave');
    expect(manager.emailAddress).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  
  });