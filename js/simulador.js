function simula1() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var agriculturaValor = document.getElementById("agricultura_ha").value;
			var agricultura2otherUso = document.getElementById("agricultura2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "AGRICULTURA"
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});

			if (agriculturaValor > 0)
			{
			//console.log(agricultura2otherUso);
				if (agricultura2otherUso === "2")
				{
					//alert("Transferência do uso para " + agricultura2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var props = layer.feature.properties;   // attributes
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) - parseFloat(agriculturaValor);
					console.log('Área utilizador: '+agriculturaValor);
					console.log('AGRICULTURA_HA: '+layer.feature.properties.AGRICULTURA_HA);
					console.log('AGRICULTURA_NEW: '+AGRICULTURA_NEW);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(agriculturaValor);
					console.log('FOLHOSAS_HA1: '+layer.feature.properties.FOLHOSAS_HA);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					console.log('FOLHOSAS_HA2: '+layer.feature.properties.FOLHOSAS_HA);
					console.log('FOLHOSAS_NEW: '+FOLHOSAS_NEW);					
					});
				}
				if (agricultura2otherUso === "3")
				{
					//alert("Transferência do uso para " + agricultura2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var props = layer.feature.properties;   // attributes
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) - parseFloat(agriculturaValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(agriculturaValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					});					
				}
				if (agricultura2otherUso === "4")
				{
					//alert("Transferência do uso para " + agricultura2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var props = layer.feature.properties;   // attributes
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) - parseFloat(agriculturaValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(agriculturaValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					});
				}
				if (agricultura2otherUso === "5")
				{
					//alert("Transferência do uso para " + agricultura2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var props = layer.feature.properties;   // attributes
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) - parseFloat(agriculturaValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(agriculturaValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					});
				}
				if (agricultura2otherUso === "6")
				{
					//alert("Transferência do uso para " + agricultura2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var props = layer.feature.properties;   // attributes
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) - parseFloat(agriculturaValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(agriculturaValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					});
				}
				if (agricultura2otherUso === "7")
				{
					//alert("Transferência do uso para " + agricultura2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var props = layer.feature.properties;   // attributes
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) - parseFloat(agriculturaValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA + agriculturaValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					});
				}
				if (agricultura2otherUso === "8")
				{
					//alert("Transferência do uso para " + agricultura2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var props = layer.feature.properties;   // attributes
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) - parseFloat(agriculturaValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) + parseFloat(agriculturaValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map									
					var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
					console.log('AGRICULTURA_HA: ' +layer.feature.properties.AGRICULTURA_HA);
					console.log('TOTAL_HA: ' +layer.feature.properties.TOTAL_HA);				
					console.log('FRAC_AGRICULTURA: ' +FRAC_AGRICULTURA);
					var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
					console.log('FRAC_FOLHOSAS: ' +FRAC_FOLHOSAS);
					var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
					console.log('FRAC_EUCALIPTO: ' +FRAC_EUCALIPTO);
					var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
					console.log('FRAC_INVASORAS: ' +FRAC_INVASORAS);
					var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
					console.log('FRAC_PINHEIROBRAVO: ' +FRAC_PINHEIROBRAVO);
					var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
					console.log('FRAC_OUTROSPINHEIROS: ' +FRAC_OUTROSPINHEIROS);
					var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
					console.log('FRAC_MATOS: ' +FRAC_MATOS);
					var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
					console.log('FRAC_NAOCOMBUSTIVEL: ' +FRAC_NAOCOMBUSTIVEL);
					var LR_SLOPE = layer.feature.properties.LR_Slope;
					//console.log(LR_SLOPE);
					var LR_ELEVATION = layer.feature.properties.LR_Elevation;
					//console.log(LR_ELEVATION);
					//CÁLCULO DO LR
					var LR_AGRICULTURA = 0.280803;
					var LR_EUCALIPTO = 1.530489;
					var LR_PINHEIROBRAVO = 1.565563;			
					var LR_FOLHOSAS = 1.116608;
					var LR_OUTROSPINHEIROS = 0.674423;
					var LR_INVASORAS = 1.385554;
					var LR_MATOS = 2.467546;
					var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
					var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
					console.log("LR_TOTAL: "+LR_TOTAL);
					//CÁLCULO DO HAZARD E DO RISCO
					var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
					var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
					layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
					var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
					console.log("INDRISCINC_NEW: " +INDRISCINC_NEW);
					console.log("INDRISCOINC_MAX: " +layer.feature.properties.INDRISCOINC_MAX);
					var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
					if (INDRISCINC_COMPARA>0) {
						alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
					} else {
						alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
					}	
					layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;

				var AREATOTAL_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) + parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(layer.feature.properties.EUCALIPTO_HA) + parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(layer.feature.properties.MATOS_HA) + parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA);				
				console.log('AREATOTAL_REF: '+layer.feature.properties.TOTAL_HA);
				console.log('AREATOTAL_NEW: '+AREATOTAL_NEW);				
				if (AREATOTAL_NEW <= layer.feature.properties.TOTAL_HA) {
					freguesiaselLayer.addTo(map);
					map.fitBounds(freguesiaselLayer.getBounds());
				} else {
					alert("A área transferida é maior que a área da freguesia em " +AREATOTAL_NEW - layer.feature.properties.TOTAL_HA+"ha");				
				}
					
				});
								
			}									
}
function simula2() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var folhosasValor = document.getElementById("folhosas_ha").value;
			var folhosas2otherUso = document.getElementById("folhosas2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "FOLHOSAS"
			if (folhosasValor > 0)
			{
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
			console.log(folhosas2otherUso);
				if (folhosas2otherUso === "1")
				{
					//alert("Transferência do uso para " + folhosas2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					//console.log(layer.feature.properties.AGRICULTURA_HA);
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) - parseFloat(folhosasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) + parseFloat(folhosasValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;					
					});
				}
				if (folhosas2otherUso === "3")
				{
					//alert("Transferência do uso para " + folhosas2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) - parseFloat(folhosasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) + parseFloat(folhosasValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					});					
				}
				if (folhosas2otherUso === "4")
				{
					alert("Transferência do uso para " + folhosas2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) - parseFloat(folhosasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(folhosasValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					});
				}
				if (folhosas2otherUso === "5")
				{
					//alert("Transferência do uso para " + folhosas2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) - parseFloat(folhosasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(folhosasValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					});
				}
				if (folhosas2otherUso === "6")
				{
					//alert("Transferência do uso para " + folhosas2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) - parseFloat(folhosasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(folhosasValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					});
				}
				if (folhosas2otherUso === "7")
				{
					//alert("Transferência do uso para " + folhosas2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) - parseFloat(folhosasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) + parseFloat(folhosasValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					});
				}
				if (folhosas2otherUso === "8")
				{
					//alert("Transferência do uso para " + folhosas2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) - parseFloat(folhosasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) + parseFloat(folhosasValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map					
				var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_AGRICULTURA);
				var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_FOLHOSAS);
				var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_EUCALIPTO);
				var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_INVASORAS);
				var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_PINHEIROBRAVO);
				var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_OUTROSPINHEIROS);
				var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_MATOS);
				var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_NAOCOMBUSTIVEL);
				var LR_SLOPE = layer.feature.properties.LR_Slope;
				console.log(LR_SLOPE);
				var LR_ELEVATION = layer.feature.properties.LR_Elevation;
				console.log(LR_ELEVATION);
				//CÁLCULO DO LR
				var LR_AGRICULTURA = 0.280803;
				var LR_EUCALIPTO = 1.530489;
				var LR_PINHEIROBRAVO = 1.565563;			
				var LR_FOLHOSAS = 1.116608;
				var LR_OUTROSPINHEIROS = 0.674423;
				var LR_INVASORAS = 1.385554;
				var LR_MATOS = 2.467546;
				var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
				var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
				console.log(LR_TOTAL);
				//CÁLCULO DO HAZARD E DO RISCO
				var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
				var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
				layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
				var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
				console.log(INDRISCINC_NEW);
				console.log(layer.feature.properties.INDRISCOINC_MAX);
				var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
				if (INDRISCINC_COMPARA>0) {
					alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				} else {
					alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				}
				layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;					
			});			
			freguesiaselLayer.addTo(map);
			map.fitBounds(freguesiaselLayer.getBounds());			
			}
}
function simula3() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var eucaliptoValor = document.getElementById("eucalipto_ha").value;
			var eucalipto2otherUso = document.getElementById("eucalipto2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "EUCALIPTO"
			if (eucaliptoValor > 0)
			{
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
			console.log(eucalipto2otherUso);
				if (eucalipto2otherUso === "1")
				{
					//alert("Transferência do uso para " + eucalipto2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) - parseFloat(eucaliptoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) + parseFloat(eucaliptoValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;					
					});
				}
				if (eucalipto2otherUso === "2")
				{
					//alert("Transferência do uso para " + eucalipto2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) - parseFloat(eucaliptoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(eucaliptoValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					});					
				}
				if (eucalipto2otherUso === "4")
				{
					//alert("Transferência do uso para " + eucalipto2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) - parseFloat(eucaliptoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(eucaliptoValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					});
				}
				if (eucalipto2otherUso === "5")
				{
					//alert("Transferência do uso para " + eucalipto2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) - parseFloat(eucaliptoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(eucaliptoValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					});
				}
				if (eucalipto2otherUso === "6")
				{
					//alert("Transferência do uso para " + eucalipto2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) - parseFloat(eucaliptoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(eucaliptoValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					});
				}
				if (eucalipto2otherUso === "7")
				{
					//alert("Transferência do uso para " + eucalipto2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) - parseFloat(eucaliptoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) + parseFloat(eucaliptoValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					});
				}
				if (eucalipto2otherUso === "8")
				{
					//alert("Transferência do uso para " + eucalipto2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) - parseFloat(eucaliptoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) + parseFloat(eucaliptoValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map					
				var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_AGRICULTURA);
				var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_FOLHOSAS);
				var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_EUCALIPTO);
				var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_INVASORAS);
				var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_PINHEIROBRAVO);
				var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_OUTROSPINHEIROS);
				var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_MATOS);
				var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_NAOCOMBUSTIVEL);
				var LR_SLOPE = layer.feature.properties.LR_Slope;
				console.log(LR_SLOPE);
				var LR_ELEVATION = layer.feature.properties.LR_Elevation;
				console.log(LR_ELEVATION);
				//CÁLCULO DO LR
				var LR_AGRICULTURA = 0.280803;
				var LR_EUCALIPTO = 1.530489;
				var LR_PINHEIROBRAVO = 1.565563;			
				var LR_FOLHOSAS = 1.116608;
				var LR_OUTROSPINHEIROS = 0.674423;
				var LR_INVASORAS = 1.385554;
				var LR_MATOS = 2.467546;
				var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
				var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
				console.log(LR_TOTAL);
				//CÁLCULO DO HAZARD E DO RISCO
				var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
				var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
				layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
				var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
				console.log(INDRISCINC_NEW);
				console.log(layer.feature.properties.INDRISCOINC_MAX);
				var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
				if (INDRISCINC_COMPARA>0) {
					alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				} else {
					alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				}
				layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;					
			});			
			freguesiaselLayer.addTo(map);
			map.fitBounds(freguesiaselLayer.getBounds());			
			}
}
function simula4() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var invasorasValor = document.getElementById("invasoras_ha").value;
			var invasoras2otherUso = document.getElementById("invasoras2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "INVASORAS"
			if (invasorasValor > 0)
			{
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
			console.log(invasoras2otherUso);
				if (invasoras2otherUso === "1")
				{
					//alert("Transferência do uso para " + invasoras2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var INVASORAS_NEW = layer.feature.properties.INVASORAS_HA - invasorasValor;
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					var AGRICULTURA_NEW = layer.feature.properties.AGRICULTURA_HA + invasorasValor;
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;					
					});
				}
				if (invasoras2otherUso === "2")
				{
					//alert("Transferência do uso para " + invasoras2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) - parseFloat(invasorasValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(invasorasValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					});					
				}
				if (invasoras2otherUso === "3")
				{
					//alert("Transferência do uso para " + invasoras2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) - parseFloat(invasorasValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) + parseFloat(invasorasValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					});
				}
				if (invasoras2otherUso === "5")
				{
					//alert("Transferência do uso para " + invasoras2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) - parseFloat(invasorasValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(invasorasValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					});
				}
				if (invasoras2otherUso === "6")
				{
					//alert("Transferência do uso para " + invasoras2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) - parseFloat(invasorasValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(invasorasValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					});
				}
				if (invasoras2otherUso === "7")
				{
					//alert("Transferência do uso para " + invasoras2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) - parseFloat(invasorasValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) + parseFloat(invasorasValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					});
				}
				if (invasoras2otherUso === "8")
				{
					//alert("Transferência do uso para " + invasorasValor);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) - parseFloat(invasorasValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) + parseFloat(invasorasValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map					
				var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_AGRICULTURA);
				var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_FOLHOSAS);
				var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_EUCALIPTO);
				var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_INVASORAS);
				var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_PINHEIROBRAVO);
				var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_OUTROSPINHEIROS);
				var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_MATOS);
				var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_NAOCOMBUSTIVEL);
				var LR_SLOPE = layer.feature.properties.LR_Slope;
				console.log(LR_SLOPE);
				var LR_ELEVATION = layer.feature.properties.LR_Elevation;
				console.log(LR_ELEVATION);
				//CÁLCULO DO LR
				var LR_AGRICULTURA = 0.280803;
				var LR_EUCALIPTO = 1.530489;
				var LR_PINHEIROBRAVO = 1.565563;			
				var LR_FOLHOSAS = 1.116608;
				var LR_OUTROSPINHEIROS = 0.674423;
				var LR_INVASORAS = 1.385554;
				var LR_MATOS = 2.467546;
				var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
				var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
				console.log(LR_TOTAL);
				//CÁLCULO DO HAZARD E DO RISCO
				var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
				var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
				layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
				var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
				console.log(INDRISCINC_NEW);
				console.log(layer.feature.properties.INDRISCOINC_MAX);
				var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
				if (INDRISCINC_COMPARA>0) {
					alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				} else {
					alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				}
				layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;					
			});			
			freguesiaselLayer.addTo(map);
			map.fitBounds(freguesiaselLayer.getBounds());			
			}
}
function simula5() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var pinheirobravoValor = document.getElementById("pinheirobravo_ha").value;
			var pinheirobravo2otherUso = document.getElementById("pinheirobravo2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "PINHEIRO BRAVO"
			if (pinheirobravoValor > 0)
			{
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
			console.log(pinheirobravo2otherUso);
				if (pinheirobravo2otherUso === "1")
				{
					//alert("Transferência do uso para " + pinheirobravo2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var PINHEIROBRAVO_NEW = layer.feature.properties.PINHEIRO_BRAVO_HA - pinheirobravoValor;
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					var AGRICULTURA_NEW = layer.feature.properties.AGRICULTURA_HA + pinheirobravoValor;
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;					
					});
				}
				if (pinheirobravo2otherUso === "2")
				{
					//alert("Transferência do uso para " + pinheirobravo2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) - parseFloat(pinheirobravoValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(pinheirobravoValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					});					
				}
				if (pinheirobravo2otherUso === "3")
				{
					//alert("Transferência do uso para " + pinheirobravo2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) - parseFloat(pinheirobravoValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) + parseFloat(pinheirobravoValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					});
				}
				if (pinheirobravo2otherUso === "4")
				{
					//alert("Transferência do uso para " + pinheirobravo2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) - parseFloat(pinheirobravoValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(pinheirobravoValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					});
				}
				if (pinheirobravo2otherUso === "6")
				{
					//alert("Transferência do uso para " + pinheirobravo2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) - parseFloat(pinheirobravoValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(pinheirobravoValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					});
				}
				if (pinheirobravo2otherUso === "7")
				{
					//alert("Transferência do uso para " + pinheirobravo2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) - parseFloat(pinheirobravoValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) + parseFloat(pinheirobravoValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					});
				}
				if (pinheirobravo2otherUso === "8")
				{
					//alert("Transferência do uso para " + pinheirobravoValor);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) - parseFloat(pinheirobravoValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) + parseFloat(pinheirobravoValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map					
				var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_AGRICULTURA);
				var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_FOLHOSAS);
				var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_EUCALIPTO);
				var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_INVASORAS);
				var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_PINHEIROBRAVO);
				var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_OUTROSPINHEIROS);
				var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_MATOS);
				var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_NAOCOMBUSTIVEL);
				var LR_SLOPE = layer.feature.properties.LR_Slope;
				console.log(LR_SLOPE);
				var LR_ELEVATION = layer.feature.properties.LR_Elevation;
				console.log(LR_ELEVATION);
				//CÁLCULO DO LR
				var LR_AGRICULTURA = 0.280803;
				var LR_EUCALIPTO = 1.530489;
				var LR_PINHEIROBRAVO = 1.565563;			
				var LR_FOLHOSAS = 1.116608;
				var LR_OUTROSPINHEIROS = 0.674423;
				var LR_INVASORAS = 1.385554;
				var LR_MATOS = 2.467546;
				var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
				var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
				console.log(LR_TOTAL);
				//CÁLCULO DO HAZARD E DO RISCO
				var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
				var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
				layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
				var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
				console.log(INDRISCINC_NEW);
				console.log(layer.feature.properties.INDRISCOINC_MAX);
				var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
				if (INDRISCINC_COMPARA>0) {
					alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				} else {
					alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				}
				layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;					
			});			
			freguesiaselLayer.addTo(map);
			map.fitBounds(freguesiaselLayer.getBounds());			
			}
}
function simula6() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var outrospinheirosValor = document.getElementById("outrospinheiros_ha").value;
			var outrospinheiros2otherUso = document.getElementById("outrospinheiros2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "OUTROS PINHEIROS"
			if (outrospinheirosValor > 0)
			{
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
			console.log(outrospinheiros2otherUso);
				if (outrospinheiros2otherUso === "1")
				{
					//alert("Transferência do uso para " + outrospinheiros2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) - parseFloat(outrospinheirosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) + parseFloat(outrospinheirosValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;					
					});
				}
				if (outrospinheiros2otherUso === "2")
				{
					//alert("Transferência do uso para " + outrospinheiros2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) - parseFloat(outrospinheirosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(outrospinheirosValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					});					
				}
				if (outrospinheiros2otherUso === "3")
				{
					//alert("Transferência do uso para " + outrospinheiros2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) - parseFloat(outrospinheirosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) + parseFloat(outrospinheirosValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					});
				}
				if (outrospinheiros2otherUso === "4")
				{
					//alert("Transferência do uso para " + outrospinheiros2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) - parseFloat(outrospinheirosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(outrospinheirosValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					});
				}
				if (outrospinheiros2otherUso === "5")
				{
					//alert("Transferência do uso para " + outrospinheiros2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) - parseFloat(outrospinheirosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(outrospinheirosValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					});
				}
				if (outrospinheiros2otherUso === "7")
				{
					//alert("Transferência do uso para " + outrospinheiros2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) - parseFloat(outrospinheirosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) + parseFloat(outrospinheirosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					});
				}
				if (outrospinheiros2otherUso === "8")
				{
					//alert("Transferência do uso para " + outrospinheiros2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) - parseFloat(outrospinheirosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) + parseFloat(outrospinheirosValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map					
				var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_AGRICULTURA);
				var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_FOLHOSAS);
				var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_EUCALIPTO);
				var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_INVASORAS);
				var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_PINHEIROBRAVO);
				var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_OUTROSPINHEIROS);
				var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_MATOS);
				var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_NAOCOMBUSTIVEL);
				var LR_SLOPE = layer.feature.properties.LR_Slope;
				console.log(LR_SLOPE);
				var LR_ELEVATION = layer.feature.properties.LR_Elevation;
				console.log(LR_ELEVATION);
				//CÁLCULO DO LR
				var LR_AGRICULTURA = 0.280803;
				var LR_EUCALIPTO = 1.530489;
				var LR_PINHEIROBRAVO = 1.565563;			
				var LR_FOLHOSAS = 1.116608;
				var LR_OUTROSPINHEIROS = 0.674423;
				var LR_INVASORAS = 1.385554;
				var LR_MATOS = 2.467546;
				var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
				var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
				console.log(LR_TOTAL);
				//CÁLCULO DO HAZARD E DO RISCO
				var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
				var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
				layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
				var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
				console.log(INDRISCINC_NEW);
				console.log(layer.feature.properties.INDRISCOINC_MAX);
				var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
				if (INDRISCINC_COMPARA>0) {
					alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				} else {
					alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				}
				layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;					
			});			
			freguesiaselLayer.addTo(map);
			map.fitBounds(freguesiaselLayer.getBounds());			
			}
}
function simula7() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var matosValor = document.getElementById("matos_ha").value;
			var matos2otherUso = document.getElementById("matos2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "MATOS"
			if (matosValor > 0)
			{
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
			console.log(matos2otherUso);
				if (matos2otherUso === "1")
				{
					//alert("Transferência do uso para " + matos2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(matosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) + parseFloat(matosValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;					
					});
				}
				if (matos2otherUso === "2")
				{
					//alert("Transferência do uso para " + matos2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(matosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(matosValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					});					
				}
				if (matos2otherUso === "3")
				{
					//alert("Transferência do uso para " + matos2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(matosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) + parseFloat(matosValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					});
				}
				if (matos2otherUso === "4")
				{
					//alert("Transferência do uso para " + matos2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(matosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(matosValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					});
				}
				if (matos2otherUso === "5")
				{
					//alert("Transferência do uso para " + matos2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(matosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(matosValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					});
				}
				if (matos2otherUso === "6")
				{
					//alert("Transferência do uso para " + matos2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(matosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(matosValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					});
				}
				if (matos2otherUso === "8")
				{
					//alert("Transferência do uso para " + matos2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(matosValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) + parseFloat(matosValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map					
				var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_AGRICULTURA);
				var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_FOLHOSAS);
				var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_EUCALIPTO);
				var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_INVASORAS);
				var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_PINHEIROBRAVO);
				var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_OUTROSPINHEIROS);
				var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_MATOS);
				var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_NAOCOMBUSTIVEL);
				var LR_SLOPE = layer.feature.properties.LR_Slope;
				console.log(LR_SLOPE);
				var LR_ELEVATION = layer.feature.properties.LR_Elevation;
				console.log(LR_ELEVATION);
				//CÁLCULO DO LR
				var LR_AGRICULTURA = 0.280803;
				var LR_EUCALIPTO = 1.530489;
				var LR_PINHEIROBRAVO = 1.565563;			
				var LR_FOLHOSAS = 1.116608;
				var LR_OUTROSPINHEIROS = 0.674423;
				var LR_INVASORAS = 1.385554;
				var LR_MATOS = 2.467546;
				var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
				var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
				console.log(LR_TOTAL);
				//CÁLCULO DO HAZARD E DO RISCO
				var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
				var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
				layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
				var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
				console.log(INDRISCINC_NEW);
				console.log(layer.feature.properties.INDRISCOINC_MAX);
				var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
				if (INDRISCINC_COMPARA>0) {
					alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				} else {
					alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				}
				layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;					
			});			
			freguesiaselLayer.addTo(map);
			map.fitBounds(freguesiaselLayer.getBounds());			
			}
}
function simula8() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var naocombustivelValor = document.getElementById("naocombustivel_ha").value;
			var naocombustivel2otherUso = document.getElementById("naocombustivel2other").value;
			//CÁLCULO DA ÁREA TRANSFERIDA DA CLASSE "NÃO COMBUSTÍVEL"
			if (naocombustivelValor > 0)
			{
			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
			console.log(naocombustivel2otherUso);
				if (naocombustivel2otherUso === "1")
				{
					//alert("Transferência do uso para " + naocombustivel2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) - parseFloat(naocombustivelValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					var AGRICULTURA_NEW = parseFloat(layer.feature.properties.AGRICULTURA_HA) + parseFloat(naocombustivelValor);
					layer.feature.properties.AGRICULTURA_HA = AGRICULTURA_NEW;					
					});
				}
				if (naocombustivel2otherUso === "2")
				{
					//alert("Transferência do uso para " + naocombustivel2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) - parseFloat(naocombustivelValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					var FOLHOSAS_NEW = parseFloat(layer.feature.properties.FOLHOSAS_HA) + parseFloat(naocombustivelValor);
					layer.feature.properties.FOLHOSAS_HA = FOLHOSAS_NEW;
					});					
				}
				if (naocombustivel2otherUso === "3")
				{
					//alert("Transferência do uso para " + naocombustivel2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) - parseFloat(naocombustivelValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					var EUCALIPTO_NEW = parseFloat(layer.feature.properties.EUCALIPTO_HA) + parseFloat(naocombustivelValor);
					layer.feature.properties.EUCALIPTO_HA = EUCALIPTO_NEW;
					});
				}
				if (naocombustivel2otherUso === "4")
				{
					//alert("Transferência do uso para " + naocombustivel2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) - parseFloat(naocombustivelValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					var INVASORAS_NEW = parseFloat(layer.feature.properties.INVASORAS_HA) + parseFloat(naocombustivelValor);
					layer.feature.properties.INVASORAS_HA = INVASORAS_NEW;
					});
				}
				if (naocombustivel2otherUso === "5")
				{
					//alert("Transferência do uso para " + naocombustivel2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) - parseFloat(naocombustivelValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					var PINHEIROBRAVO_NEW = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA) + parseFloat(naocombustivelValor);
					layer.feature.properties.PINHEIRO_BRAVO_HA = PINHEIROBRAVO_NEW;
					});
				}
				if (naocombustivel2otherUso === "6")
				{
					//alert("Transferência do uso para " + naocombustivel2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) - parseFloat(naocombustivelValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					var OUTROSPINHEIROS_NEW = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA) + parseFloat(naocombustivelValor);
					layer.feature.properties.OUTROS_PINHEIROS_HA = OUTROSPINHEIROS_NEW;
					});
				}
				if (naocombustivel2otherUso === "7")
				{
					//alert("Transferência do uso para " + naocombustivel2otherUso);
					freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map
					var NAOCOMBUSTIVEL_NEW = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA) - parseFloat(naocombustivelValor);
					layer.feature.properties.NAOCOMBUSTIVEL_HA = NAOCOMBUSTIVEL_NEW;
					var MATOS_NEW = parseFloat(layer.feature.properties.MATOS_HA) + parseFloat(naocombustivelValor);
					layer.feature.properties.MATOS_HA = MATOS_NEW;
					});
				}
			//CÁLCULO DA FRAÇÃO DA ÁREA_HA
			var FRAC_AGRICULTURA = 0;
			var FRAC_FOLHOSAS = 0;
			var FRAC_EUCALIPTO = 0;
			var FRAC_INVASORAS = 0;
			var FRAC_PINHEIROBRAVO = 0;
			var FRAC_OUTROSPINHEIROS = 0;
			var FRAC_MATOS = 0;
			var FRAC_NAOCOMBUSTIVEL = 0;
			var LR_SLOPE = 0;
			var LR_ELEVATION = 0;
			
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map					
				var FRAC_AGRICULTURA = layer.feature.properties.AGRICULTURA_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_AGRICULTURA);
				var FRAC_FOLHOSAS = layer.feature.properties.FOLHOSAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_FOLHOSAS);
				var FRAC_EUCALIPTO = layer.feature.properties.EUCALIPTO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_EUCALIPTO);
				var FRAC_INVASORAS = layer.feature.properties.INVASORAS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_INVASORAS);
				var FRAC_PINHEIROBRAVO = layer.feature.properties.PINHEIRO_BRAVO_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_PINHEIROBRAVO);
				var FRAC_OUTROSPINHEIROS = layer.feature.properties.OUTROS_PINHEIROS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_OUTROSPINHEIROS);
				var FRAC_MATOS = layer.feature.properties.MATOS_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_MATOS);
				var FRAC_NAOCOMBUSTIVEL = layer.feature.properties.NAOCOMBUSTIVEL_HA/layer.feature.properties.TOTAL_HA;
				console.log(FRAC_NAOCOMBUSTIVEL);
				var LR_SLOPE = layer.feature.properties.LR_Slope;
				console.log(LR_SLOPE);
				var LR_ELEVATION = layer.feature.properties.LR_Elevation;
				console.log(LR_ELEVATION);
				//CÁLCULO DO LR
				var LR_AGRICULTURA = 0.280803;
				var LR_EUCALIPTO = 1.530489;
				var LR_PINHEIROBRAVO = 1.565563;			
				var LR_FOLHOSAS = 1.116608;
				var LR_OUTROSPINHEIROS = 0.674423;
				var LR_INVASORAS = 1.385554;
				var LR_MATOS = 2.467546;
				var LR_COS = (FRAC_AGRICULTURA*LR_AGRICULTURA)+(FRAC_FOLHOSAS*LR_FOLHOSAS)+(FRAC_EUCALIPTO*LR_EUCALIPTO)+(FRAC_INVASORAS*LR_INVASORAS)+(FRAC_PINHEIROBRAVO*LR_PINHEIROBRAVO)+(FRAC_OUTROSPINHEIROS*LR_OUTROSPINHEIROS)+(FRAC_MATOS*LR_MATOS);				
				var LR_TOTAL = (LR_SLOPE + LR_ELEVATION)/2 * LR_COS;
				console.log(LR_TOTAL);
				//CÁLCULO DO HAZARD E DO RISCO
				var HAZARD = layer.feature.properties.PROBABILIDADE*LR_TOTAL;
				var HAZARDSCALEMAX_NEW = HAZARD / 0.328681486;//Falta criar função selectmax
				layer.feature.properties.HAZARD_SCALEDMAX = HAZARDSCALEMAX_NEW;
				var INDRISCINC_NEW = (Math.pow(layer.feature.properties.HAZARD_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.ESPOSICAO_SCALEDMAX, 0.33333))*(Math.pow(layer.feature.properties.VSOCIAL_SCALEDMAX, 0.33333));
				console.log(INDRISCINC_NEW);
				console.log(layer.feature.properties.INDRISCOINC_MAX);
				var INDRISCINC_COMPARA = (INDRISCINC_NEW - layer.feature.properties.INDRISCOINC_MAX)/ layer.feature.properties.INDRISCOINC_MAX * 100;
				if (INDRISCINC_COMPARA>0) {
					alert("A simulação resulta num risco de +" +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				} else {
					alert("A simulação resulta num risco de " +Number(INDRISCINC_COMPARA).toFixed(1)+"%");
				}
				layer.feature.properties.INDRISCOINC_MAX = INDRISCINC_NEW;					
			});			
			freguesiaselLayer.addTo(map);
			map.fitBounds(freguesiaselLayer.getBounds());
			
			}
}
function setmaxarea() {
			var freguesiaSel = document.getElementById("freguesia").value;
			var agricultura_area = document.getElementById("agricultura_ha").value;
			var folhosas_area = document.getElementById("folhosas_ha").value;
			var eucalipto_area = document.getElementById("eucalipto_ha").value;
			var invasoras_area = document.getElementById("invasoras_ha").value;
			var pinheirobravo_area = document.getElementById("pinheirobravo_ha").value;
			var outrospinheiros_area = document.getElementById("outrospinheiros_ha").value;
			var matos_area = document.getElementById("matos_ha").value;
			var naocombustivel_area = document.getElementById("naocombustivel_ha").value;

			//DEFINE VALORES MÁXIMOS NOS INPUTS DAS ÁREAS

			var freguesiaselLayer = L.geoJson(freguesiasData, { 
				style: indriscoincStyle,
				onEachFeature: onEachfreguesiaSel,
				filter: function(feature) { return feature.properties.Freguesia == freguesiaSel }
			});
				
			freguesiaselLayer.eachLayer(function(layer) {  // eachLayer() is an Leaflet function to iterate over the layers/points of the map									
				var MAX_AGRICULTURA = parseFloat(layer.feature.properties.AGRICULTURA_HA);
				var input1 = document.getElementById("agricultura_ha");
				//console.log('MAX_AGRICULTURA: '+MAX_AGRICULTURA);
				input1.setAttribute("max",(MAX_AGRICULTURA).toFixed()); // set a new value;
				var MAX_FOLHOSAS = parseFloat(layer.feature.properties.FOLHOSAS_HA);
				var input2 = document.getElementById("folhosas_ha");
				input2.setAttribute("max",(MAX_FOLHOSAS).toFixed()); // set a new value;				
				var MAX_EUCALIPTO = parseFloat(layer.feature.properties.EUCALIPTO_HA);
				var input3 = document.getElementById("eucalipto_ha");
				input3.setAttribute("max",(MAX_EUCALIPTO).toFixed()); // set a new value;				
				var MAX_INVASORAS = parseFloat(layer.feature.properties.INVASORAS_HA);
				var input4 = document.getElementById("invasoras_ha");
				input4.setAttribute("max",(MAX_INVASORAS).toFixed()); // set a new value;				
				var MAX_PINHEIROBRAVO = parseFloat(layer.feature.properties.PINHEIRO_BRAVO_HA);
				var input5 = document.getElementById("pinheirobravo_ha");
				input5.setAttribute("max",(MAX_PINHEIROBRAVO).toFixed()); // set a new value;				
				var MAX_OUTROSPINHEIROS = parseFloat(layer.feature.properties.OUTROS_PINHEIROS_HA);
				var input6 = document.getElementById("outrospinheiros_ha");
				input6.setAttribute("max",(MAX_OUTROSPINHEIROS).toFixed()); // set a new value;				
				var MAX_MATOS = parseFloat(layer.feature.properties.MATOS_HA);
				var input7 = document.getElementById("matos_ha");
				input7.setAttribute("max",(MAX_MATOS).toFixed()); // set a new value;				
				var MAX_NAOCOMBUSTIVEL = parseFloat(layer.feature.properties.NAOCOMBUSTIVEL_HA);
				var input8 = document.getElementById("naocombustivel_ha");
				input8.setAttribute("max",(MAX_NAOCOMBUSTIVEL).toFixed()); // set a new value;				
			});				
}

function imposeMinMax(el){
  if(el.value != ""){
    if(parseInt(el.value) < parseInt(el.min)){
      el.value = el.min;
    }
    if(parseInt(el.value) > parseInt(el.max)){
      el.value = el.max;
    }
  }
}






