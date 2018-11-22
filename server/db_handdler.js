const { Client } = require('pg');

const databaseConfig = {
    user: 'postgres',
    host: 'localhost',
    // database: 'ovsp-prueba',
    database: 'saiig',
    password: '12345',
    port: 5432,
}

// const databaseConfig =
// {
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   host: process.env.PGHOST,
//   database: 'lakiy',
//   port: 5432
// }

exports.module = class DBHanddler {
    constructor() {
        this.queryResults = new Map();
    }

    setQuery(queryArgs) {
        return `select codestacion, fecha, hora, ${queryArgs.componente} from campomagnetico where fecha between '${queryArgs.startDate}' and '${queryArgs.endDate}' and codestacion like '${queryArgs.estacion}';`
    }

    async MakeQuery(queryStr) {		
        const client = new Client(databaseConfig)
        await client.connect()

        const res = await client.query(queryStr)
        await client.end();
        return res.rows;
    }    
}


// select codestacion, fecha, hora, e 
// from campomagnetico where fecha between '1-06-2018' and '30-06-2018' and codestacion like 'FRA';
// var args = {
//     componente: 'e',
//     estacion: 'FRA',
//     startDate: '1-06-2018',
//     endDate: '30-06-2018'
// }

// var bd = new DBHanddler();
// bd.MakeQuery(bd.setQuery(args)).then( res => {
//     console.log(res[0])
// }).catch( err => {
//     console.log(err);
// })