document.querySelector("button").addEventListener("click", function () {
    var suggestion = document.querySelector("input").value;
    if (validate(suggestion)) {
        document.getElementById("feedback").innerHTML = "Thanks! We'll be in touch!";
        document.getElementById("feedback").style.color = "#54E6AF";
    }
    displayFeedback();
})

// hide the feedback message everytime the input box is clicked
document.querySelector("input").addEventListener("click", function () {
    document.getElementById("feedback").style.visibility = "hidden";
})

function displayFeedback() {
    document.getElementById("feedback").style.visibility = "visible";
}

// validate email using regex
function validate(suggestion) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (suggestion.match(validRegex)) {
        return 1;
    }
    return 0;
}