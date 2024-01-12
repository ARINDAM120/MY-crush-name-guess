document.addEventListener("DOMContentLoaded", function () {
    // Function to play sound
    function playSound(sound) {
        var audio = new Audio(sound);
        audio.play();
    }

    // Function to check the name and display the result
    function checkName() {
        var nameInput = document.getElementById("nameInput").value;
        var resultMessage = document.getElementById("resultMessage");

        if (nameInput.toLowerCase() === "arya") {
            resultMessage.innerHTML = "Ya, you got it!";
            playSound("correct.mp3"); // Updated to use "correct.mp3" for the correct sound file
            // You can add additional actions or styling here if needed
            document.getElementById("nameBox").classList.add("success");
        } else {
            resultMessage.innerHTML = "";
            playSound("error.mp3"); // Keep using "error.mp3" for the error sound file
            document.getElementById("nameBox").classList.remove("success");
        }
    }

    // Add event listener for the "Enter" key press
    document.getElementById("nameInput").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            checkName();
        }
    });

    // Add event listener for the check button
    document.getElementById("checkButton").addEventListener("click", checkName);
});
