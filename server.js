// Dependencies

    const express = require("express")
    const Monsters = require("./models/pokemon.js")
    const methodOverride = require("method-override")
    const morgan = require("morgan")

// App Object    
    const app = express()

// Middleware

    app.use(express.static("public")) 
    app.use(express.urlencoded({extended: true}))
    app.use(methodOverride("_method"))
    app.use(morgan("dev"))

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
        app.delete("/pokemon/:id", (req, res) => {
            // get the id
            const id = req.params.id
            // delete the pocket monster
            Monsters.splice(id, 1)
            // redirect to main page
            res.redirect("/pokemon")
        })

    // Update - Put - Changes a current Pokemon's Information


    // Create - Post - Uses the Form Data from New to list the Pokemon that was created
        app.post("/pokemon", (req, res) => {
            const body = req.body
            Monsters.push(body)
            res.redirect("/pokemon")
        })

    // Edit - Get - Grabs information from a Pokemon to be Updated


    // Show - Get - pulls up the information on the selected pokemon

        app.get("/pokemon/:id", (req, res) => {
            const id = req.params.id
            const foundPokemon = Monsters[id]
            res.render("show.ejs", { pokemon:foundPokemon, id })
            })


// App listener
    app.listen(3000, () => {
        console.log("Its Gengar!")
    })