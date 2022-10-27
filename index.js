const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())

const courses = require('./data/courses.json')
const categories = require('./data/Categories.json')
const checkout = require('./data/checkoutAPI.json')



app.listen(port, () => {
    console.log(`example ${port}`)
})


module.exports = app;