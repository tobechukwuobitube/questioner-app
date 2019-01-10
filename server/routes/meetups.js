const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /meetups'
  })
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST request to /meetups'
  });
});

router.get('/:meetupId', (req, res, next) => {
  const id = req.params.meetupId;
  if (id === 'special') {
    res.status(200).json({
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You returned a special passed an ID'
    })
  }
});

router.patch('/:meetupId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated meetup!'
  });
});

router.patch('/:meetupId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted meetup!'
  });
});

module.exports = router;