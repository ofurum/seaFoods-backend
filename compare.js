const signUp = async (req, res) => {
  let password = bcrypt.hashSync(req.body.password, 10);
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).send({ message: "user already exists" });
      }
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
        phone: req.body.phone,
        address: req.body.address,
        role: req.body.role,
      }).then((newuser) => {
        return res.status(201).send({ message: "user created successfully" });
      });
    })
    .catch((error) => {
      return res.status(400).send({ message: "Could not save" });
    });
};
