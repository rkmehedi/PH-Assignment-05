let totalCounter = 23;
let currentTasks = 6;

const completeButtons = document.querySelectorAll(".complete-button");

completeButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (currentTasks > 0) {
            currentTasks -= 1;
            totalCounter += 1;
            document.getElementById("total-counter-top").textContent = totalCounter;
            document.getElementById("count-part-db").textContent = currentTasks;

            let taskName = this.closest(".controller-card").querySelector(".card-title").textContent.trim();

            const currentTime = new Date().toLocaleTimeString();

            let taskMessage = `<h3 class="auto-message">You have completed the task ${taskName} at ${currentTime}</h3>`;
            document.getElementById("controlled-task").innerHTML += taskMessage;

            this.disabled = true;
            this.classList.add("disabled-button-style");
            
            alert("Board updated successfully");
            if (currentTasks === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
        }
    });
});
