var level = 1;
var userArray = [];
var currentPoint = 0;
$("h1").text("Press Any Key to Start");
$(document).one("keydown", function () {
  $("h1").text(`Starting level ${level}`);
  var correctArray = addRandomNumToAns(level);
  console.log(`Correct answer: ` + correctArray);
  $(".btn").click(function (e) {
    e.preventDefault();
    // convert button id to array index num
    var btnNum = idToNum($(this).attr("id"));
    
    userArray.push(btnNum);
    console.log("Your answer: " + userArray);
    for (let index = 0; index < userArray.length; index++) {
      if (userArray[index] !== correctArray[index]) {
        console.log("Wrong!");
        $("h1").text("Game Over!");
        var isWin = false;
        break;
      }
      if (userArray[index] == correctArray[index]) {
        currentPoint = userArray.length;

        console.log(currentPoint + "/" + correctArray.length);
        if (currentPoint == correctArray.length) {
          var isWin = true;
          console.log("You Win");
          break;
        }
      }
    }
    if (isWin) {
      level++;
      console.log(level);
      userArray = [];
      currentPoint = 0;
      correctArray=[]

      $(".btn").off("click");
      startLevel(level);
    }
  });
});

function startLevel(level) {
  $("h1").text(`Starting level ${level}`);
  var correctArray = addRandomNumToAns(level);
  console.log(`Correct answer: ` + correctArray);
  $(".btn").click(function (e) {
    e.preventDefault();
    console.log("Hi");
    // TODO: Complete this function
    var btnNum = idToNum($(this).attr("id"));
    userArray.push(btnNum);
    console.log("Your answer: " + userArray);
    for (let index = 0; index < userArray.length; index++) {
      if (userArray[index] !== correctArray[index]) {
        console.log("Wrong!");
        $("h1").text("Game Over!");
        var isWin = false;
        break;
      }
      if (userArray[index] == correctArray[index]) {
        currentPoint = userArray.length;

        console.log(currentPoint + "/" + correctArray.length);
        if (currentPoint == correctArray.length) {
          var isWin = true;
          console.log("You Win");
          break;
        }
      }
    }
    if (isWin) {
      level++;
      console.log(level);
      userArray = [];
      currentPoint = 0;

      $(".btn").off("click");
      startLevel(level);
    }
  });
}

function idToNum(id) {
  switch (id) {
    case "green":
      var btnNum = 0;
      break;
    case "red":
      var btnNum = 1;
      break;
    case "yellow":
      var btnNum = 2;
      break;
    case "blue":
      var btnNum = 3;
      break;
    default:
      break;
  }
  return btnNum;
}
function addRandomNumToAns(length) {
  var answer = [];
  for (let index = 0; index < length; index++) {
    var randomButton = Math.floor(Math.random() * 4);
    answer.push(randomButton);
  }

  if (answer.length > 1) {
    for (let i = 0; i < answer.length; i++) {
      setTimeout(() => {
        pressButton(answer[i]);
      }, i * 1000);
    }
  } else {
    pressButton(answer[0]);
  }

  return answer;
}

function pressButton(number) {
  // convert position number to class name
  switch (number) {
    case 0:
      var btnClass = "green";
      break;
    case 1:
      var btnClass = "red";
      break;
    case 2:
      var btnClass = "yellow";
      break;
    case 3:
      var btnClass = "blue";
      break;
    default:
      break;
  }

  $(`.${btnClass}`).addClass("pressed");
  setTimeout(() => {
    $(`.${btnClass}`).removeClass("pressed");
  }, 150);
  playSound(btnClass);
  return;
}

function playSound(fileName) {
  var audio = new Audio(`./sounds/${fileName}.mp3`);
  audio = audio.play();
  return audio;
}
