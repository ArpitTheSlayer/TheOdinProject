function choice(name) {

  console.log(name);
  let choice = document.getElementById("choice");

  switch (name) {
    case "Rock":
      choice.src = "./images/rock.png";
      break;
    case "Paper":
      choice.src = "./images/paper.png";
      break;
    case "Scissors":
      choice.src = "./images/scissors.png";
      break;
  }

}
