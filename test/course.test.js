const Course  = require('../course.js');
const User  = require('../user.js');
const Room   = require('../room.js');
const Reservation   = require('../reservation.js');
const mockDatabase = require('../service/database.js');
jest.mock('../service/database.js');
const dMock = jest.fn()
const gMock = jest.fn().mockReturnValue(new Room('A1',20))
mockDatabase.mockImplementation(() => {
    return {
        save:dMock,
        get:gMock
    }
});

afterEach(() => {
    dMock.mockClear()
    gMock.mockClear()
});



let teacher = new User('wdelenclos@gmail.com','Wladimir','Delenclos','teacher',56, false);
let student = [new User('tata@gmail.com','Tata','Toto','student', 56, true), new User('tata@gmail.com','Tata','Toto','student', 56, true),new User('tata@gmail.com','Tata','Toto','student', 56, true)];
let room = new Room('B4', 20);

let course = new Course('Test Unitaire', 'COurs de test unitaire', 55, Reservation, student, teacher, room, new Date(), 2);
let reservation = new Reservation(course);

// Teacher tests

describe('When teacher is not valid', () => {
    it('Should prevent saving', () => {
        course.createCourse();
        expect(course.isValidTeacher()).toBe(false);
        expect(reservation.book()).not.toHaveBeenCalled();
    });
});

let teacherTrue = new User('wdelenclos@gmail.com','Wladimir','Delenclos','teacher',32, true);
let courseMock = new Course('Test Unitaire', 'COurs de test unitaire', 55, Reservation, student, teacherTrue, room, new Date(), 2);
let otherReservation = new Reservation(courseMock);

describe('When teacher is valid', () => {
    it('execute saving', () => {
        courseMock.createCourse();
        expect(courseMock.isValidTeacher()).toBe(true);
        expect(otherReservation.book()).toHaveBeenCalled();
    });
});