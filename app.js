const express = require('express')
const ejsMate = require('ejs-mate')
const path = require('path')
const app = express();


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('tobisheriff');
})


app.listen('3001', () => {
    console.log('Serving your site on port 3001');
})