const express = require('express')
const app = express()


app.get('/api', (req, res) => {
    res.json({"name":"mkal", "schedule":"please"})
});

app.listen(2000, () => { console.log("Server started on porst 2000") })
