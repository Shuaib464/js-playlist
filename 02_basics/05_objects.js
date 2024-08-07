const course = {
    course: "javaScript",
    courseInstructor: "Hitesh Chaudhari",
    channel: "chai aur code",
}

/* de- structure the object */
// const {courseInstructor} = course;

// console.log(courseInstructor);

// we can use another name for the specific property of object given by us
const {courseInstructor: instructor} = course;

console.log(instructor);


