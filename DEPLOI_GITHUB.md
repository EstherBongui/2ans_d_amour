# Déployer le site sur GitHub Pages

Ton dépôt est déjà lié à GitHub : **https://github.com/EstherBongui/2ans_d_amour**

## 1. Envoyer ton code sur GitHub

Ouvre un terminal dans le dossier du projet (`r:\VS code\2ans_d_amour`) et exécute :

```bash
# Si tu vois une erreur "index.lock", ferme VS Code / Cursor puis réessaie
git add -A
git commit -m "Site anniversaire 2 ans"
git push origin main
```

Si tu n’es pas connectée à GitHub, utilise soit l’extension **GitHub** dans VS Code/Cursor (bouton « Sign in »), soit en ligne de commande :

```bash
git config user.email "ton@email.com"
git config user.name "Ton pseudo"
```

## 2. Activer GitHub Pages

1. Va sur **https://github.com/EstherBongui/2ans_d_amour**
2. Clique sur **Settings** (Paramètres)
3. Dans le menu de gauche, clique sur **Pages**
4. Dans **Source** (Build and deployment), choisis **Deploy from a branch**
5. Dans **Branch**, choisis **main** et le dossier **/ (root)**
6. Clique sur **Save**

Quelques minutes plus tard, ton site sera en ligne à l’adresse :

**https://estherbongui.github.io/2ans_d_amour/**

Tu pourras partager ce lien pour offrir le site.
