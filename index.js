function start() {
  $("h1").text("Press Any Key to Start");
  $(document).keydown(function () {
    startLevel(3);
  });
}

function startLevel(level) {
  addRandomNumToAns(level);
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

function showAns(answer) {
  // change sound by adding class
  pressButton(answer);
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
  audio.play();
  return;
}

start();
