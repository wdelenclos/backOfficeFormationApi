module.exports = class User{
    constructor(mail,firstname,lastname,roles,age,sendIDCard) {
        this.mail = mail;
        this.firstname = firstname;
        this.lastname = lastname;
        this.roles = roles;
        this.age = age
        this.sendIDCard = sendIDCard

        if(!['teacher','student'].includes(this.roles)){
          throw new Error();
        }
      }
    
    isValidTeacher(){
      return this.roles == 'teacher' && this.age >= 18 && this.sendIDCard
    }
}