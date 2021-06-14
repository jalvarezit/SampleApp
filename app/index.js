const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middlewares
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", require("./routes/api"));

// Running server
if (process.env.NODE_ENV === 'test') {
	module.exports = app;
} else {
	app.listen(port, () => {
        console.log(`Sample app listening at http://localhost:${port}`)
    })
}
