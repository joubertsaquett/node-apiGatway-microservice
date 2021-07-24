const userController = require("../controllers/user");

module.exports = app => {

    app.get('/api2', userController.listUser);

};