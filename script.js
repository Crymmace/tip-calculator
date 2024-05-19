// script.js

// Create function
function calculateTip(){

    //Store input data
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;

    //Validation
    if(billAmount === "" || serviceQuality === "") {
       return window.alert("Please enter some values!");
    }

    // Check if input is empty or less than or equal to 1
    if(totalPeople === "" || totalPeople <= 1){
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }

    // Tip math
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // Display tip
    document.getElementById("totalTip").style.display ="block";
    document.getElementById("tip").innerHTML = total;

}

// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Call function on button click
document.getElementById("calculate").onclick = function(){calculateTip();};