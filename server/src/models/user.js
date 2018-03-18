module.exports = (sequelize, DataTypes) => 
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      uniq: true
    },
    password: {
      type: DataTypes.STRING,
    }
  });
