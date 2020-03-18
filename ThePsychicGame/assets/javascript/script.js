var getRandomChar = function () {
    var chars = "abcdefghiklmnopqrstuvwxyz";
    var rnum = Math.floor(Math.random() * chars.length);
    var compG = chars.charAt(rnum);
    return compG;
};
var userG = document.getElementById('typed');

var guesLeft = document.getElementById("guesses");

var wins = document.getElementById("wins");

var losses = document.getElementById("losses");
guesLeft.textContent = 9;

document.onkeyup = function (event) {
    myFun(event.key);
}

var i = 9;
var w = 0;
var l = 0;

var compGG = getRandomChar();

var reset = function() {
    i = 9;
    userG.textContent = " ";
    guesLeft.textContent=9;
  };
  

var myFun = function (uChar) {
    if (i !== 0) {
        console.log(i);

        userG.textContent = userG.textContent + " " + uChar;

        console.log(compGG + " " + uChar);

        if (compGG === uChar) {

            wins.textContent = ++w;
            console.log("wins" + wins);
        }
        else {

            losses.textContent = ++l;
            console.log("losses" + losses);
        }


        guesLeft.textContent = i;
        i--;
    }
    if (i == 0) {
        reset();
    }
}
