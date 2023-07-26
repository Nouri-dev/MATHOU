import {  afficherLeScore, afficherResultat } from './score.js';


/**
 * Variables pour stocker deux chiffres aléatoires.
 * Ces variables seront utilisées pour les opérations de calcul.
 */
let chiffreX = Math.floor(Math.random() * 10);
let chiffreY = Math.floor(Math.random() * 10); 




/**
 * Effectue l'opération d'addition entre les nombres chiffreX et chiffreY.
 * Retourne un objet contenant la chaîne de calcul (ex: "2 + 2") et le résultat (ex: 4) de l'addition.
 * 
 * @returns {Object} Un objet contenant les propriétés 'calcul' et 'resultat'.
 */
function additionMethode() {
    // Calcul de l'opération d'addition sous forme de chaîne de caractères
    let calculAddition = `${chiffreX} + ${chiffreY}`;
    // Calcul du résultat de l'addition
    let additionResultat = chiffreX + chiffreY;
    // Retourne un objet contenant la chaîne de calcul et le résultat de l'addition
    return { calcul: calculAddition, resultat: additionResultat };
}

/**
 * Effectue l'opération de multiplication entre les nombres chiffreX et chiffreY.
 * Retourne un objet contenant la chaîne de calcul (ex: "5 * 3") et le résultat (ex: 15) de la multiplication.
 * 
 * @returns {Object} Un objet contenant les propriétés 'calcul' et 'resultat'.
 */
function multiplicationMethode() {
    // Calcul de l'opération de multiplication sous forme de chaîne de caractères
    let calculMultiplication = `${chiffreX} x ${chiffreY}`;
    // Calcul du résultat de la multiplication
    let multiplicationResultat = chiffreX * chiffreY;
    // Retourner un objet contenant la chaîne de calcul et le résultat de la multiplication
    return { calcul: calculMultiplication, resultat: multiplicationResultat };
}

/**
 * Effectue l'opération de soustraction entre les nombres chiffreX et chiffreY.
 * Retourne un objet contenant la chaîne de calcul (ex: "5 - 3") et le résultat (ex: 2) de la soustraction.
 * 
 * @returns {Object} Un objet contenant les propriétés 'calcul' et 'resultat'.
 */
function soustractionMethode() {
    // Calcul de l'opération de soustraction sous forme de chaîne de caractères
    let calculSoustraction = `${chiffreX} - ${chiffreY}`;
    // Calcul du résultat de la soustraction
    let soustractionResultat = chiffreX - chiffreY;
    // Retourner un objet contenant la chaîne de calcul et le résultat de la soustraction
    return { calcul: calculSoustraction, resultat: soustractionResultat };
}






/**
 * Affiche l'opération de calcul correspondant à l'option sélectionnée (addition, soustraction ou multiplication).
 * 
 * @param {number} index - L'index de l'opération à afficher (0 pour addition, 1 pour soustraction, 2 pour multiplication).
 */
function afficherOperation(index) {
    // Tableau contenant les chaînes de calcul pour chaque opération (addition, soustraction, multiplication)
    const tousInfosCalcul = [additionMethode().calcul, soustractionMethode().calcul, multiplicationMethode().calcul];
    // Sélectionner l'élément HTML où afficher l'opération
    let affichageOperation = document.querySelector(".affichageOperation");
    // Mettre à jour le contenu de l'élément avec la chaîne de calcul correspondant à l'option sélectionnée
    affichageOperation.innerText = tousInfosCalcul[index];
}

/**
 * Récupère le résultat de l'opération correspondant à l'index spécifié (0 pour addition, 1 pour soustraction, 2 pour multiplication).
 * 
 * @param {number} index - L'index de l'opération dont on veut récupérer le résultat (0 pour addition, 1 pour soustraction, 2 pour multiplication).
 * @returns {number} Le résultat de l'opération correspondante.
 */
