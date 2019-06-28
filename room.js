module.exports = class Room{
    constructor(name,places) {
        this.name = name;
        this.places = places;
    }
    canContain(places){
        return (this.places > places) && places > 0
    }
}