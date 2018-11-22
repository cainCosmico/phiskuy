module.exports =  class ChartManager {
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
      var fechaI = document.getElementById('datepickerI').value.replace( re,'-' );
      var fechaF = document.getElementById('datepickerF').value.replace( re,'-' );
      
      if (fechaI === '' || fechaF === '') {         
         console.log('Campo necesario para graficar');
      }
      console.log(this.fechaI, this.fechaF);
      return {
         startDate: fechaI,
         endDate: feachF
      };
   }

   getData() {

   }
}