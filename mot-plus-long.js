// Liste des lettres disponibles
const availableLetters = ['A', 'T', 'P', 'E', 'R', 'C', 'O', 'N', 'I', 'L'];

// Fonction qui vérifie si le mot est valide
function isValidWord(word) {
    let tempLetters = [...availableLetters];
    for (let letter of word.toUpperCase()) {
        const letterIndex = tempLetters.indexOf(letter);
        if (letterIndex === -1) {
            return false; // Si la lettre n'est pas dans les lettres disponibles
        }
        tempLetters.splice(letterIndex, 1); // Supprime la lettre utilisée
    }
    return true;
}

// Fonction qui vérifie si le mot est le plus long
function checkWord(event) {
    event.preventDefault();

    const userWord = document.getElementById('user-word').value;

    // Vérifier si l'utilisateur a entré un mot
    if (!userWord) {
        document.getElementById('message').textContent = "Veuillez entrer un mot.";
        return;
    }

    // Vérifier si le mot est valide
    if (!isValidWord(userWord)) {
        document.getElementById('result').textContent = `Le mot '${userWord}' n'est pas valide avec ces lettres.`;
        document.getElementById('message').textContent = '';
        return;
    }

    // Calculer la longueur du mot
    const wordLength = userWord.length;

    // Trouver le mot le plus long possible (pour le défi)
    const longestWord = "PIRANOS"; // Exemple de mot long trouvé parmi les lettres (modifier selon les règles du jeu)
    
    if (wordLength === longestWord.length) {
        document.getElementById('result').textContent = `Bravo! Vous avez trouvé le mot le plus long: ${longestWord}`;
        document.getElementById('message').textContent = '';
    } else {
        document.getElementById('result').textContent = `Votre mot '${userWord}' est valide, mais il n'est pas le plus long.`;
        document.getElementById('message').textContent = `Essayez de former un mot de ${longestWord.length} lettres!`;
    }
}

// Ajouter un écouteur d'événements au formulaire
document.getElementById('word-form').addEventListener('submit', checkWord);
