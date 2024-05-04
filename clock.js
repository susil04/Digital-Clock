function clock() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var today = new Date();

    document.getElementById('date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dayPeriod = h < 12 ? 'AM' : 'PM';

    // Convert to 12-hour format
    h = (h % 12) || 12;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m; // corrected the typo from 'mim' to 'min'
    document.getElementById('sec').innerHTML = s;
    document.getElementById('period').innerHTML = dayPeriod;
}
var inter = setInterval(clock, 1000); // Changed interval to 1000 milliseconds for better accuracy
