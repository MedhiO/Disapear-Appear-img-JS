// Sélectionne les image par leurs ID
const balrog = document.getElementById("balrog");
const gandalf = document.getElementById("gandalf");

// Initialise une variable d'état
let etat = "visible"; // visible par defaut

// Ajoutez un gestionnaire d'événements pour le clic sur gandalf
gandalf.addEventListener("click", function() {
    if (etat === "visible") {
      document.getElementById("balrog").style.display="none"; // Fait disparaitre le balrog
      etat = "invisible"; // Change l'état
    } else {
      document.getElementById("balrog").style.display="block"; // Fait apparaitre le balrog
      etat = "visible"; // Reviens à l'état initial
    }
  });