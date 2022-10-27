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
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCheckout = checkout.find(item => item.category_id == id);
    res.send(selectedCheckout)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedItem = courses.find(item => item.category_id == id);
    res.send(selectedItem)
})
app.listen(port, () => {
    console.log(`example ${port}`)
})


module.exports = app;