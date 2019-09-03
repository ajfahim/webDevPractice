var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var p1Span = document.querySelector("#p1Span");
var p2Span = document.querySelector("#p2Span");
var counterInput = document.querySelector("#counterInput");
var counterSpan = document.querySelector("#counterSpan");
counterSpan.textContent = "5";


counterInput.addEventListener("change", function() {

    counterSpan.innerHTML = counterInput.value;


});
counterSpan.innerHTML = counterInput.Value;

p1Button.addEventListener("click", function() {
    p1Score++;
    p1Span.innerHTML = p1Score;
});

p2Button.addEventListener("click", function() {
    alert("p2 clicked")
});

resetButton.addEventListener("click", function() {
    alert("reset Clicked")
})