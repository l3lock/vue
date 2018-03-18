module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtraker',
    user: process.env.DB_USER || 'tabtraker',
    password: process.env.DB_PASSWORD || 'tabtraker',
    option: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtraker.sqlite'
    }
  }
}