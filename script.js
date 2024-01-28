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

/*------Game------*/

const cards = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png', 'images/image8.png'];
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