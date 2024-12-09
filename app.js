// Importing modeules
const express = require('express')
const path = require('path')
// Importing routers
const { router } = require('./routers')

// Define express app
const app = express()
const port = 3000

// Setting up views and static folder
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'static')))

// Enable express app to parase JSON body
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Using routers and controllers
app.use('/', router)

// Starting express app server
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})