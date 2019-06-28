module.exports = class User{
	constructor(name,description,places, studentClass, teacher, room, date, duration) {
	    this.name = name;
	    this.description = description;
	    this.places = places;
	    this.studentClass = studentClass;
	    this.teacher = teacher;
	    this.room = room;
	    this.date = date;
	    this.duration = duration;
  	}

  	isValid(){
      if (!this.isValidName() || !this.isValidPlaces() || this.isValidRoom() || this.isValidTeacher()){
        return false
      }
  		return true;
  	}
    isValidName(){
      return (this.name !== null && this.name !== "")
    }
    isValidPlaces(){
        return (this.places > 0 && this.places !== "") && (this.places !== null && this.places !== "")
    }

    isValidRoom(){
	   return (typeof this.room === 'object' && this.room.isAvailable())
    }
    isValidTeacher(){
        return (typeof this.teacher === 'object' && this.teacher.isValidTeacher())
    }
    isValidStudentClass(){
        return (typeof this.studentClass === 'object' && this.studentClass.isValidClass())
    }
    createCourse(){
        if(!this.isValidName() || !this.isValidPlaces() || this.isValidRoom() || this.isValidTeacher()){
            return false
        }
        return this;
    }
};