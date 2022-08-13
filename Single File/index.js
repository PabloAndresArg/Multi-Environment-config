// GENERA UN ARCHIVO CON EL COMANDO:
// buildconfig --env=local




// EJEMPLO 1


// // config.js
// const env = process.env.NODE_ENV; // 'dev' or 'test'

// const dev = {
//  app: {
//    port: 3000
//  },
//  db: {
//    host: 'localhost',
//    port: 27017,
//    name: 'db'
//  }
// };

// const test = {
//  app: {
//    port: 3000
//  },
//  db: {
//    host: 'localhost',
//    port: 27017,
//    name: 'test'
//  }
// };

// const config = {
//  dev,
//  test
// };

// module.exports = config[env];



// EJEMPLO 2

// var config = require('./env.json')[process.env.NODE_ENV || 'development'];

// json:

// {
//     "development": {
//         "var1": "jenkins://localhost/test",
//         "var2": { "db": { "safe": true } }
//     },
//     "production": {
//         "var1": "jenkins://localhost/production",
//         "var2": { "db": { "safe": true } }
//     }
// }