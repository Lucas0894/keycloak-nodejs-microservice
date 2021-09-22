const express = require('express')
const app = express()


const keyckoak = require('./config/keycloak-config.js').initKeycloak()
app.use(keyckoak.middleware() )

const testController = require('./controller/test-controller.js')
app.use('/test',testController)  

app.get('/', function (req, res)  {
    res.send('server is up');
    
})
app.listen(3000);