function resultatTotal(index) {
    // Tableau contenant les résultats de chaque opération (addition, soustraction, multiplication)
    const tousInfosResultat = [additionMethode().resultat, soustractionMethode().resultat, multiplicationMethode().resultat];
    // Récupérer le résultat de l'opération correspondant à l'index spécifié
    return tousInfosResultat[index];
}








/**
 * Gère le choix de l'opération par l'utilisateur.
 * Cette fonction affiche l'opération de calcul correspondant à l'option sélectionnée (addition, soustraction ou multiplication).
 * Elle est également chargée de mettre à jour l'affichage de l'opération lorsque l'utilisateur change son choix.
 */
function choixBtnOperation() {
    // Sélectionner tous les boutons radio de l'option d'opération (addition, soustraction, multiplication)
    let listBtnOperation = document.querySelectorAll(".optionOperation input[type=radio]");
    // Afficher l'opération initiale selon l'option sélectionnée par défaut
    for (let btn = 0; btn < listBtnOperation.length; btn++) {
        if (listBtnOperation[btn].checked) {
            afficherOperation(btn);
        }
    }
    // Écouter les changements de sélection d'opération et mettre à jour l'affichage en conséquence
    for (let btn = 0; btn < listBtnOperation.length; btn++) {
        listBtnOperation[btn].addEventListener("change", (event) => {
            // Mettre à jour l'affichage de l'opération en fonction de l'option sélectionnée
            if (event.target.value === "1") {
                afficherOperation(0);
            }
            if (event.target.value === "2") {
                afficherOperation(1);
            }
            if (event.target.value === "3") {
                afficherOperation(2);
            }
        });
    }
} 





/**
 * Fonction principale pour exécuter le jeu.
 * Initialise l'affichage de l'opération en fonction de l'option sélectionnée par défaut.
 * Initialise les variables pour le score et le nombre total de questions.
 * Sélectionne le bouton de validation et le champ de saisie.
 * Écoute les clics sur le bouton de validation et les touches "Entrée" du clavier pour valider la réponse.
 */
function run() {
   // Initialiser l'affichage de l'opération en fonction de l'option sélectionnée par défaut
    choixBtnOperation();
    // Initialiser les variables pour le score et le nombre total de questions
    let score = 0;
    let totalQuestions = 0;
   
    // Sélectionner le bouton de validation et le champ de saisie
    const btnResultatOperation = document.getElementById("btnResultatOperation");
    const resulatOperation = document.getElementById("resultatOperation");

    // Fonction pour gérer la validation de la réponse
    function validerReponse() {
        // Sortir de la fonction sans rien faire si le jeu est terminé
        if (totalQuestions === 10) {
        return; 
        } 
        // Obtenir le résultat de l'opération actuellement affichée
        const index = document.querySelector(".optionOperation input[type=radio]:checked").value - 1; 
        const calculAffiche = resultatTotal(index);
        // Convertir le contenu textuel en nombre avant de comparer
        const contenuTextuel = parseInt(resulatOperation.value, 10);

        // Comparer le calcul affiché avec le résultat
        if (contenuTextuel === calculAffiche) {
            score++;
        }
        totalQuestions++;

        // Vérifier si le jeu est terminé
        if (totalQuestions === 10) {
            afficherResultat(score, totalQuestions);
        }

        // Afficher le score mis à jour
        afficherLeScore(score, totalQuestions);
        resulatOperation.value = "";
        // Générer une nouvelle opération avec de nouveaux chiffres
        chiffreX = Math.floor(Math.random() * 10);
        chiffreY = Math.floor(Math.random() * 10);
        afficherOperation(index);
    }

    // Écouter le clic sur le bouton de validation
    btnResultatOperation.addEventListener("click", validerReponse);

    // Écouter la touche "Entrée" du clavier pour valider la réponse
    resulatOperation.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            validerReponse();
        }
    });
}

export { run };   








