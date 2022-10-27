const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())

const courses = require('./data/courses.json')
const categories = require('./data/Categories.json')
const checkout = require('./data/checkoutAPI.json')


app.get('/', (req, res) => {
    res.send('Api is running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`example ${port}`)
})


module.exports = app;