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
    });
}

document.getElementById('apple-switch').addEventListener('change', () => {
  // Bascule entre les langues (par exemple, entre 'en' et 'fr')
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  updateContent();  // Met à jour le contenu lors du changement de langue
});

// Charge le contenu initial au chargement de la page
updateContent();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function myFunctionContact() {
    if(document.getElementById("contact-hide").style.display === "flex"){
        document.getElementById("contact-hide").style.display = "none";
    }
    else{
        document.getElementById("contact-hide").style.display = "flex";
    }
}