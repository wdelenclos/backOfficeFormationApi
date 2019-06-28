const Reservation = require('./reservation');
const Room = require('./room');
const Course = require('./course');


let room = new Room('B2',20)
let course = new Course(null,null,null,null,null,null,new Date(),120)
let reservation = new Reservation(course);

console.log(reservation.isFree())