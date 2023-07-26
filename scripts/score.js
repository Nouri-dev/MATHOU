
/**
 * Affiche une alerte personnalisée à l'aide de la bibliothèque Swal (SweetAlert).
 * Cette fonction prend en paramètre le message à afficher dans l'alerte.
 * L'alerte affiche une icône de succès, un titre personnalisé, le message spécifié et un bouton.
 * Elle permet également de personnaliser le style de l'alerte en utilisant des classes CSS personnalisées.
 * 
 * @param {string} message - Le message à afficher dans l'alerte.
 */
function showAlert(message) {
    // Utiliser Swal.fire() pour afficher l'alerte personnalisée
    Swal.fire({
        icon: 'success', // Icône de succès
        title: 'FINITO !', // Titre personnalisé
        text: message, // Message à afficher
        confirmButtonText: 'OK', // Bouton
        customClass: { // Classes CSS personnalisées pour le style de l'alerte
            title: 'my-title-class', // Classe pour le titre
            popup: 'my-alert-background', // Classe pour le fond de l'alerte
        }
    });
}


/**
 * Affiche le score du joueur dans l'interface utilisateur.
 * Cette fonction prend en paramètres le score obtenu par le joueur et le nombre total de questions.
 * Elle met à jour l'affichage du score en le combinant avec le nombre total de questions (ex: "3 / 5").
 * 
 * @param {number} score - Le score du joueur.
 * @param {number} base - Le nombre total de questions à résoudre.
 */
function afficherLeScore(score, base) {
    // Sélectionner l'élément HTML où afficher le score
    const affichageScore = document.querySelector(".scoreOperation strong span");
    // Créer la chaîne de caractères du nouveau score à afficher (ex: "3 / 5")
    const nouveauScore = `${score} / ${base}`;
    // Mettre à jour le contenu du score
    affichageScore.innerText = nouveauScore;
}



/**
 * Affiche le résultat final du jeu en fonction du score obtenu par le joueur et du nombre total de questions.
 * Affiche une alerte de félicitations.
 * Ou affiche une alerte de réussite.
 * Sinon, affiche une alerte pour encourager à réessayer.
 * 
 * @param {number} score - Le score obtenu par le joueur.
 * @param {number} totalQuestions - Le nombre total de questions dans le jeu.
 */
function afficherResultat(score, totalQuestions) {
    // Vérifier le score obtenu et afficher une alerte en conséquence
    if (score === 10) {
        showAlert(`Félicitations! Vous avez réussi le jeu avec un score parfait de ${score} sur ${totalQuestions}.`);
    } else if (score >= 5) {
        showAlert(`Bravo! Vous avez réussi le jeu avec un score de ${score} sur ${totalQuestions}.`);
    } else {
        showAlert(`Dommage! Vous avez obtenu un score de ${score} sur ${totalQuestions}. Essayez encore !`);
    }
}

export { afficherLeScore, afficherResultat };