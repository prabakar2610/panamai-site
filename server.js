const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main routes
app.get('/', (req, res) => res.render('index', { title: 'PanamAI - Integrated Platform' }));
app.get('/tutorials', (req, res) => res.render('tutorials', { title: 'Learn' }));
app.get('/tools', (req, res) => res.render('tools', { title: 'Tools' }));
app.get('/blog', (req, res) => res.render('blog', { title: 'Blog' }));
app.get('/consulting', (req, res) => res.render('consulting', { title: 'Advisory' }));
app.get('/aihub', (req, res) => res.render('aihub', { title: 'AI Hub' }));

// Tools section routes
app.get('/tools/dashboard', (req, res) => res.render('tools/dashboard', { title: 'Dashboard' }));
app.get('/tools/markets', (req, res) => res.render('tools/markets/index', { title: 'Markets' }));
app.get('/tools/screener', (req, res) => res.render('tools/screener/index', { title: 'Screener' }));
app.get('/tools/zerodha', (req, res) => res.render('tools/zerodha/index', { title: 'Zerodha Integration' }));

// Learn section routes
app.get('/learn/academy', (req, res) => res.render('learn/academy/index', { title: 'Academy' }));

// Advisory section routes
app.get('/advisory/services', (req, res) => res.render('advisory/advisor', { title: 'Advisory Services' }));
app.get('/advisory/brokers', (req, res) => res.render('advisory/brokers/index', { title: 'Brokers' }));
app.get('/advisory/legal', (req, res) => res.render('advisory/legal/index', { title: 'Legal' }));

// AI Hub routes
app.get('/aihub/chat', (req, res) => res.render('aihub/chat', { title: 'AI Chat' }));

// General routes
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact' }));
app.get('/feedback', (req, res) => res.render('feedback', { title: 'Feedback' }));
app.get('/accounts', (req, res) => res.render('accounts', { title: 'Accounts' }));
app.get('/profile', (req, res) => res.render('profile/index', { title: 'Profile' }));

// Error handlers
app.use((req, res) => res.status(404).render('404', { title: '404 Not Found' }));
app.use((err, req, res, next) => res.status(500).render('error', { title: 'Error', error: err }));

app.listen(PORT, () => console.log(`🚀 Server: http://localhost:${PORT}`));
