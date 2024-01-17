document.addEventListener("DOMContentLoaded", function () {
  // Appel des fonctions initiales
  setupPage();

  // Gestion des liens de navigation
  const linkColor = document.querySelectorAll(".nav_link");
  linkColor.forEach((link) =>
    link.addEventListener("click", handleNavLinkClick)
  );
});

function setupPage() {
  // Appel de la fonction pour définir la hauteur du padding
  setPaddingHeight();

  // Appel de la fonction pour configurer le navbar
  setupNavbar("header-toggle", "nav-bar", "body-pd", "header");
}

// Fonction pour définir la hauteur du padding
function setPaddingHeight() {
  const menuHeight = document
    .getElementById("menu")
    .getBoundingClientRect().height;
  const sousmenuHeight = document
    .getElementById("sousmenu")
    .getBoundingClientRect().height;

  // Définir la hauteur du padding dans le conteneur de la page
  document.getElementById("container-page").style.paddingBottom = `${
    menuHeight + sousmenuHeight
  }px`;
}

// Fonction pour configurer le navbar
function setupNavbar(toggleId, navId, bodyId, headerId) {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);
  const pathjustifyandx = document.getElementById("pathjustifyandx");

  // Vérifier que toutes les variables existent
  if (toggle && nav && bodypd && headerpd) {
    toggle.addEventListener("click", () => {
      // Afficher/masquer le navbar
      nav.classList.toggle("show");
      // Changer l'icône
      changeIcon(
        pathjustifyandx,
        "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
      );
      // Ajouter du padding au body
      bodypd.classList.toggle("body-pd");
      // Ajouter du padding à l'en-tête
      headerpd.classList.toggle("body-pd");
    });
  }
}

// Fonction pour changer l'icône
function changeIcon(pathjustifyandx, icon1) {
  const currentIcon = pathjustifyandx.getAttribute("d");

  if (currentIcon === icon1) {
    pathjustifyandx.setAttribute(
      "d",
      "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
    );
  } else {
    pathjustifyandx.setAttribute("d", icon1);
  }
}

// Gestionnaire d'événement pour le clic sur le lien de session
function handleNavLinkClick() {
  const sousmenu = document.getElementById("sousmenu-lg");

  // Toggle d'affichage du sous-menu
  sousmenu.style.display = sousmenu.style.display === "none" ? "block" : "none";
}

// Gestionnaire d'événement pour le clic sur le bouton de session
document.getElementById("btn-session").addEventListener("click", (event) => {
  const sousmenu = document.getElementById("sousmenu");
  const btnSession = document.getElementById("btn-session");

  // Toggle d'affichage du sous-menu
  sousmenu.style.display = sousmenu.style.display === "none" ? "flex" : "none";

  // Toggle de la couleur de fond de l'élément passé
  btnSession.style.backgroundColor =
    sousmenu.style.display === "none" ? "#0d6efd" : "white";

  // Changer l'icône
  changeIcon(
    document.getElementById("sessionpath"),
    "M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1"
  );

  // Calculer la hauteur totale et définir le padding pour le conteneur de la page
  setPaddingHeight();
});
