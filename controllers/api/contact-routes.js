const router = require('express').Router();


// POST /api/contact
router.post('/', (req, res) => {
    Contact.create({
      username: req.body.username,
      email: req.body.email,
      
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
