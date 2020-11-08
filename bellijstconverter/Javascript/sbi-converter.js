$(document).ready(function(){

	
    $('#submit-file').on("click",function(e){
		e.preventDefault();
		$('#files').parse({
			config: {
				delimiter: "auto",
				complete: LinkCreator,
			},
			before: function(file, inputElem)
			{
				//console.log("Parsing file...", file);
			},
			error: function(err, file)
			{
				//console.log("ERROR:", err, file);
			},
			complete: function()
			{
				//console.log("Done with all files");
			}
		});
    });
	
	function LinkCreator(results){
		var link = "<div class='row'><h2>Stap 5</h2><p>Klik <a href='https://company.info/organisations/search?";
		var data = results.data;
		 
		for(i=0;i<data.length;i++){
			var row = data[i];
			var cells = row.join("").split(".");		
			var cell = cells.join("").split(" ");
                        var cell2 = cell.join("").split(" ");


			
			for(j=0;j<cell2.length;j++){
				if (cell2[j] !== ""){
				link+= "&amp;sectors=";	
				link+= cell2[j];
				}
			}
		}
		link+= "&amp;onlyMainSector=true&amp;employeecats=05&amp;employeecats=06&amp;employeecats=07&amp;employeecats=08&amp;employeecats=09&amp;employeecats=10&amp;employeecats=11&amp;employeecats=12&amp;rvs=41%3B42%3B9928%3B9953&rvs=11%3B12%3B13%3B14%3B9932&rvs=07&rvs=21%3B22%3B24%3B9924&rvs=61%3B62%3B63%3B64%3B65%3B66%3B9909%3B9912%3B9934%3B9943&rvs=51%3B52%3B53%3B54%3B9910&rvs=81%3B82%3B83%3B84%3B85%3B86&rvs=05' target='_blank'>hier</a> om naar company.info te gaan. De SBI-codes zijn hier nu automatisch ingevuld. Vergeet niet om de juiste postcodes en/of lokatie in te vullen. Daarna kun je het bestand op de gebruikelijke manier downloaden.</div>";
		$("#Company_info_link").html(link);
	}
  });