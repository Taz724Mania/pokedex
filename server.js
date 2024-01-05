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
            //You caught em all, so index 'em all
            res.render("index.ejs", {Monsters});
            });

    // New - Get - Form to Create a New Pokemon
        app.get("/pokemon/new", (req, res) => {
            //what if there are like 700 more pokemon canonically added to the pokedex? Well, you add 'em in YOUR pokedex (why they made a candle evolve into lamps, the world may never)
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

    // Update - Put - Gets form data from Edit and updates pokemon
        app.put("/pokemon/:id", (req, res) => {
            //get id
            const id = req.params.id
            //get body
            const body = req.body
            //change the info
            Monsters[id] = body
            //back to main
            res.redirect("/pokemon")
        })

    // Create - Post - Uses the Form Data from New to list the Pokemon that was created
        app.post("/pokemon", (req, res) => {
            //get body
            const body = req.body
            //add new one to arry
            Monsters.push(body)
            //back to main
            res.redirect("/pokemon")
        })

    // Edit - Get - Grabs information from a Pokemon to be Updated
        app.get("/:id/edit", (req, res) => {
            const id = req.params.id
            const pokemon = Monsters[id]
            res.render("edit.js", {pokemon, id})
        })

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