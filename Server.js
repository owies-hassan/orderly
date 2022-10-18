
require('dotenv').config()
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const routerProducts=require('./Router/ProductsRoutes')
const routerUsers=require('./Router/UserRoutes')
const routerOrder=require('./Router/Order')
const routerContact=require('./Router/Contact')
const cors=require('cors')
const path=require('path')


app.use(cors())


app.use('/public',express.static('public'))
app.use(express.json())

// app.use('/send',routerContact)
app.use('/api/products', routerProducts)
app.use('/api/users', routerUsers)
app.use('/api/order', routerOrder)

app.use(express.static('../frontend/build'))
app.get('*',(req,res)=>{
    res.sendFile((path.join(__dirname,'../frontend/build/index.html')))
})


    mongoose.connect(process.env.URL_DATA_BASE,{

    }).then(()=>{
        app.listen(process.env.PORT,()=>{
          console.log(`http://localhost:${process.env.PORT}`)
        })
    }).catch((err)=>{

        console.log(err.message)
    })


