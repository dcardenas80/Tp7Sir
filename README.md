# TP SIR 7

Ce repositoire contient les sources du TP7 Sir, dans ce projet on a fait l'appel aux services web exposés dans le TP4, après une interface graphique ci-défini.

Pour faire marcher ce projet c'est important de faire marcher le TP4 avant [clic ici pour aller sur le TP4](https://github.com/dcardenas80/TP4SIR),une fois que cela soit fait il faut faire marcher le TP7 pour ça on doit télécharger le projet dans un dossier, dans la ligne de commandes écrire 'grunt serve' pour lancer le serveur et grunt test pour courir les unités de test.

## Design 

Ce projet est construit avec yeoman, particulièrement avec la configuration de projet angular, l'interface graphique charge de l'insertion et montrer la liste de personnes dans la BD du TP4 sont dans le fichier main.html localise dans le dossier views, le fichier JavaScript main.js, qui contient les contrôleurs et services pour faire la logique de l'application et l'appel aux services web se trouve sur le dossier script/contrôleurs.
