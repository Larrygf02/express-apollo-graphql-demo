const express = require('express')

const app = express()

module.exports = app

function start() {
    app.listen(3000, () => {
        console.log('Server on port', 3000)
    })
}

start()