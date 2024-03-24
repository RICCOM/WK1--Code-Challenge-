//create function for checking speed
function checkSpeed(speed) {
        // Define constants for speed limit, demerit points per 5 km/h over the limit, and maximum demerit points
    const speedLimit = 70;
    const kmPerDemerit = 5;
    const maxDemeritPoints = 12;
    // Determine if the speed is less than the speed limit
    if (speed < speedLimit) {
        // If the speed is within the limit, print "Ok"
        console.log("Ok");
        // If the speed exceeds the limit, calculate the demerit points
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        // Check if the demerit points are within the limit
        if (demeritPoints <= maxDemeritPoints) {
            // If demerit points are within the limit, print the number of demerit points
            console.log("Points: " + demeritPoints);
        } else {
            // If demerit points exceed the limit, print "License suspended"
            console.log("License suspended");
        }
    }
}

