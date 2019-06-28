module.exports = class User{
    constructor(mail,firstname,lastname,roles,age,sendIDCard) {
        this.mail = mail;
        this.firstname = firstname;
        this.lastname = lastname;
        this.roles = roles;
        this.age = age
        this.sendIDCard = sendIDCard

      }
    
    isValidTeacher(){
      return this.roles == 'teacher' && this.age >= 18 && this.sendIDCard
    }

    isValidStudent(){
      return this.roles == 'student'
    }

    isValidRoles(){
        return this.roles == 'teacher' || this.roles == 'student'
    }

    isValidEmail(){
        return /\S+@\S+\.\S+/.test(this.mail)
    }

    isValidName(){
        return (this.firstname !== null && this.firstname !== "") && (this.lastname !== null && this.lastname !== "")
    }
}