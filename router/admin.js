const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/product" method="POST"><input type="text" id="username" name="title"><button type="submit">ADD USER</button></form>')
})

router.post('/product', (req, res, next) => {
    res.redirect('/')
})





module.exports = router
