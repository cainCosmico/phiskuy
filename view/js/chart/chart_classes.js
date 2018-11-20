class ChartManager {
   constructor() {
      this.source = [];
      this.target = [];

      this.initWindgets();
   }

   initWindgets() {
      this.graficar = document.getElementById('graficar');
      this.graficar.addEventListener( 'click', this.getDate.bind(this) );
   }

   getDate() {
      var re = /\//g;
      this.fechaI = document.getElementById('datepickerI').value.replace( re,'-' );
      this.fechaF = document.getElementById('datepickerF').value.replace( re,'-' );
      // console.log(this.fechaI, this.fechaF);
   }

   
}

const chartManager = new ChartManager();