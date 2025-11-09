const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Main routes
app.get('/', (req, res) => res.render('index'));
app.get('/tutorials', (req, res) => res.render('tutorials'));
app.get('/tools', (req, res) => res.render('tools'));
app.get('/blog', (req, res) => res.render('blog'));
app.get('/consulting', (req, res) => res.render('consulting'));
app.get('/aihub', (req, res) => res.render('aihub'));

// Tool routes
app.get('/tools/dashboard', (req, res) => res.render('tools/dashboard'));
app.get('/tools/markets', (req, res) => res.render('tools/markets'));
app.get('/tools/screener', (req, res) => res.render('tools/screener'));

// Learn routes
app.get('/learn/academy', (req, res) => res.render('learn/academy'));

// Advisory routes
app.get('/advisory/services', (req, res) => res.render('advisory/services'));

// AI Hub routes
app.get('/aihub/chat', (req, res) => res.render('aihub/chat'));

// General pages
app.get('/contact', (req, res) => res.render('contact'));
app.get('/feedback', (req, res) => res.render('feedback'));
app.get('/accounts', (req, res) => res.render('accounts'));

app.listen(PORT, () => console.log(\`Server running on http://localhost:\${PORT}\`));
