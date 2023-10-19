// Sélectionnez les image par leurs ID
const balrog = document.getElementById("balrog");
const gandalf = document.getElementById("gandalf");

// Initialisez une variable d'état
let etat = "visible"; // visible par defaut

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
gandalf.addEventListener("click", function() {
    if (etat === "visible") {
      document.getElementById("balrog").style.display="none"; // Fait disparaitre le balrog
      etat = "invisible"; // Changez l'état
    } else {
      document.getElementById("balrog").style.display="block"; // Changez le texte de retour
      etat = "visible"; // Revenez à l'état initial
    }
  });