const buttonNum = {
    "green": 0,
    "red":1,
    "yellow":2,
    "blue":3
}

function addRandomNumToAns() {
    var answer = [];
    var randomButton = Math.random() * 4;
    randomButton = Math.round(randomButton);
    answer.push(randomButton);
    return answer
  }

