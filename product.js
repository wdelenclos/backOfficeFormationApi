const User = require('./user.js')

module.exports = class Product{
	constructor(name,owner){
		this.name = name;
		this.owner = owner;
	}

	get owner() {
      return this._owner;
    }

  set owner(owner) {
      this._owner = owner;
    }

    isValid(){
    	return (this.name !== null && this.name !== '') && this.owner.isValid()
    }
}