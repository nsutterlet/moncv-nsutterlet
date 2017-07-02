# Créer d'un site web pour un CV
 Les étapes ci-dessous doivent être suivies à la suite pour une installation optimale.

Les outils suivants ont été utilisés pour ce projet :

* Le logiciel Visual Studio Code pour le code html, css, js, etc
    
* La plateforme GitHub (sauvegarde des des versions, mise en ligne)
  https://github.com/heg-web/moncv-nsutterlet/
    
* Node.js (moteur JavaScript) : https://nodejs.org/

* Navigateur web google chrome pour l'outils de développment ainsi que les différentes recherches


### Préparation pour le début du projet

En premier lieu, pour pouvoir écrire du code (html, css, js, ...) il faut télécharger et installer Visual Studio Code : https://code.visualstudio.com/Download 

Puis, insaller Git : https://github.com/ 

Cette installation va installer le GitShell et le GitHub. Se positionner avec le GitShell dans le projet et faire la commande

```sh 
git init.
``` 

Cette commande va créer un répertoire .git dans le dossier et nous permettra d'utiliser. 

Ensuite, il faut télécharger et installer node.js utile pour utiliser du Javascript en dehors du navigateur. 
Lien : https://nodejs.org/

Après l'installation la commande `npm` est disponible et permet de télécharger les packages présents sur node.js.

Le premier installé est **vue-cli**, ce package permet notamment pour la création des templates simple et rapide et offre la possibilité de créer ses propre directives, de créer des composants et des mixins. Insérez la commande avec GitShell ou directement dans le terminal de Visual Studio Code :


```sh
 npm install -g vue-cli
```
Lors de de projet, le module Webpack (modudule JavaScript open-source) est utilisé. Il va générer les dépendances permettant une approche modulaire. Executé la commande pour utiliser WebPack (documentation http://vuejs-templates.github.io/webpack/ ) :

```sh
 vue init webpack moncv
```
Supprimer de votre dossier les dossiers :
- src/components 
- src/App.vue

Ajouter le package jquery Bootstrap et Bootswatch et désintaller la dépendance vue :

```sh
npm uninstall vue --save

npm install jquery bootstrap@3 --save
npm install bootswatch --save

```

Pour établir des grahiques dynamiques, le package Chart a été installé : 
```sh
npm install chart.js --save

```
Lien documentation :  http://www.chartjs.org/

Un autre package jquery a été installé : Lightbox. Il permet d'agrandir une image.

Lien documentation : http://lokeshdhakar.com/projects/lightbox2/


```sh
npm install lightbox2 --save

```

Créer un fichier *main.css*. Ajouter dans le fichier *main.js* les lignes suivants : 
```sh
import $ from 'jquery';
import 'bootstrap';
import 'bootswatch/superhero/bootstrap.min.css';
import './main.css';
import Chart from 'chart.js';
import 'lightbox2';

```

La préparation du projet est fini, du code peut à présent écrit grâce à Visual Studio Code.

### HTML et CSS

Pour le code HTML, boostrap a été utilisé en grande partie notamment pour l'alignement des éléments sur la page, des icones, 

Les images ont été trouvées sur internet (via Google Chrome) et ont été retouchées directement via le CSS.

Un template a été utilisées et modifiées selon besoin(https://github.com/ahmedfaruk/iamx-html/blob/master/index.html) pour les parties *Expérience* et  *Formaton*


### Javascript 

Ce projet contient un petit peu de javascript, avec les packages : 
- Lightbox
- Chart

Pour Chart, le lien ci-après a été utilisé comme base d'informations :
http://www.chartjs.org/docs/latest/charts/doughnut.html

Pour Lightbox, un tutoriel a été suivi tout en supprimer quelques lignes jugées non nécessaires. Lien : https://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528
En plus de ce lien, la documentation : http://lokeshdhakar.com/projects/lightbox2/#options



### Mettre et déployer le projet sur Git

Git est très utile dans la gestion des versions d'un projet, favorise l'opensource et est pratique pour le travail en groupe. 

Pour mettre le projet sur Git, mettre les fichiers en statut prêts à être commités et validés  :

```sh 
git add . --all
``` 
Puis valider ces fichiers avec un message indiquant les modifications effectuées

```sh
git commit -m "message"
``` 

Ensuite le construire : 

```sh
npm run build
```

Et finalement le deployer : 


```sh
npm run dev
```

Pour mettre  la branche master dans origin, tapez : 

```sh
git push 
```
### Informations du documents
Auteur : Nicolas Sutterlet
Date : 2017-07-02
Version : 2.0.0