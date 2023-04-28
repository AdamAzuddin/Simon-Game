function startLevel(level) {
  $("h1").text(`Start Level ${level}`);
  addRandomNumToAns(level);
}
function addRandomNumToAns(length) {
  var answer = [];
  for (let index = 0; index < length; index++) {
    var randomButton = Math.floor(Math.random() * 4);
    answer.push(randomButton);
  }
  showAns(answer);
}
function showAns(answerArray) {
  // change sound by adding class
  for (let index = 0; index < answerArray.length; index++) {
    pressButton(answerArray[index]);
  }
}


function start() {
  $("h1").text("Press Any Key to Start");
  $(document).keydown(function () {
    startLevel(1);
  });
}

start();
