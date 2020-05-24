const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home', {
    pageInfo: {
      'title': 'Ayaan\'s Personal Website',
      'path': '/'
    },
  });
});

module.exports = router;