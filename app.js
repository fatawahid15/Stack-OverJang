const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended: true}))

app.listen(PORT , () => {
    console.log(`Jalan di Port ke ${PORT}`);
})
