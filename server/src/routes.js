module.exports = app => {
  // get, post, put, patch, delete
  app.post('/register', (req, res) => {
    res.send({ message: `Wellcome ${req.body.email} your was registered!` })
  })
}
