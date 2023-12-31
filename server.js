// Dependencies

    const express = require("express")
    const Monsters = require("./models/pokemon.js")
    const app = express()

// Middleware

    app.use(express.static("public")) 
    app.use(express.urlencoded({extended: true}))

// INDUCES
    // Index - Get - All Pokemon
        app.get("/pokemon", (req, res) => {
            res.render("index.ejs", {Monsters});
            });

    // New - Get - Form to Create a New Pokemon
        app.get("/pokemon/new", (req, res) => {
            res.render("new.ejs")
        })

    // Destroy - Delete - Delete a Pokemon


    // Update - Put - Changes a current Pokemon's Information


    // Create - Post - Uses the Form Data from New to list the Pokemon that was created


    // Edit - Get - Grabs information from a Pokemon to be Updated


    // Show - Get - pulls up the information on the selected pokemon

        app.get("/pokemon/:id", (req, res) => {
            const id = req.params.id
            const pokemon = Monsters[id]
            res.render("show.ejs", { pokemon, id })
            })


// App listener
    app.listen(3000, () => {
        console.log("Its Gengar!")
    })