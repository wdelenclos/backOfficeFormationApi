const database = require('./service/database.js')

module.exports = class Room{
    constructor(name,places) {
        this.name = name;
        this.places = places;
    }

    isAvailable(places){
        return (this.places > places)
    }
}