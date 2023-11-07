// script.js
document.querySelector('.search-btn').addEventListener('click', function() {
    // Implementation for the search action
    var departure = document.querySelector('input[placeholder="Departure"]').value;
    var arrival = document.querySelector('input[placeholder="Arrival"]').value;
    var date = document.querySelector('input[type="date"]').value;

    if(departure && arrival && date) {
        // You would normally handle the search logic here, such as making an AJAX request to your server
        console.log("Search for trips from " + departure + " to " + arrival + " on " + date);
        // For now, just show a simple alert
        alert("Search initiated!");
    } else {
        alert("Please fill out all the fields.");
    }
});