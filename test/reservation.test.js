jest.mock('../service/database.js')
const mockDatabase = require('../service/database.js')
const cMock = jest.fn().mockReturnValue(1)
const gMock = jest.fn().mockReturnValue({'name':'A1','places':20})
mockDatabase.mockImplementation(() => {
  return {
  count:cMock,
  get: gMock
  }
});

const Reservation  = require('../reservation.js');
const Course  = require('../course.js');
const Room = require('../room.js')

afterEach(() => {
    cMock.mockClear();
    gMock.mockClear();
});

let room = new Room("A1",15)
let course = new Course(null,null,18,null,null,null,room,new Date(),120)
let reservation = new Reservation(course)

describe('When has reservations in same moment', () => {
  it('Should return false', () => {
    expect(reservation.isFree()).toBe(false); 
  });
});

describe('When reservation was booked but not available', () => {
    it('Should return false', () => {
      expect(reservation.book()).toBe(false); 
    });
  });
