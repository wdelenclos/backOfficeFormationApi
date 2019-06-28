module.exports = class User{
	constructor(name,description,places,students, teacher, room, date, duration) {
	    this.name = name;
	    this.description = description;
	    this.places = places;
	    this.students = students;
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

    isValidEmail(){
      return /\S+@\S+\.\S+/.test(this.mail)
    }

    isValidName(){
      return (this.name !== null && this.name !== "")
    }
    isValidPlaces(){
        return (this.places > 0 && this.places !== "") && (this.places !== null && this.places !== "")
    }

    isValidRoom(){
	   return (typeof this.room === 'object' && this.room.available())
    }
    isValidTeacher(){
        return (typeof this.teacher === 'object' && this.teacher.isValidTeacher())
    }
    createCourse(){
        if(!this.isValidName() || !this.isValidPlaces() || this.isValidRoom() || this.isValidTeacher()){
            return false
        }
        return this;
    }
};