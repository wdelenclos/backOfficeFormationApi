const DB = require('/service/database.js');

const database = new DB;

module.exports = class User{
	constructor(name,description,places, reservation, teacher, room, date, duration) {
	    this.name = name;
	    this.description = description;
	    this.places = places;
	    this.reservation = reservation;
	    this.teacher = teacher;
	    this.room = room;
	    this.date = date;
	    this.duration = duration;
  	}

  	isValid(){
      return !(!this.isValidName() || !this.isValidPlaces() || !this.isValidRoom() || !this.isValidTeacher() || !this.isValidDescription);

  	}
    isValidName(){
      return (this.name !== null && this.name !== "")
    }
    isValidPlaces(){
        return (this.places > 0 && this.places !== "") && (this.places !== null && this.places !== "")
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
	    let reservation = new this.reservation(database.get('room',{'room.name' : this.room.name}));
	    return reservation.book();
    }
};