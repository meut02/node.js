const express = require('express')

const fs=require('fs')

const router = express.Router()

router.get('/', (req, res, next) => {
   fs.readFile('message.txt', { encoding: "utf-8" }, (err, data) => {
      if (err) { console.log(err) }
   res.send(
      `${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/user" method="POST">
      <input type="text" name="message" id="message">
      <input type="hidden" name="username" id="username">
         <button type="submit">ADD MESSAGE</button></form>`
         )

})
})

router.post('/user', (req, res, next) => {
   console.log(req.body.username)
   console.log(req.body.message)
   fs.writeFile('message.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},err=>{
      err ? console.log(err): res.redirect('/')
   })
  
})


module.exports = router