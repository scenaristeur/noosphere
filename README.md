# noosphere

vue create noosphere
cd noosphere


dependencies
"@editorjs/editorjs": "^2.25.0",
"@editorjs/header": "^2.6.2",
"@editorjs/list": "^1.7.0",
"@editorjs/paragraph": "^2.8.0",
"bootstrap": "^4.5.3",
"bootstrap-vue": "^2.22.0",
"uuid": "^8.3.2",
"y-indexeddb": "^9.0.9",
"y-webrtc": "^10.2.3",
"y-websocket": "^1.4.3",
"yjs": "^13.5.41",


dev-dependencies

"editorjs-drag-drop": "^1.1.5",
"editorjs-undo": "^2.0.8",


service worker

vue.config.js

vue-bootstrap in main

Alert in App

index.html & 404.html scripts



https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

```
npm run build
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages
git remote add origin https://github.com/scenaristeur/noosphere.git
git branch -M main
git push -u origin main
git subtree push --prefix dist origin gh-pages
```
then open your website  https://scenaristeur.github.io/noosphere

next modifs, just run ```npm run git -- "my modif"```


# Tools
- pwa share api https://web.dev/web-share-target/
- qr generate https://www.npmjs.com/package/qrcode
- ajouter le scanner https://github.com/mebjas/html5-qrcode
- manyverse https://www.manyver.se/ reseau social bluetooth

# decentralized databases
- web3.storage / filecoin https://web3.storage/docs/reference/js-client-library/
- https://www.dolthub.com/blog/2022-05-27-decentralized-database/
- voir filebase.com 5GB

# heroku alternatives
- https://dev.to/meshvpatel18/top-heroku-alternatives-for-free-46g1


# a regarder
- https://github.com/madebysoren/NooSphere


# mermaid test

- https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams

```mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```



# route/router test
- http://127.0.0.1:8080/
- room parameter http://127.0.0.1:8080/?room=4
- share http://127.0.0.1:8080/share?title=titre&text=blopa&url=http://scenaristeur.github.io/agent
- room not exist http://127.0.0.1:8080/share?title=title_not_exist&text=blopa&url=http%3A%2F%2Fscenaristeur.github.io%2Fagent
- room exist http://127.0.0.1:8080/share?title=52&text=blopa&url=http%3A%2F%2Fscenaristeur.github.io%2Fagent



# share
- https://web.dev/web-share-target/ & https://web.dev/web-share/


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
