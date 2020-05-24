const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');

app.set('view engine', 'pug');
app.set('views', 'views');

// Import routes
const home = require('./routes/home');
const projects = require('./routes/projects');
const about = require('./routes/about');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use(home);
app.use(projects);
app.use(about);
// 404 error page
app.use((req, res, next) => {
  res.render('404', {
    pageInfo: {
      title: '404 page not found'
    }
  });
});

app.listen(3000);
console.log("Listening to port 3000: http://localhost:3000/");