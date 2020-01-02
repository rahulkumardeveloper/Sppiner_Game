//we need degree variable so that we can increment the values in loop, 
//count variable is optional, 
//start variable I'm using since I m using arrow function directly and I will be calling this start variable inside the stopSpinning function so that I can apply clear Interval on it, 
//speed variable is also optional

var degree = 1;
var count = 0;
var start;
let speed = 0.01 * 0.01;

var isStartBtnVisible = true;
var isStopBtnVisible = true;

function startSpinning() {
    // console.log('starting the spin');

    var wheel = document.querySelector(".wheel");
    start = setInterval(() => {
        // removing the error if it's shown on the page upon clicking of start button
        document.querySelector(".error").innerHTML = " ";
        //adding a transform css rule to wheel , exampple: transform : rotate(45deg), so i m breaking rotate(45deg) and adding the degree value dynamically
        wheel.style.transform = "rotate(" + degree + "deg)";
        //incrementing the degree value by 1 on each loop
        degree++;

        //resetting the degree value to 0 once it reaches 360
        if (degree == 360) {
            count++;
            degree = 0;
        }
        //optional
        console.log("Spin count: " + count);
    }, speed);

    //This below condition is to avoid user click on start button more than once as it will invoke the set interval multiple times and spin will not stop
    if (isStartBtnVisible) {
        isStartBtnVisible = false;
        document.querySelector("#startSpin").classList.add("hide");
        document.querySelector("#startSpin").classList.remove("show");
    } else {
        isStartBtnVisible = true;
        document.querySelector("#startSpin").classList.add("show");
        document.querySelector("#startSpin").classList.remove("hide");
    }

    console.log(degree);

    return start;                                                           
}

function stopSpinning() {
    console.log("stopping the spin");
    console.log(degree);
    clearTimeout(start); //this will stop the spinning of the wheel


    // checking if the user click on stop button first , we need to show an error msg, else move on to else block
    if (isStartBtnVisible) {
        if (isStopBtnVisible) {
            document.querySelector(".error").innerHTML =
                "<b>* </b>Please click on Start button to spin the Wheel";
        } else {
            isStartBtnVisible = false;
            document.querySelector("#startSpin").classList.add("hide");
            document.querySelector("#startSpin").classList.remove("show");
        }
    } else {
        isStartBtnVisible = true;
        document.querySelector("#startSpin").classList.add("show");
        document.querySelector("#startSpin").classList.remove("hide");
    }
}