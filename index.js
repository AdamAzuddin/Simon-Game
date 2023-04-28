function startLevel(level) {
    $("h1").text(`Start Level ${level}`);
  addRandomNumToAns(level);
}


function start() {
  $("h1").text("Press Any Key to Start");
  $(document).keydown(function () {
    startLevel(1);
  });
}

start();
