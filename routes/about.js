const express = require('express');
const router = express.Router();

router.get('/about', (req, res, next) => {
  res.render('about', {
    pageInfo: {
      'title': 'About Ayaan Siddiqui',
      'path': '/about'
    },
  });
});

module.exports = router;