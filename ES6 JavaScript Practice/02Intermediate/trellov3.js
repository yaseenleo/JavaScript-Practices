let myTodos = {
    day: 'Tuesday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num) {
        this.meetings = this.meetings + num
    },
    meetingDone: function(num) {
        this.meetDone = this.meetDone + num;
        this.meetings = this.meetings - this.meetDone
    },

    clearList: function() {
        this.day = "Monday";
        this.meetings =  0;
        this.meetDone =  0;
    },

    summary: function() {
        return `You have ${this.meetings} meetings today and ${this.meetDone} meetings done on ${this.day}`
    },
}

myTodos.addMeeting(4);
myTodos.meetingDone(2);
myTodos.clearList()
console.log(myTodos.summary());

//assignment 
//handle the meeting
// create a fn that can reset the entire day