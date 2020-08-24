//console.log("hello world")
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

//crud create read uptade delate
/**
 * create - post
 * read - get
 * update - put
 * delete -delete
 */

app.use('/', require('./routes'))



app.listen(3333,()=>{console.log('api runing in port 3333')}) 