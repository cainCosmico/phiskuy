class Chart {
   constructor(selector, titulo) {
      this.selector = document.getElementById(selector);
      this.chartTittle = titulo;
      this.chartObject = null;
      this.chartData = null;
      this.animationDuration = 600; 
      this.chartType = 'bar';      

      this.chartOptions =
		{
			responsive: true,
			legend:  {display: true},
			title:
			{
				display: true,
				text: this.chartTittle
			},
			animation: {duration: this.animationDuration},
		}
   }

   parseData(dataSet) {
      if(dataSet === undefined || dataSet.length === 0) {
			console.log("No data for",this.chartTittle,"!");
			this.chartOptions.title.text = "NO HAY DATOS EN EL RANGO SELECCIONADO";
			this.chartData = {labels: [], datasets: null};
			this.show();
			return;
		}
		else {
			this.chartOptions.title.text = this.chartTittle;
      }
      

   }

   resetData() {
		this.chartData = null;
	}

   resetAll() {
		if(this.chartObject !== null){		
			this.chartObject.destroy();
		}
	}

   show() {	
		this.resetAll();
		this.chartObject = new Chart(this.selector, {
				type: this.chartType,
				data: this.chartData,
				options: this.chartOptions
		});
   }
}