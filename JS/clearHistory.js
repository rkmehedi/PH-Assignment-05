const clearButton = document.getElementById("clear-action-button");

clearButton.addEventListener("click", function() {
    document.getElementById("controlled-task").innerHTML = '';
});
