const Mailer = require('./service/mailer.js')
const Database = require('./service/database.js')

module.exports = class Exchange{
	constructor(receiver,product,startDate,endDate){
		this.receiver = receiver;
		this.product = product;
		this.owner = this.product.owner;
		this.startDate = new Date(startDate);
		this.endDate = new Date(endDate+'T23:59');
		this.Mailer = new Mailer();
		this.db = new Database();
	}

	save(){
		if(!this.receiver.isValidAge()){
			this.Mailer.send(this.receiver.mail);
			return true
		}
		if(this.receiver.isValid() && this.product.isValid() && this.isValidDateInterval()){
			this.db.save(this)
			return true
		}
		return false
	}

	isValidDateInterval(){
		const today = new Date();
		today.setDate(today.getDate() - 1)
		if(this.startDate < today || this.startDate > this.endDate) return false
		return true
	}
}