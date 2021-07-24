const userController = require("../controllers/user");

module.exports = app => {

    app.get('/', userController.listDefault);
    app.get('/list', userController.listUser);

};