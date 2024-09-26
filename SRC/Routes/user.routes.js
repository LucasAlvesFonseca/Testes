const route = require("expres").Router()

const userController = require("../Controller/user.controller")


route.get("/",userController.soma())


module.exports = {
    route
}