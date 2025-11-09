const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'PanamAI - Integrated Platform',
    currentPage: 'home'
  });
});

app.get('/tutorials', (req, res) => {
  res.render('tutorials', { 
    title: 'Learn - PanamAI',
    currentPage: 'tutorials'
  });
});

app.get('/tools', (req, res) => {
  res.render('tools', { 
    title: 'Tools - PanamAI',
    currentPage: 'tools'
  });
});

app.get('/blog', (req, res) => {
  res.render('blog', { 
    title: 'Blog - PanamAI',
    currentPage: 'blog'
  });
});

app.get('/consulting', (req, res) => {
  res.render('consulting', { 
    title: 'Advisory - PanamAI',
    currentPage: 'consulting'
  });
});

app.get('/aihub', (req, res) => {
  res.render('aihub', { 
    title: 'AI Hub - PanamAI',
    currentPage: 'aihub'
  });
});

// Tools section routes
app.get('/tools/dashboard', (req, res) => {
  res.render('tools/dashboard', { 
    title: 'Dashboard - Tools',
    currentPage: 'tools'
  });
});

app.get('/tools/markets', (req, res) => {
  res.render('tools/markets/index', { 
    title: 'Markets - Tools',
    currentPage: 'tools'
  });
});

app.get('/tools/screener', (req, res) => {
  res.render('tools/screener/index', { 
    title: 'Screener - Tools',
    currentPage: 'tools'
  });
});

app.get('/tools/zerodha', (req, res) => {
  res.render('tools/zerodha/index', { 
    title: 'Zerodha Integration - Tools',
    currentPage: 'tools'
  });
});

// Learn section routes
app.get('/learn/academy', (req, res) => {
  res.render('learn/academy/index', { 
    title: 'Academy - Learn',
    currentPage: 'tutorials'
  });
});

// Advisory section routes
app.get('/advisory/services', (req, res) => {
  res.render('advisory/advisor', { 
    title: 'Advisory Services',
    currentPage: 'consulting'
  });
});

app.get('/advisory/brokers', (req, res) => {
  res.render('advisory/brokers/index', { 
    title: 'Brokers - Advisory',
    currentPage: 'consulting'
  });
});

app.get('/advisory/legal', (req, res) => {
  res.render('advisory/legal/index', { 
    title: 'Legal - Advisory',
    currentPage: 'consulting'
  });
});

// AI Hub routes
app.get('/aihub/chat', (req, res) => {
  res.render('aihub/chat', { 
    title: 'AI Chat - AI Hub',
    currentPage: 'aihub'
  });
});

// General routes
app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Us',
    currentPage: 'contact'
  });
});

app.get('/feedback', (req, res) => {
  res.render('feedback', { 
    title: 'Feedback',
    currentPage: 'feedback'
  });
});

app.get('/accounts', (req, res) => {
  res.render('accounts', { 
    title: 'Account Settings',
    currentPage: 'accounts'
  });
});

app.get('/profile', (req, res) => {
  res.render('profile/index', { 
    title: 'Profile',
    currentPage: 'profile'
  });
});

// Error handlers
app.use((req, res) => {
  res.status(404).render('404', { 
    title: '404 - Page Not Found',
    currentPage: 'error'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Error',
    error: err,
    currentPage: 'error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 PanamAI Server running on http://localhost:${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
