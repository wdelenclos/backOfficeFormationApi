const Course  = require('../course.js');
const User  = require('../user.js');
const Room   = require('../room.js');
const Reservation   = require('../reservation.js');

jest.mock('../service/database.js')
const mockDatabase = require('../service/database.js');
const dMock = jest.fn()
mockDatabase.mockImplementation(() => {
    return {
        save:dMock
    }
});

afterEach(() => {
    dMock.mockClear()
});

let database = new mockDatabase();
let course = new Course();
let reservation = new Reservation();


let teacher = new User('wdelenclos@gmail.com','Wladimir','Delenclos','teacher',56, false);
let student = [new User('tata@gmail.com','Tata','Toto','student', 56, true), new User('tata@gmail.com','Tata','Toto','student', 56, true),new User('tata@gmail.com','Tata','Toto','student', 56, true)];
let room = new Room('B4', 20);

let courseMock = new Course('Test Unitaire', 'COurs de test unitaire', 55, Reservation, student, teacher, room, new Date(), 2);


// Teacher tests

describe('When teacher is not valid', () => {
    it('Should prevent saving', () => {
        courseMock.createCourse();
        expect(course.isValidTeacher).toHaveBeenCalled();
        expect(reservation.book).not.toHaveBeenCalled();
    });
});

// Teacher tests