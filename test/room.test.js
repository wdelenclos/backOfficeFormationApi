const Room  = require('../room.js');

let room = new Room('B4',20)

describe('When class can\'t contain course', () => {
  it('Should return false', () => {
    expect(room.canContain(22)).toBe(false);
    expect(room.canContain(-6)).toBe(false);
  });
});

describe('When class can contain course', () => {
    it('Should return true', () => {
      expect(room.canContain(18)).toBe(true);
    });
});