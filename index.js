const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "server up"
    })

})
app.listen(3000, () => {
    console.log("server is running")
})