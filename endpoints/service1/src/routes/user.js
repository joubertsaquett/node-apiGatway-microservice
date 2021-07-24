const userController = require("../controllers/user");

module.exports = app => {

    app.get('/', userController.listDefault);
    app.get('/api1', userController.listUser);

};