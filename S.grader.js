//create a function to generate the grade based on the student's mark
function generateGrade(mark){
    // Check if the mark ranges between (>79-100)
    if (mark > 79 && mark <= 100) {
        return "A";
        // Check if the mark ranges between (>59-79)
    }else if (mark > 59 && mark <=79){
        return "B";
        // Check if the mark ranges between (>49-59)
    }else if (mark > 49 && mark <=59){
        return "C";
        // Check if the mark ranges between (>40-49)
    }else if (mark >= 40 && mark <=49){
        return "D";
        // Check if the mark ranges between (0-40)
    }else if (mark >= 0 && mark < 40){
        return "E";
    }else{
        // return "Invalid Input" if the mark is not in the valid ranges
        return "Invalid Input";
    }
}
// Ask the user to input the studentd's mark
const mark =parseFloat(prompt("Enter the student's mark (between 0 and 100):"));
// Ensure  the input is a valid number between 0 and 100
if (!isNaN(mark) && mark >= 0 && mark <= 100) {
    //Generate grade if the input is valid using generateGrade function
    const grade =generateGrade(mark);

console.log("Grade:", grade);
}
//If the input is invalid, ask the user to enter a valid number
else {
    console.log("Invalid input. Please enter a number between 0 and 100.");
}