# WanderPro

Static prototype for WanderPro LLC. Two files: `index.html` and `app.js`. Clone the repo, open a terminal in the project folder, and run `python3 -m http.server 8765`, then visit `http://localhost:8765` in your browser. (You can use any port — `python3 -m http.server` alone defaults to 8000. A static server is needed because the site uses hash-based routing and module-style asset loading; opening `index.html` directly via `file://` will work for most pages but is not recommended.)
