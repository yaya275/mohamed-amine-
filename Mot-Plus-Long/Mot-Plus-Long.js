// Mission 1 : Trouver le mot le plus long dans une phrase
document.addEventListener("DOMContentLoaded", () => {
    const citation = document.getElementById("citation").innerText;
    const mots = citation.replace(/[^a-zA-Z\s]/g, "").split(" ");
    const motPlusLong = mots.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    document.getElementById("motPlusLong").innerText = motPlusLong;
});