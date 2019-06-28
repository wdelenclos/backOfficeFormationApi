jest.mock('../service/database.js')
const mockDatabase = require('../service/database.js')
const dMock = jest.fn().mockReturnValue(1)
mockDatabase.mockImplementation(() => {
  return {
  count:dMock
  }
});

const Reservation  = require('../reservation.js');
const Course  = require('../course.js');

afterEach(() => {
    dMock.mockClear();
});

let course = new Course(null,null,null,null,null,null,new Date(),120)
let reservation = new Reservation(course)

describe('When has reservations in same moment', () => {
  it('Should return false', () => {
    expect(reservation.isFree()).toBe(false); 
  });
});

describe('When not has reservations in same moment', () => {
    it('Should return true', () => {
      expect(reservation.isFree()).toBe(true); 
    });
});