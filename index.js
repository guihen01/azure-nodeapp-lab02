const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`
        <h1>Lab Azure #2 -version 2</h1>
        <p>Application Node.js déployée sur Azure App Service</p>
        <p>CI/CD avec GitHub Actions</p>
    `)
})

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})
