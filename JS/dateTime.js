
function myDate() {
    let myDay = new Date();

    let dayNow = { weekday: 'short' };
    let restDate = { month: 'short', day: '2-digit', year: 'numeric' };

    let onlyDay = myDay.toLocaleDateString('en-US', dayNow);
    let fullDate = myDay.toLocaleDateString('en-US', restDate).replace(',', '');

    document.getElementById("onlyDay").textContent = onlyDay;
    document.getElementById("rest-date").textContent = fullDate;
    
}

myDate();

