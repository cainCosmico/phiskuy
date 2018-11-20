const { Client } = require('pg');

const connectionData = {
   user: 'postgres',
   host: 'localhost',
   database: 'saiig',
   password: '12345',
   port: 5432,
 }

 const client = new Client(connectionData);

client.connect()
client.query('SELECT * FROM estacion')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })


console.log(client);