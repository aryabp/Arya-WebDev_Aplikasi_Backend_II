const express = require('express')
const app = express()
const bp = require('body-parser')
const routes = require("./routes");
const { databaseConfig } = require('./database')

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

databaseConfig.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`Connected to database ${databaseConfig.database}`)
})

app.use(express.Router());
app.use('/', routes)

// app.get('/',(req,res)=>{
//     db.query(`SELECT * FROM links`,(err,results)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         res.send(results.rows)
//     })

// })

// app.post('/insert',(req,res)=>{
//     db.query(`INSERT INTO links(url,name,description) 
//         values('${req.body.url}','${req.body.name}','${req.body.description}')`
//     ,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         res.send(`URL berhasil ditambahkan ke database`)
//     })
// })

// app.put('/update',(req,res)=>{
//     db.query(`UPDATE links set name='${req.body.name}' where url='${req.body.url}' `,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         res.send(`URL dengan nama ${req.body.name} berhasil diupdate`)
//     })
// })

// app.delete('/delete',(req,res)=>{
//     db.query(`DELETE FROM links where url='${req.body.url}'`,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         res.send(`URL berhasil dihapus`)
//     })
// })

app.listen(1004,()=>{
    console.log(`Server arya berjalan di port 1004`)
})