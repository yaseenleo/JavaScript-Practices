let restaurant = {
    name: "xyz",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatLeft = this.guestCapacity - restaurant.guestCount;
        console.log(seatLeft, "seat")
        if(seatLeft >= 5){
            console.log("seat available")
        } else {
            console.log("full no space");
        }
        return partySize <= seatLeft
    },
    addGuest: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeGuest: function(partySize){
        this.guestCount = this.guestCount - partySize
    }

}

restaurant.addGuest(72);
restaurant.removeGuest(3)
let value = restaurant.checkAvailability()
console.log(value, "check");