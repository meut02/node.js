
const express=require('express');

const bodyParser=require('body-parser')

const app=express()

const adminRoutes=require('./router/admin')

const userRoutes=require('./router/user')

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)

app.use(userRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})
app.listen(4000);
