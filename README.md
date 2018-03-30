# Checkpoint Num. 1 JS

# Ton code devra être pushé sur le repository du projet. Sur une branche portant ton nom et prénom (Elisa_WILD). Pense aux commits atomiques.

## Parties

* QCM de connaissances
* Algorithme en JS/ES6
* Exercice de Galerie sous Boostrap 4

## Consignes

* Tu répondras au QCM dans le fichier QCM.md
* Tu coderas ton objet dans le fichier checkpoint.js
* Tu coderas ton Boostrap dans le fichier index.html et index.css

## Partie 1: Q.C.M.

Fichier de réponse:

* QCM.md

**Questions :**

1.  Comment s'appelle la branche principale de GIT par défaut ? -> e

a/ default
b/ remote
c/ masseur
d/ main
e/ master
f/ dev

2.  Comment changer de branche sous GIT ? -> d

a/ git branche "X"
b/ git branch "X"
c/ git checkout -b "X"
d/ git checkout "X"
e/ git add "X"

3.  Comment puis-je récupérer un projet complet déjà présent sur un repository distant ? -> a

a/ git clone
b/ git fetch
c/ git merge
d/ git init
e/ git add

4.  Quelle est la commande pour initialiser un projet avec NPM avec le fichier package.json ? -> b

a/ node init
b/ npm init
c/ npm install "color" --save
d/ cd
e/ ls
f/ create

5.  Quels sont les 3 états de fichiers traqués ("tracked") ? -> c, a, d

a/ Added
b/ Updated
c/ Modified
d/ Commited
e/ Staged
f/ Unmodified

6.  Quels est le bon ordre d'éxécution afin de partager une version de code sur Github ? -> b

a/ git commit -> git branch -> git push
b/ git add -> git commit -> git push
c/ git commit -> git add -> git push
d/ git push -> git commit -> git add
e/ git checkout -> git push -> git add

7.  Grâce à quelles commandes peut-on éditer un fichier ? -> a, b, c et d

a/ cat
b/ edit
c/ nano
d/ vi
e/ pwd
f/ mkdir

8.  Sous Github, à quoi sert une P.R. ? -> b, e et f

a/ C'est une push request
b/ C'est une pull request
c/ cela permet de travailler sur sa branche
d/ cela permet de ne pas merger tout de suite sur la master
e/ cela permet de faire de la review de code
f/ c'est une étape de workflow
g/ c'est dans Github

9.  Sous ES6, comment accède-t-on à une propriété d'un objet ? -> a

a/ objet.propriete
b/ objet[1]
c/ objet.length
d/ objet['propriete']
e/ console.log(objet)

10. Sous Git, comment peut-on voir les fichiers modifiés en cours dans mon répertoire de travail en local ? -> c

a/ git commit
b/ git remote
c/ git status
d/ git add
e/ git log
f/ git commit -m "add changes"

## Partie 2: Algorithme en JS/ES6

Fichier à utiliser:

* checkpoint.js

Le code sera exécuté et débogué grâce à NodeJS en utilisant simplement la ligne de commande :

```
    node checkpoint.js
```

1.  Créer un objet bulletin comportant les 5 propriétés suivantes :

* nom de la partie: "Partie 1"
* notes: tableau vide
* points: initialiser à 0
* eliminer: initialiser à false
* moyenne: initialiser à false

2.  Ajouter 10 notes comprises entre 0 et 20, obtenues aléatoirement avec `Math.random()`, dans le tableau `notes`.
3.  Modifier la propriété `points` qui sera le nombre de points sachant qu’un point est égal à une note supérieure à 10.
4.  Modifier la propriété `eliminer` si une des notes est égale à 0.
5.  Modifier la propriété `moyenne` pour calculer la moyenne des notes.
6.  Créer une sixième propriété nommée `reset` qui sera une fonction permettant de réinitialiser toutes les propriétés.

## Partie 3: Galerie avec Boostrap 4

Fichiers à utiliser :

* index.html
* index.css

Créer une grille de photos de cuisine avec le framework Boostrap 4 et son système de Grid:

Urls de photos:
https://pixabay.com/fr/photos/?q=recette&hp=&image_type=all&order=popular&cat=&orientation=horizontal

Format des photos sur la Grille:

* Desktop: 4x6
* Tablette: 2x12
* Smartphone: 1x24

[Bonus (si vous avez le temps)]

Utiliser la librairie Jquery Fancybox 3 afin que l'on puisse zoomer sur les images
http://fancyapps.com/fancybox/3/

Voici les CDN:

CSS:
https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css

JS:
https://code.jquery.com/jquery-3.3.1.min.js
https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js

### Pour aller plus loin (optionnel)

Pour lancer les tests, il vous faut installer l'environnement Mocha en global:

```
 npm install -g mocha
```

Puis lancer l'installation des dépendances:

```
    npm install
```

Enfin, lancer les tests avec npm:

```
    npm test
```
