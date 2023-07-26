import { run } from './game.js';
import { handleScroll } from './navbar.js';




// écouteur d'événement pour déclencher la fonction handleScroll lors du défilement
window.addEventListener('scroll', handleScroll);

// Démarrer le jeu en appelant la fonction run()
run();