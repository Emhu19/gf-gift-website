// Attendre que le contenu soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // Ajouter un délai pour afficher le texte d'introduction
  setTimeout(function () {
    document.getElementById("introText").style.opacity = "1";
  }, 2000); // Apparition du texte après 2 secondes
});
