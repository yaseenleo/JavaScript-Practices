let myYoutubeVideoOne = {
    title: "Loops in JavaScript",
    videoLength: 15,
    videoDescription: "this is a video description and a long one",
    videoCreater: "M. Yaseen"
}

let myYoutubeVideoTwo = {
    title: "Loops in JavaScript",
    videoLength: 15,
    videoDescription: "this is a video description and a long one",
    videoCreater: "M. Yaseen"
}

console.log(myYoutubeVideoOne);

console.log(`Hey new video on ${myYoutubeVideoOne.title} by ${myYoutubeVideoOne.videoCreater}`);

let myCourse = {
    courseName: "JavaScript",
    price: 20,
    description: "this course is for beginners where you can understand the fundamentals of it"
}

console.log(myCourse);
console.log(`This Course name is ${myCourse.courseName} and its price is ${myCourse.price}`);
console.log("Description: " + myCourse.description)


let changeVideoLength = function(myObject) {
    return{
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 3}`
    };
    
}

let adOne = changeVideoLength(myYoutubeVideoOne);
console.log(adOne.formatOne);
