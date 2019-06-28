module.exports = class User{
	constructor(mail,firstname,lastname,age) {
	    this.mail = mail;
	    this.firstname = firstname;
	    this.lastname = lastname;
	    this.age = age;
  	}

  	isValid(){
      if (!this.isValidEmail() || !this.isValidName() || !this.isValidAge()){
        return false
      }
  		return true;
  	}

    isValidEmail(){
      return /\S+@\S+\.\S+/.test(this.mail)
    }

    isValidName(){
      return (this.firstname !== null && this.firstname !== "") && (this.lastname !== null && this.lastname !== "")
    }

    isValidAge(){
      return this.age >= 13
    }

    get mail() {
      return this._mail;
    }

    set mail(newMail) {
      this._mail = newMail;
    }
}