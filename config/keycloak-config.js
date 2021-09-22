const { Store } = require('express-session');
const session = require('express-session')
const keycloak = require('keycloak-connect')

let _keycloak

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    credentials: {
        secret: 'da6c7ff5-8efa-46a4-9d91-54daee06ee0b'
    }

};

function initKeycloak() {
      if (_keycloak) {
          console.warn("Trying to init Keycloak again")
          return _keycloak
      }
      else {
          console.log("Initializing Keycloak...");
          var memoryStore = new session.MemoryStore();
          _keycloak = new keycloak({ store: memoryStore }, keycloakConfig);
          return _keycloak;
      }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak
}


module.exports = {
    initKeycloak,
    getKeycloak
}

