var burger = require("../models/burger.js");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require('path');


module.exports = function (app) {

    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
    // Sets up the Express app to handle data parsing
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Retrieve all todos
    app.get("/", function (req, res) {

        burger.selectAll()
            .then((data) => {

                res.render("index", { burgers: data })
            })
            .catch((err) => {
                let errMsg = {
                    message: err.message,
                    error: err
                }
                res.render('index', errMsg)
            })

    });

    app.post("/burgers", function (req, res) {
       
        burger.addBurger(req.body.burger_name)
            .then((result) => {
                res.json(result);

            })
            .catch((err) => {
                let errMsg = {
                    message: err.message,
                    error: err
                }
                res.render('index', errMsg);
            })

    });

    app.put("/burgers/:id", function (req, res) {

        burger.devourBurger(req.params.id)
        .then((result)=>{
            res.json(result);

        })
        .catch((err)=>{
            let errMsg = {
                message: err.message,
                error: err
            }
            res.render('index', errMsg);

        })

    });


}

