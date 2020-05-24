const express = require('express');
const router = express.Router();

module.exports = router.get('/projects', (req, res, next) => {
  res.render('projects', {
    pageInfo: {
      'title': 'My Projects',
      'path': '/projects'
    },
  });
});