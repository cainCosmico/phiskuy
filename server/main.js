let dbmanager = require('./db_handdler.js');

var args = {
    componente: 'e',
    estacion: 'FRA',
    startDate: '1-06-2018',
    endDate: '30-06-2018'
}

class Main {
   constructor() {
      this.db = new dbmanager();      
      console.log(this.db);
   }

   getData(args) {
      this.bd.MakeQuery(this.bd.setQuery(args)).then( res => {
         // console.log(res[0])
         return res;
      }).catch( err => {
         console.log(err);
      })
   }
}

var main = new Main();
