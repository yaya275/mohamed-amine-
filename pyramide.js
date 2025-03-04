// Utilisation de slice(début, fin) pour extraire des parties de la chaîne


function construirePyramide() {


    let lignes = parseInt(document.getElementById("ligne-pyramide").value); // Récupérer le nombre de lignes


    let pyramide = "";


    for (let i = 1; i <= lignes; i++) {


        let ligne = " ".repeat(lignes - i) + "*".repeat(i * 2 - 1); // Construire chaque ligne


        pyramide += ligne.slice(0, ligne.length) + "\n"; // Utiliser slice pour extraire la ligne complète


    }
    document.getElementById("pyramide").textContent = pyramide; // Afficher la pyramide

}