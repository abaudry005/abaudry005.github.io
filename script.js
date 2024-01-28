let currentLanguage = 'en';  // Langue par défaut

function updateContent() {
  // Charge le fichier de langue correspondant à la langue actuelle
  fetch(`lang/${currentLanguage}.json`)
    .then(response => response.json())
    .then(data => {
      // Met à jour le contenu des éléments avec les nouvelles traductions
      document.getElementById('description').textContent = data.description;
      document.getElementById('download').textContent = data.download;
      document.getElementById('linkedin').textContent = data.linkedin;
      document.getElementById('contact').textContent = data.contact;
      document.getElementById('skills').textContent = data.skills;
      document.getElementById('developer').textContent = data.developer;
      document.getElementById('experience').textContent = data.experience;
      document.getElementById('setec').textContent = data.setec;
      document.getElementById('setec_desc').textContent = data.setec_desc;
      document.getElementById('more1').textContent = data.more1;
      document.getElementById('orbow').textContent = data.orbow;
      document.getElementById('fcp').textContent = data.fcp;
      document.getElementById('fcp_desc').textContent = data.fcp_desc;
      document.getElementById('projects').textContent = data.projects;
      document.getElementById('graph').textContent = data.graph;
      document.getElementById('graph_desc').textContent = data.graph_desc;
      document.getElementById('flutter').textContent = data.flutter;
      document.getElementById('flutter_desc').textContent = data.flutter_desc;
      document.getElementById('eirbmon').textContent = data.eirbmon;
      document.getElementById('eirbmon_desc').textContent = data.eirbmon_desc;
      document.getElementById('more2').textContent = data.more2;
      document.getElementById('bombeirb').textContent = data.bombeirb;
      document.getElementById('bombeirb_desc').textContent = data.bombeirb_desc;
      document.getElementById('github').textContent = data.github;
      document.getElementById('Hobbies').textContent = data.Hobbies;
      document.getElementById('about').textContent = data.about;
      document.getElementById('hobbies_txt').textContent = data.hobbies_txt;
    });
}

document.getElementById('apple-switch').addEventListener('change', () => {
  // Bascule entre les langues (par exemple, entre 'en' et 'fr')
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  updateContent();  // Met à jour le contenu lors du changement de langue
});

// Charge le contenu initial au chargement de la page
updateContent();

/*------Topnav--------*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


/*----Contact------*/

function myFunctionContact() {
    if(document.getElementById("contact-hide").style.display === "flex"){
        document.getElementById("contact-hide").style.display = "none";
    }
    else{
        document.getElementById("contact-hide").style.display = "flex";
    }
}

/*------Memory_Game------*/

const cards = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png', 'images/image8.png', 'images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png', 'images/image8.png'];
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  const shuffledCards = shuffle(cards);
  const memoryBoard = document.getElementById('memory-board');

  shuffledCards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.card = card;
    cardElement.addEventListener('click', flipCard);

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front', 'card-content');

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back', 'card-content');
  const imgElement = document.createElement('img');
  imgElement.src = card;
  cardBack.appendChild(imgElement);

    cardElement.appendChild(cardFront);
    cardElement.appendChild(cardBack);

    memoryBoard.appendChild(cardElement);
  });
}

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.card === card2.dataset.card) {
    matchedCards.push(card1, card2);

    if (matchedCards.length === cards.length) {
      alert('Congratulations! You won!');
    }
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }

  flippedCards = [];
}

createBoard();

/*------Snake_Game------*/
document.addEventListener('DOMContentLoaded', () => {

  const gridSize = 10;
  const board = document.getElementById('game-board');
  const cells = [];

  let snake = [];
  let direction = 'right';
  let food = getRandomCell();
  let gameInterval;

  const playButton = document.getElementById('play-button');
  const gameBoard = document.getElementById('game-board');

  playButton.addEventListener('click', () => {
    gameBoard.classList.remove('overlay');
  });

  function createBoard() {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cells.push(cell);
        board.appendChild(cell);
      }
    }
  }

  function drawSnake() {
    cells.forEach(cell => cell.classList.remove('snake'));
    snake.forEach(segment => {
      const index = segment.x + segment.y * gridSize;
      cells[index].classList.add('snake');
    });
  }

  function drawFood() {
    const index = food.x + food.y * gridSize;
    cells[index].classList.add('food');
  }

  function removeFood() {
    const index = food.x + food.y * gridSize;
    cells[index].classList.remove('food');
  }

  function getRandomCell() {
    return {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    };
  }

  function move() {
    const head = Object.assign({}, snake[0]);

    switch (direction) {
      case 'up':
        head.y = (head.y - 1 + gridSize) % gridSize;
        break;
      case 'down':
        head.y = (head.y + 1) % gridSize;
        break;
      case 'left':
        head.x = (head.x - 1 + gridSize) % gridSize;
        break;
      case 'right':
        head.x = (head.x + 1) % gridSize;
        break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      // Si le serpent mange la nourriture
      removeFood();
      food = getRandomCell();
    } else {
      const tail = snake.pop();
      const tailIndex = tail.x + tail.y * gridSize;
      cells[tailIndex].classList.remove('snake');
    }

    drawSnake();
    drawFood();
  }

  function handleKeyPress(event) {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowUp':
        direction = 'up';
        break;
      case 'ArrowDown':
        direction = 'down';
        break;
      case 'ArrowLeft':
        direction = 'left';
        break;
      case 'ArrowRight':
        direction = 'right';
        break;
    }
  }

  function checkCollision() {
    const head = snake[0];
    
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        alert('Game Over!');
        snake = [];
        direction = 'right';
        food = getRandomCell();
        clearPreviousFood();
        clearInterval(gameInterval);
        playButton.style.display = 'block';
        break;
      }
    }
  }
  
  function clearPreviousFood() {
    cells.forEach(cell => {
      if (cell.classList.contains('food')) {
        cell.classList.remove('food');
      }
    });
  }
  function startGame() {
    snake = [{ x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }];
    drawSnake();
    drawFood();

    gameInterval = setInterval(() => {
      move();
      checkCollision();
    }, 200);
  }

  playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    startGame();
  });

  createBoard();
  document.addEventListener('keydown', handleKeyPress);
});