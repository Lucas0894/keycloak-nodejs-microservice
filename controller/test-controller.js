const express = require('express')
const router = express.Router()

const keyckoak = require('../config/keycloak-config.js').getKeycloak()

router.get('/anonymous',function(req,res){
    res.send('Hello anonymous')
})
router.get('/user', keyckoak.protect('user'),function(req,res){
    res.send('Hello user')
})
router.get('/admin',keyckoak.protect('admin'),function(req,res){
    res.send('Hello admin')
})
router.get('/all-user',keyckoak.protect(['user','admin']),function(req,res){
    res.send('Hello all-user')
})
module.exports= router