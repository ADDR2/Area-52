function checkData(db, loadData, getData){
	db.transaction(function (tx) {
		tx.executeSql('SELECT COUNT(id) FROM jobs', [], function(tx, results){
			if(results.rows.item(0)["COUNT(id)"] <= 0)
				loadData(db, getData);
			else
				getData();
		 }, null);
	});
}

function loadData(db, getData){
	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['Developer', 17]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['QA', 2]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['BA', 2]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['Deployment', 7]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['PMO', 2]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['Support', 1]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['Sales', 1]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['HHRR', 1]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['Accountant', 1]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['Manager', 2]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['Operations', 4]);
		tx.executeSql('INSERT INTO jobs (Name, Total) VALUES (?,?)', ['CEO', 1]);
		getData();
	});
}

$(document).ready(function() {
	if (!window.openDatabase)
		alert('Databases are not supported in this browser.');

	var db = openDatabase('cgtsJobs', '1.0', 'Test DB', 2 * 1024 * 1024);

	function initChart(data){
		var chart = {
       type: 'pie',
       options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
       }
    };
    var title = {
       text: 'Tipos de ocupaciones en CGTS'
    };
    var tooltip = {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    };

    var plotOptions = {
       pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           depth: 35,
           dataLabels: {
              enabled: true,
              format: '{point.name} - {point.y} personas'
           },
					 style: {
						 fontSize: '15px'
					 }
       }
    };
    var series= [{
    	type: 'pie',
    	name: 'Porcentaje',
    	data: data
    }];

    var json = {};
    json.chart = chart;
    json.title = title;
    json.tooltip = tooltip;
    json.plotOptions = plotOptions;
    json.series = series;
    $('#container').highcharts(json);
	}

	function getData(){
		db.transaction(function (tx) {
			tx.executeSql('SELECT Name, Total FROM jobs', [], function(tx, results){
				if(results.rows.length > 0){
					var data = [];
					for (var i = 0; i < results.rows.length; i++)
						data.push([results.rows.item(i).Name, results.rows.item(i).Total]);
					initChart(data);
				}
			 }, null);
		});
	}

	db.transaction(function (tx) {
		 tx.executeSql('CREATE TABLE IF NOT EXISTS jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Total INTEGER)', [], function(tx, result){
			 checkData(db, loadData, getData);
		 }, null);
		 //tx.executeSql('DELETE FROM jobs');
	});

});
