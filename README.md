# Pour toi — Site anniversaire 2 ans

Un site tout-en-un : lettre d’amour interactive, timeline, raisons de t’aimer, galerie photo et playlist.

## Lancer le site

Ouvre `index.html` dans ton navigateur (double-clic ou clic droit → Ouvrir avec → navigateur).

Pour un serveur local (optionnel) :
- VS Code : extension "Live Server", puis "Go Live".
- En ligne de commande : `npx serve .` puis ouvre l’URL indiquée.

## Personnaliser

### Date de couple et compteur de jours
Dans `script.js`, ligne ~6, modifie la date :
```javascript
const COUPLE_START = new Date('2023-02-19'); // Ta vraie date
```

### La lettre
Dans `index.html`, section `#lettre` : remplace le contenu des balises `<p>...</p>` par ton texte.

### Timeline
Dans `index.html`, section `#histoire` : pour chaque `.timeline-item`, change :
- `.timeline-date` : la date ou le libellé
- `h3` : le titre
- `p` : la description
- `.timeline-img` : `style="background-image: url('TON_URL_IMAGE')"` (et ajoute `data-src="TON_URL_IMAGE"` si tu utilises la lightbox en grand)

Tu peux copier/coller d’autres blocs `.timeline-item` pour ajouter des étapes.

### Raisons de t’aimer
Dans `index.html`, section `#raisons` : modifie le texte dans chaque `.raison-card` et ajoute ou enlève des cartes en copiant :
```html
<div class="raison-card"><span class="raison-num">N</span><p>Ta raison</p></div>
```

### Galerie
Dans `index.html`, section `#galerie` : pour chaque `.galerie-item` :
- Remplace les `url(...)` dans `style="background-image: url('...')"` par tes photos.
- Ajoute ou modifie `data-src="URL_IMAGE_GRANDE"` pour la lightbox (optionnel).
- Change le texte dans `.galerie-caption`.

Pour utiliser tes propres images : mets tes fichiers dans un dossier `images/` et mets par ex. `images/photo1.jpg` dans les `url()` et `data-src`.

### Playlist
Dans `index.html`, section `#playlist` : pour chaque `.playlist-item` :
- Remplace **Titre de la chanson** et **Artiste**.
- Modifie le paragraphe `.playlist-because` ("Parce que…").
- Dans le lien `.playlist-link`, mets `href="Lien Spotify ou YouTube"` pour ouvrir la chanson au clic sur ▶.

## Fichiers

- `index.html` — structure et textes
- `style.css` — mise en forme et mise en page
- `script.js` — enveloppe, lightbox, compteur, menu, scroll

Tout est en HTML/CSS/JS pur : tu peux héberger sur GitHub Pages, Netlify ou ouvrir le fichier localement.
