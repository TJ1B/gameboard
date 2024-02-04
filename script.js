// Dice
function rollNumberDice() {
    var dice = document.getElementById('numberDice');
    var resultElement = document.getElementById('numberResult');
    dice.classList.add('rolling');
    resultElement.classList.remove('show-result');
    setTimeout(function() {
        var result = Math.floor(Math.random() * 4) + 1;
        resultElement.innerHTML = result;
        resultElement.classList.add('show-result');
        dice.classList.remove('rolling');
    }, 600);
}

function rollDirectionDice() {
    var dice = document.getElementById('directionDice');
    var resultElement = document.getElementById('directionResult');
    dice.classList.add('rolling');
    resultElement.classList.remove('show-result');
    setTimeout(function() {
        var directions = ['N', 'S', 'E', 'W'];
        var result = directions[Math.floor(Math.random() * directions.length)];
        resultElement.innerHTML = result;
        resultElement.classList.add('show-result');
        dice.classList.remove('rolling');
    }, 600);
}


 // Draggable Image
 $( function() {
  $( "#draggableImage" ).draggable();
});

// Status
function incrementValue(type) {
const valueElement = document.getElementById(`${type}-value`);
let currentValue = parseInt(valueElement.innerText, 10);
valueElement.innerText = currentValue + 1;
}

function decrementValue(type) {
const valueElement = document.getElementById(`${type}-value`);
let currentValue = parseInt(valueElement.innerText, 10);
valueElement.innerText = Math.max(0, currentValue - 1); // Prevent negative values
}


/*

// Random Card Draw
$(function() {
    // Define color configuration
    const colorConfig = [
      { color: 'rgb(196, 85, 57)', count: 6 },
      { color: 'rgba(60,178,175)', count: 6 },
      { color: 'rgb(12, 189, 106)', count: 12 },
      { color: 'rgb(181,235,71)', count: 12 },
      { color: 'rgb(165,101,137)', count: 6 },
      { color: 'rgb(255,193,48)', count: 6 },
      { color: 'rgb(73, 73, 73)', count: 1 },
      { color: 'rgb(207,174,161)', count: 95 }
    ];
  
    // Prepare the cards array with specified counts
    let cards = colorConfig.flatMap(config => Array(config.count).fill(config.color));
  
    // Shuffle function (Fisher-Yates shuffle)
    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
  
    // Shuffle the cards
    cards = shuffle(cards);
  
    // Create and append shuffled cards to the container
    const container = $(".card-container");
    cards.forEach(color => {
      const card = $('<div class="card"></div>').css('background-color', color);
      container.append(card);
      card.draggable();
    });
  });

*/
document.addEventListener('DOMContentLoaded', () => {
  const colorDistribution = {
    'rgb(196, 85, 57)': 6, 
    'rgba(60,178,175)': 6, 
    'rgb(12, 189, 106)': 12, 
    'rgb(181,235,71)': 12, 
    'rgb(165,101,137)': 6, 
    'rgb(255,193,48)': 6, 
    'rgb(224, 88, 99)': 1, 
    'rgb(207,174,161)': 95  
  };
  const cards = [];
  
  Object.keys(colorDistribution).forEach(color => {
    for (let i = 0; i < colorDistribution[color]; i++) {
      cards.push({ color });
    }
  });

  shuffle(cards); // 打乱卡片顺序

  const gridContainer = document.getElementById('grid-container');
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `<div class="back" style="background-color: ${card.color};"></div>`;

    cardElement.addEventListener('click', () => {
      cardElement.classList.toggle('flip'); // 添加toggle而不是add，允许卡片再次点击时翻回去
    });

    gridContainer.appendChild(cardElement);
  });
});

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
