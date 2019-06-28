const DB = require('./service/database.js');

const database = new DB;

module.exports = class Course{
	constructor(name,description, places, reservation, students, teacher, room, date, duration) {
	    this.name = name;
	    this.description = description;
	    this.places = places;
	    this.reservation = reservation;
	    this.teacher = teacher;
	    this.students = students;
	    this.room = database.get('room',{'room.name' : room.name});
	    this.date = date;
	    this.duration = duration;
  	}

  	isValid(){
      return !(!this.isValidName() || !this.isValidPlaces() || !this.isValidRoom() || !this.isValidTeacher() || !this.isValidStudent() || !this.isValidDescription);

  	}
    isValidName(){
      return (this.name !== null && this.name !== "")
    }
    isValidPlaces(){
        return (this.places > 0 && this.places !== "") && (this.places !== null && this.places !== "")
    }

    isValidStudent(){
	    return (this.students !== null && this.name !== "")
    }
    isValidRoom(){
	   return (typeof this.room === 'object' && this.room.isAvailable(this.places, this.date, this.duration))
    }
    isValidTeacher(){
        return (typeof this.teacher === 'object' && this.teacher.isValidTeacher())
    }
    isValidDescription(){
	    return (this.description !== null && this.description !== "")
    }
    createCourse(){
	    if(this.isValid()){
            let reservation = new this.reservation(this);
            return reservation.book();
        }
	    return false;
    }
};