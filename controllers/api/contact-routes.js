// POST /api/users
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