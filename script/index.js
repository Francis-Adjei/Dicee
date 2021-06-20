diceFunction = () => {

    // Setting random numbers between 1-6 for Player 1

let randomNumber1 = (Math.floor(Math.random() * 6) + 1);

let randomImageSource = "images/dice" + randomNumber1 + ".png";

let image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomImageSource);


// Setting random numbers between 1-6 for Player 2

let randomNumber2 = (Math.floor(Math.random() * 6) + 1);

let randomImageSource1 = "images/dice" + randomNumber2 + ".png";

let image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);


if (randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML = "Player 1 won!";

}else if (randomNumber1 < randomNumber2){

  document.querySelector("h1").innerHTML = "Player 2 won!";

}else{

  document.querySelector("h1").innerHTML = "Draw!";
  
}


}

diceFunction();