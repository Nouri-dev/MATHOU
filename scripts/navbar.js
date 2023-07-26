/**
 * Gère l'événement de défilement (scroll) de la page.
 * Ajoute ou supprime la classe 'transparent' de l'élément de navigation en fonction du défilement.
 * La classe 'transparent' est ajoutée lorsque le défilement est supérieur à 0, et supprimée sinon.
 */
function handleScroll() {
    // Sélectionner l'élément de navigation ayant la classe 'transparent-nav'
    const nav = document.querySelector('.transparent-nav');

    // Vérifier si la position verticale de défilement (scrollY) est supérieure à 0
    if (window.scrollY > 0) {
        // Si oui, ajouter la classe 'transparent' à l'élément de navigation
        nav.classList.add('transparent');
    } else {
         // Sinon, supprimer la classe 'transparent' de l'élément de navigation
        nav.classList.remove('transparent');
    }
}

export { handleScroll };