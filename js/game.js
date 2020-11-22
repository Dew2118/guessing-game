var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown); 
}, 1000);
if (countdown <= 0) {alert("times up");}

 var randomStrings = [
    "Soccer/Football",
    "Badminton",
    "Hockey",
    "Volleyball",
    "Basketball",
    "Tennis",
    "Cricket",
    "Table Tennis",
    "Baseball",
    "Golf",
    "Gymnastic",
    "Long Jump",
    "High Jump",
  ];

  var randomSpan = document.getElementById("word");

  document.getElementById("correct").addEventListener("click", generate);
   document.getElementById("pass").addEventListener("click", generate);
  function generate() {
    randomIndex = Math.ceil((Math.random() * randomStrings.length - 1));
    newText = randomStrings[randomIndex];
    randomSpan.innerHTML = newText;
  }

  generate();
 
 var points = document.getElementById("points"); var total = 0;
function addPoint() {
    total++;
    points.innerHTML = total;
}

function minusPoint() {
    total--;
    points.innerHTML = total;
}

