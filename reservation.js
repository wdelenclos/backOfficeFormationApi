const database = require('./service/database.js')
const db = new database();

module.exports = class Reservation{
    constructor(course) {
        this.course = course;
    }

    book(){
        console.log(this.course)
        return (this.course.room.canContain(this.course.places) && this.isFree())
    }

    isFree(){
        let start = this.course.date
        let end = this.course.date.setMinutes(this.course.date.getMinutes() + this.course.duration)
        let reservations = db.count('reservation',{'date': `between ${start} and ${end}`})
        return reservations == 0;
    }
}