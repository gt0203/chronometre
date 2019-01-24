


window.onload = function () {
  // On déclare les variables
  var secondes = 00;
  var number = 00;
  var minutes = 00;
  var appendnumber = document.getElementById("number")
  var appendSecondes = document.getElementById("secondes")
  var appendMinutes = document.getElementById("minutes")
  var boutonStart = document.getElementById('bouton-start');
  var boutonStop = document.getElementById('bouton-stop');
  var boutonReset = document.getElementById('bouton-reset');
  var Interval;

  boutonStart.onclick = function () {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  boutonStop.onclick = function () {
    clearInterval(Interval);
    
   

   
       
    localStorage.setItem("minutes", minutes);
    localStorage.getItem(minutes);
    localStorage.setItem("secondes", secondes);
    localStorage.getItem(secondes);
    localStorage.setItem("milisecondes", number);
    localStorage.getItem(number);
  }


  boutonReset.onclick = function () {
    clearInterval(Interval);
    minutes = "00";
    number = "00";
    secondes = "00";
    appendMinutes.innerHTML = minutes;
    appendnumber.innerHTML = number;
    appendSecondes.innerHTML = secondes;
    localStorage.removeItem("minutes", minutes);
    localStorage.removeItem(number);
    localStorage.removeItem("secondes", secondes);
    localStorage.removeItem(number);
    localStorage.removeItem("milisecondes", number);
    localStorage.removeItem(number);
  }



  function startTimer() {
    number++;
    // si le nombre est en dessous de 9, on met le "0" en premiere position
    
    if (number < 9) {
      appendnumber.innerHTML = "0" + number;
    }
    // si le nombre est au dessus de 9, on enleve le "0" en premiere position
    if (number > 9) {
      appendnumber.innerHTML = number;

    }

    if (number > 99) {
      

      secondes++;
      appendSecondes.innerHTML = "0" + secondes;
      number = 0;
      appendnumber.innerHTML = "0" + 0;
    }

    if (secondes > 9) {
      appendSecondes.innerHTML = secondes;
    }

    if (secondes > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      secondes = 0;
      appendSecondes.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }

}

// ----------------------------------------------------------------------------------------------------------------------------------

var saveBtn = document.getElementById("saveBtn");
var nameInput = document.getElementById("nameInput");
var inputError = document.getElementById("inputError")
var showBtn = document.getElementById("showBtn");
var deleteBtn = document.getElementById("deleteBtn");
var boardName = document.getElementById("boardName");
var boardTime = document.getElementById("boardTime");
var secondess = document.getElementById("secondes");
var minutess = document.getElementById("minutes");
var numberss = document.getElementById("number");
var alerte = document.querySelector(".savealerte");
var printBtn = document.getElementById("printBtn");
// var nombre = document.querySelector("nombre");
// var tempsall2 = {
//   seconde: test3,
//   miliseconde: t,
//  }; 
var lbArray = [];

// nombre.innerHTML = tempsall2.secondes + " " + tempsall2.minutes;


saveBtn.addEventListener("click", savedernierTemps);

// Cette fonction sauvegarde dans le localStorage le timer ainsi que la value inscrite dans l'input

function savedernierTemps(event) {
    if (nameInput.value == "") {
            inputError.innerHTML = "Merci de renseigner votre nom.";
    }
    else {
        inputError.innerHTML = "";
        var lbObject = {
            name: nameInput.value,
            time: minutess.innerHTML + ":" +  secondess.innerHTML + ":" + numberss.innerHTML,
        };
        lbArray.push(lbObject);
        localStorage.setItem("leaderboard", JSON.stringify(lbArray));
        alerte.className = "alert alert-success";
        alerte.innerHTML = `<strong>Votre temps a été sauvegardé</strong> </br>  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> `;
        
    }
}

// On écoute le bouton "deleteBtn" et exécute la fonction removeTimer

deleteBtn.addEventListener("click", removeTimer);

// Cette fonction vide TOUT le local storage

function removeTimer(event) {

    localStorage.clear()
    alerte.className = "alert alert-success";
    nameInput.value = "";
    alerte.innerHTML = '<strong>Votre temps a été supprimé</strong> </br>  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> ';

}

// On écoute le bouton "showBtn" et exécute la fonction display

showBtn.addEventListener("click", display);

function display() {
    var leaderboardList = JSON.parse(localStorage.getItem('leaderboard'));
    boardName.innerHTML = '';
    boardTime.innerHTML = '';
    leaderboardList.forEach(function (score) {
        // On crée l'élément p et lui donne une ID
        var liName = document.createElement("li");
        liName.className = "name text-truncate";
        // On envoie l'élément p dans le board
        boardName.appendChild(liName);
        var liTime = document.createElement("li");
        liTime.className = "time";
        boardTime.appendChild(liTime);
        //  On envoie le localStorage dans le contenu p
        liName.innerText = score.name;
        liTime.innerText = score.time;
        // board.innerHTML += "nom: " + score.name + "time: " + score.time;
    }
    );

}

// On écoute le bouton "showBtn" et exécute la fonction printPage
printBtn.addEventListener("click", printPage);

// printPage ouvre l'option print
function printPage() {
    window.print();
}

}

  



// var saveButton = document.querySelector("#saveButton");
// var loadButton = document.querySelector("#loadButton");
// var removeButton = document.querySelector ("#removeButton");
// var dernierTempsInput = document.querySelector("#dernierTemps");
// var alerte = document.querySelector(".savealerte");

// saveButton.addEventListener("click", savedernierTemps);
// loadButton.addEventListener("click", loaddernierTemps);
// removeButton.addEventListener("click", removedernierTemps);

// function savedernierTemps(event){
//   localStorage.setItem("dernierTemps", JSON.stringify(dernierTempsInput.value))
  
//   alerte.className = "alert alert-success";
//   alerte.innerHTML = `<strong>Votre temps a été sauvegardé</strong> </br>  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> `;
  

// }

// function loaddernierTemps(event) {
//   dernierTempsInput.value = JSON.parse(localStorage.getItem("#dernierTemps"));
  
// }

// function removedernierTemps(event) {
//     localStorage.removeItem("dernierTemps");
//     var inputt = document.querySelector("#dernierTemps");
//     inputt.value = "";
//     alerte.className = "alert alert-success";
//     alerte.innerHTML = '<strong>Votre temps a été supprimé</strong> </br>  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> ';
// }






