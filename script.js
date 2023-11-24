// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Click event
    document.getElementById("clickMeButton").addEventListener("click", function () {
      alert("Thanks for your suggestions!");
    });
});


  // Play sound function
  function playSurvivalSound() {
    var audio = document.getElementById("survivalSound");
    audio.play();
  }
  
  