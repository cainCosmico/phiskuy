const { Pool, Client } = require('pg');

// const databaseConfig = {
//     user: 'postgres',
//     host: 'localhost',
//     database: 'ovsp-prueba',
//     password: '12345',
//     port: 5432,
// }

const databaseConfig =
{
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: 'lakiy',
  port: 5432
}

class dbHanddler {
    constructor() {
        this.queryResults = new Map();
    }

    makeQuery(queryArgs) {
        return `select codestacion, fecha, hora, ${queryArgs.componente} from campomagnetico where fecha between '${queryArgs.startDate}' and '${queryArgs.endDate}' and codestacion like '${queryArgs.estacion}';`
    }

    async query(queryStr) {		

        const client = new Client(databaseConfig)
        return new Promise( (err, res) => {
            client.connect().then( client => {
                client.query(queryStr, (err, res) => {
                    console.log(res.rows)
                    client.end()
                  })
            });

            pool.connect().then(client =>
            {
                return client.query(queryStr).then(res =>
                {
                    client.release()
                    console.log("[makeQuery]",queryID,"results:",res.rows.length);
                    return res.rows
                }).catch(err =>
                {
                    client.release();
                    console.log("Error in query:",queryStr,"\nStack:");
                    console.log(err.stack)
                    this.Logger.log("Error in query: '"+queryStr+"' Stack:"+err.stack);
                })
            }).then(results => {	resolve(results); })
            .catch(error => {
                console.log("ERROR CONNECTING TO DATABASE!\n"+error)
                this.Logger.log("ERROR CONNECTING TO DATABASE! "+error)
            });
        })
	}

}


// select codestacion, fecha, hora, e from campomagnetico where fecha between '1-06-2018' and '30-06-2018' and codestacion like 'FRA';
var args = {
    componente: 'e',
    estacion: 'FRA',
    startDate: '1-06-2018',
    endDate: '30-06-2018'
}

const client = new Client(databaseConfig)
client.connect()
client.query('select * from volcanes', (err, res) => {
    console.log(res.rows)
    client.end()
  })