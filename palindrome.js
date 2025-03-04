// Mission 2 : Vérifier si un mot est un palindrome
function palindrome() {
    const input = document.getElementById("id-mot-saisi").value.toLowerCase();
    const reverse = input.split("").reverse().join("");
    document.getElementById("resultat").innerText = (input === reverse) ? "C'est un palindrome !" : "Ce n'est pas un palindrome.";
}