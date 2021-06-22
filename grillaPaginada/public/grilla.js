function crearGrilla(idTabla, datosTabla, cantRxPag,titulosColumnas) {
    let numeroPagina = 0
    let cortesPagina = []

    $("#" + idTabla).append("<thead id='thead'><tr id='titulosColumnas'></tr></thead>")

    if(titulosColumnas == undefined || titulosColumnas == null){

    	 var titulosColumnas = Object.keys(datosTabla[0])
    }
   
    for (i = 0; i < titulosColumnas.length; i++) {

        $("#titulosColumnas").append("<th scope='col'>" + titulosColumnas[i] + "</th>")

    }

    $("#" + idTabla).append("<tbody id='bodyTabla'></tbody>")

    for (i = 0; i < datosTabla.length; i++) {

        if ((i + 1) % cantRxPag == 0 && i != 0) {

            cortesPagina.push(i + 1)
        }

        if (datosTabla.length == (i + 1)) {

            if (datosTabla.length % cantRxPag != 0) {

                cortesPagina.push(Math.ceil(i + 1))

            }
        }
         
        $("#bodyTabla").append("<tr id='fila" + i + "'></tbody>")
        let nombreCleda = Object.keys(datosTabla[i])
        let datosFila = Object.values(datosTabla[i])

        for (e = 0; e < datosFila.length; e++) {

            $("#fila" + i).append("<th scope='row' class=" + nombreCleda[e] + ">" + datosFila[e] + "</th>")

        }

        if (i < cantRxPag) {

            $("#fila" + i).css("display", "table-row")
        } else {

            $("#fila" + i).css("display", "none")
        }

    }

    $("body").append('<nav><ul id="paginacion" class="pagination"></ul></nav>')
    $("#paginacion").html('<li class="page-item"><a class="page-link" id="anterior"><<</a></li>')
    if (cortesPagina.length > 10) {

        $("#paginacion").append('<li class="page-item"><a class="page-link selPage" id="botonPagina1">1</a></li>')
        $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina2">2</a></li>')
        $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina3">3</a></li>')
        $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina4">4</a></li>')
        $("#paginacion").append('<li id="puntos" class="page-item"><a class="page-link">...</a></li>')
        $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length - 3) + '">' + (cortesPagina.length - 3) + '</a></li>')
        $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length - 2) + '">' + (cortesPagina.length - 2) + '</a></li>')
        $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length - 1) + '">' + (cortesPagina.length - 1) + '</a></li>')
        $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length) + '">' + (cortesPagina.length) + '</a></li>')
        $("#anterior").addClass("disabled")

        
        let cantidadDatos = datosTabla.length
        let datoInicial4 = cortesPagina[cortesPagina.length - 5]
        let datoFinal4 = datoInicial4 + cantRxPag - 1
        let nroBoton4 = cortesPagina.length - 3
        let datoInicial3 = cortesPagina[cortesPagina.length - 4]
        let datoFinal3 = datoInicial3 + cantRxPag - 1
        let nroBoton3 = cortesPagina.length - 2
        let datoInicial2 = cortesPagina[cortesPagina.length - 3]
        let datoFinal2 = datoInicial2 + cantRxPag - 1
        let nroBoton2 = cortesPagina.length - 1
        let datoInicial1 = cortesPagina[cortesPagina.length - 2]
        let datoFinal1 = datoInicial1 + cantRxPag - 1
        let nroBoton1 = cortesPagina.length

        $("#botonPagina1").click(function() {
            
            seleccionarPagina(0, cantRxPag - 1, cantidadDatos, true, 1, datosTabla, cortesPagina, cantRxPag)
        })
        $("#botonPagina2").click(function() {
            
            seleccionarPagina(cantRxPag, (cantRxPag * 2) - 1, cantidadDatos, true, 2, datosTabla, cortesPagina, cantRxPag)
        })
        $("#botonPagina3").click(function() {
            
            seleccionarPagina((cantRxPag) * 2, (cantRxPag * 3) - 1, cantidadDatos, true, 3, datosTabla, cortesPagina, cantRxPag)
        })
        $("#botonPagina4").click(function() {
            
            seleccionarPagina((cantRxPag) * 3, (cantRxPag * 4) - 1, cantidadDatos, true, 4, datosTabla, cortesPagina, cantRxPag)
        })
        $("#botonPagina" + (cortesPagina.length - 3)).click(function() {
            
            seleccionarPagina(datoInicial4, datoFinal4, cantidadDatos, true, nroBoton4, datosTabla, cortesPagina, cantRxPag)
        })
        $("#botonPagina" + (cortesPagina.length - 2)).click(function() {
            
            seleccionarPagina(datoInicial3, datoFinal3, cantidadDatos, true, nroBoton3, datosTabla, cortesPagina, cantRxPag)
        })
        $("#botonPagina" + (cortesPagina.length - 1)).click(function() {
            
            seleccionarPagina(datoInicial2, datoFinal2, cantidadDatos, true, nroBoton2, datosTabla, cortesPagina, cantRxPag)
        })
        $("#botonPagina" + (cortesPagina.length)).click(function() {
            
            seleccionarPagina(datoInicial1, datoFinal1, cantidadDatos, true, nroBoton1, datosTabla, cortesPagina, cantRxPag)
        })

    } else {

        for (i = 0; i < cortesPagina.length; i++) {
            if (i == 0) {
                $("#paginacion").append('<li class="page-item"><a class="page-link selPage" id="botonPagina' + (i + 1) + '">' + Math.ceil(cortesPagina[i] / cantRxPag) + '</a></li>')
            }else{
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (i + 1) + '">' + Math.ceil(cortesPagina[i] / cantRxPag) + '</a></li>')
            }
            
       
          if(cortesPagina[i] == datosTabla.length){
                let datoInicial = cortesPagina[i - 1] 
               let datoFinal = cortesPagina[i] - 1
             let cantidadDatos = datosTabla.length

            $("#botonPagina" + (i + 1)).click(function() {
                sessionStorage.setItem("nroBoton",this.innerHTML)
                $(".selPage").removeClass("selPage")
                $("#botonPagina"+this.innerHTML  ).addClass("selPage")
                seleccionarPagina(datoInicial, datoFinal, cantidadDatos, false)
            })

          }else{
                let datoInicial = cortesPagina[i] - cantRxPag
               let datoFinal = cortesPagina[i] - 1
             let cantidadDatos = datosTabla.length

            $("#botonPagina" + (i + 1)).click(function() {
                sessionStorage.setItem("nroBoton",this.innerHTML)
                $(".selPage").removeClass("selPage")
                $("#botonPagina"+this.innerHTML  ).addClass("selPage")
                seleccionarPagina(datoInicial, datoFinal, cantidadDatos, false)
            })


          }
            
           
          

        }

    }
    $("#paginacion").append('<li><a class="page-link" id="siguiente">>></a></li>')
   
   if(cortesPagina.length > 10){
        let nroBoton = 1
     let datoInicial = cantRxPag - 1
     let cantidadDatos = datosTabla.length
     let datoFinal = datoInicial + cantRxPag - 1

        $("#anterior").click(function(){
             
             if(nroBoton == 1){
                 seleccionarPagina(0, cantRxPag - 1, cantidadDatos, true,1, datosTabla, cortesPagina, cantRxPag)
             }else{
                 seleccionarPagina(datoInicial - cantRxPag, datoFinal - cantRxPag, cantidadDatos, true, nroBoton - 1, datosTabla, cortesPagina, cantRxPag)
             }
      
        })
        $("#siguiente").click(function(){
            let dato = datoFinal + 1

            if( dato >= cantidadDatos){
                return
            }else if(nroBoton == 1){

                seleccionarPagina(datoInicial + 1, datoFinal + 1, cantidadDatos, true, nroBoton + 1, datosTabla, cortesPagina, cantRxPag)

            }else{
                seleccionarPagina(datoInicial + cantRxPag, datoFinal + cantRxPag, cantidadDatos, true, nroBoton + 1, datosTabla, cortesPagina, cantRxPag)
            }
            

         })

   }else{

     let nroBoton = 1
     let datoInicial = cantRxPag - 1
     let cantidadDatos = datosTabla.length
     let datoFinal = datoInicial + cantRxPag - 1
     sessionStorage.setItem("nroBoton", "1")
        $("#anterior").click(function(){
             
             if(sessionStorage.getItem("nroBoton") == "1"){
                 $("#botonPagina1").click()
             }else{
                 
                 nroBoton = parseInt(sessionStorage.getItem("nroBoton")) - 1 
                 $("#botonPagina" + nroBoton).click()

                 
             }
      
        })
        $("#siguiente").click(function(){
           let dato = datoFinal 

           if(sessionStorage.getItem("nroBoton") == 1 ){
                 
              $("#botonPagina2").click()

            }else{
               
                 nroBoton = parseInt(sessionStorage.getItem("nroBoton")) + 1 

                $("#botonPagina" + nroBoton).click()
               
            }
            

         })

   }    
  

}

function seleccionarPagina(datoInicial, datoFinal, cantidadDatos, masDeDiez, nroBoton, datosTabla, cortesPagina, cantRxPag) {
    // alert(datoInicial + " / " + datoFinal)
    
    $("#thead").css("display", "none")

    for (i = 0; i < cantidadDatos; i++) {

        if (i >= datoInicial && i <= datoFinal) {

            $("#fila" + i).css("display", "table-row")

        } else {
            $("#fila" + i).css("display", "none")
        }
    }
    $("#thead").css("display", "table-header-group")

    if (masDeDiez) {
        if (nroBoton > 4 && nroBoton + 2 < cortesPagina.length - 2) {
            $("#paginacion").html('<li class="page-item"><a class="page-link" id="anterior"><<</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link " id="botonPagina1">1</a></li>')
            $("#paginacion").append('<li id="puntos" class="page-item"><a class="page-link">...</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton - 2) + '">' + (nroBoton - 2) + '</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton - 1) + '">' + (nroBoton - 1) + '</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link selPage" id="botonPagina' + (nroBoton) + '">' + (nroBoton) + '</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton + 1) + '">' + (nroBoton + 1) + '</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton + 2) + '">' + (nroBoton + 2) + '</a></li>')
            $("#paginacion").append('<li id="puntos" class="page-item"><a class="page-link">...</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length) + '">' + (cortesPagina.length) + '</a></li>')
            $("#paginacion").append('<li><a class="page-link" id="siguiente">>></a></li>')
          
         
            let cantidadDatos = datosTabla.length
            let datoInicial1 = cortesPagina[nroBoton - 4]
            let datoFinal1 = datoInicial1 + cantRxPag - 1
            let nroBoton1 = nroBoton - 2
            let datoInicial2 = cortesPagina[nroBoton - 3]
            let datoFinal2 = datoInicial2 + cantRxPag - 1
            let nroBoton2 = nroBoton - 1
            let datoInicial3 = cortesPagina[nroBoton - 1]
            let datoFinal3 = datoInicial3 + cantRxPag - 1
            let nroBoton3 = nroBoton + 1
            let datoInicial4 = cortesPagina[nroBoton]
            let datoFinal4 = datoInicial4 + cantRxPag - 1
            let nroBoton4 = nroBoton + 2
            let datoInicial5 = cortesPagina[cortesPagina.length - 2]
            let datoFinal5 = datoInicial5 + cantRxPag - 1
            let nroBoton5 = cortesPagina.length
           

            $("#botonPagina1").click(function() {
               
               seleccionarPagina(0, cantRxPag - 1, cantidadDatos, true,1, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + nroBoton1).click(function() {
              
                seleccionarPagina(datoInicial1, datoFinal1, cantidadDatos, true, nroBoton1, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + nroBoton2).click(function() {
               
                seleccionarPagina(datoInicial2, datoFinal2, cantidadDatos, true, nroBoton2, datosTabla, cortesPagina, cantRxPag)
            })

            $("#botonPagina" + (nroBoton + 1)).click(function() {
             
                seleccionarPagina(datoInicial3, datoFinal3, cantidadDatos, true, nroBoton3, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (nroBoton + 2)).click(function() {
             
                seleccionarPagina(datoInicial4, datoFinal4, cantidadDatos, true, nroBoton4, datosTabla, cortesPagina, cantRxPag)
            })
        
            $("#botonPagina" + (cortesPagina.length)).click(function() {
                
                seleccionarPagina(datoInicial5, datoFinal5, cantidadDatos, true, nroBoton5, datosTabla, cortesPagina, cantRxPag)
            })

        } else if (nroBoton + 2 > cortesPagina.length - 3 && cantidadDatos != cortesPagina[nroBoton] && cantidadDatos != cortesPagina[nroBoton] + cortesPagina[cortesPagina.length - 1] % cantRxPag && cantidadDatos != cortesPagina[nroBoton - 1]) {

            if (nroBoton + 2 == cortesPagina.length - 2) {
                $("#paginacion").html('<li class="page-item"><a class="page-link" id="anterior"><<</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina1">1</a></li>')
                $("#paginacion").append('<li id="puntos" class="page-item"><a class="page-link">...</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton - 2) + '">' + (nroBoton - 3) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton - 1) + '">' + (nroBoton - 2) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton) + '">' + (nroBoton) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link selPage" id="botonPagina' + (nroBoton +1) + '">' + (nroBoton+1) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton + 2) + '">' + (nroBoton + 2) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton + 3) + '">' + (nroBoton + 3) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton + 4) + '">' + (nroBoton + 4) + '</a></li>')
                $("#paginacion").append('<li><a class="page-link" id="siguiente">>></a></li>')
              
            } else {

                $("#paginacion").html('<li class="page-item"><a class="page-link" id="anterior"><<</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina1">1</a></li>')
                $("#paginacion").append('<li id="puntos" class="page-item"><a class="page-link">...</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton - 3) + '">' + (nroBoton - 3) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton - 2) + '">' + (nroBoton - 2) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton - 1) + '">' + (nroBoton - 1) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton) + '">' + (nroBoton) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton+1) + '">' + (nroBoton+1) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton + 2) + '">' + (nroBoton + 2) + '</a></li>')
                $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (nroBoton + 3) + '">' + (nroBoton + 3) + '</a></li>')
                $("#paginacion").append('<li><a class="page-link" id="siguiente">>></a></li>')
                
            }

            let cantidadDatos = datosTabla.length
            let datoInicial1a = cortesPagina[nroBoton - 5]
            let datoFinal1a = datoInicial1a + cantRxPag - 1
            let nroBoton1a = nroBoton - 3
            let datoInicial1b = cortesPagina[nroBoton - 4]
            let datoFinal1b = datoInicial1b + cantRxPag - 1
            let nroBoton1b = nroBoton - 2
            let datoInicial1 = cortesPagina[nroBoton - 3]
            let datoFinal1 = datoInicial1 + cantRxPag - 1
            let nroBoton1 = nroBoton - 1
            let datoInicial2 = cortesPagina[nroBoton - 2]
            let datoFinal2 = datoInicial2 + cantRxPag - 1
            let nroBoton2 = nroBoton
            let datoInicial3 = cortesPagina[nroBoton - 1]
            let datoFinal3 = datoInicial3 + cantRxPag - 1
            let nroBoton3 = nroBoton + 1
            let datoInicial4 = cortesPagina[nroBoton]
            let datoFinal4 = datoInicial4 + cantRxPag - 1
            let nroBoton4 = nroBoton + 2
            let datoInicial5 = cortesPagina[nroBoton + 1]
            let datoFinal5 = datoInicial5 + cantRxPag - 1

            let nroBoton5 = nroBoton + 3

            $("#botonPagina1").click(function() {
               
                seleccionarPagina(0, cantRxPag - 1, cantidadDatos, true,1, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + nroBoton1a).click(function() {
             
                seleccionarPagina(datoInicial1a, datoFinal1a, cantidadDatos, true, nroBoton1a, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + nroBoton1b).click(function() {
            
                seleccionarPagina(datoInicial1b, datoFinal1b, cantidadDatos, true, nroBoton1b, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + nroBoton1).click(function() {
              
                seleccionarPagina(datoInicial1, datoFinal1, cantidadDatos, true, nroBoton1, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + nroBoton2).click(function() {
     
                seleccionarPagina(datoInicial2, datoFinal2, cantidadDatos, true, nroBoton2, datosTabla, cortesPagina, cantRxPag)
            })

            $("#botonPagina" + (nroBoton + 1)).click(function() {
   
                seleccionarPagina(datoInicial3, datoFinal3, cantidadDatos, true, nroBoton3, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (nroBoton + 2)).click(function() {
			
                seleccionarPagina(datoInicial4, datoFinal4, cantidadDatos, true, nroBoton4, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (nroBoton + 3)).click(function() {
           
               seleccionarPagina(datoInicial5, datoFinal5, cantidadDatos, true, nroBoton5, datosTabla, cortesPagina, cantRxPag)
            })

        } else if (cantidadDatos == cortesPagina[nroBoton - 1] || cantidadDatos == cortesPagina[nroBoton] + cortesPagina[cortesPagina.length - 1] % cantRxPag || nroBoton < 3) {
            $("#paginacion").html('<li class="page-item"><a class="page-link" id="anterior"><<</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina1">1</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina2">2</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina3">3</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina4">4</a></li>')
            $("#paginacion").append('<li id="puntos" class="page-item"><a class="page-link">...</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length - 3) + '">' + (cortesPagina.length - 3) + '</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length - 2) + '">' + (cortesPagina.length - 2) + '</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length - 1) + '">' + (cortesPagina.length - 1) + '</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length ) + '">' + (cortesPagina.length ) + '</a></li>')
            $("#paginacion").append('<li><a class="page-link" id="siguiente">>></a></li>')
        
            let cantidadDatos = datosTabla.length
            let datoInicial4 = cortesPagina[cortesPagina.length - 5]
            let datoFinal4 = datoInicial4 + cantRxPag - 1
            let nroBoton4 = cortesPagina.length - 3
            let datoInicial3 = cortesPagina[cortesPagina.length - 4]
            let datoFinal3 = datoInicial3 + cantRxPag - 1
            let nroBoton3 = cortesPagina.length - 2
            let datoInicial2 = cortesPagina[cortesPagina.length - 3]
            let datoFinal2 = datoInicial2 + cantRxPag - 1
            let nroBoton2 = cortesPagina.length - 1
            let datoInicial1 = cortesPagina[cortesPagina.length - 2]
            let datoFinal1 = datoInicial1 + cantRxPag - 1
            let nroBoton1 = cortesPagina.length

            $("#botonPagina1").click(function() {
               
                seleccionarPagina(0, cantRxPag - 1, cantidadDatos, true,1, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina2").click(function() {
                
                seleccionarPagina(cantRxPag, (cantRxPag * 2) - 1, cantidadDatos, true, 2, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina3").click(function() {
               
                seleccionarPagina((cantRxPag) * 2, (cantRxPag * 3) - 1, cantidadDatos, true, 3, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina4").click(function() {
         
                seleccionarPagina((cantRxPag) * 3, (cantRxPag * 4) - 1, cantidadDatos, true, 4, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (cortesPagina.length - 3)).click(function() {
             
                seleccionarPagina(datoInicial4, datoFinal4, cantidadDatos, true, nroBoton4, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (cortesPagina.length - 2)).click(function() {
          
                seleccionarPagina(datoInicial3, datoFinal3, cantidadDatos, true, nroBoton3, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (cortesPagina.length - 1)).click(function() {
        
                seleccionarPagina(datoInicial2, datoFinal2, cantidadDatos, true, nroBoton2, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (cortesPagina.length)).click(function() {
             
                seleccionarPagina(datoInicial1, datoFinal1, cantidadDatos, true, nroBoton1, datosTabla, cortesPagina, cantRxPag)
            })

        }else if(nroBoton == 3 || nroBoton == 4){
        	let datoInicial1 = cortesPagina[cortesPagina.length - 2]
            let datoFinal1 = datoInicial1 + cantRxPag - 1
            let nroBoton1 = cortesPagina.length

        	$("#paginacion").html('<li class="page-item"><a class="page-link" id="anterior"><<</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina1">1</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina2">2</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina3">3</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina4">4</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina5">5</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina6">6</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina7">7</a></li>')
            $("#paginacion").append('<li id="puntos" class="page-item"><a class="page-link">...</a></li>')
            $("#paginacion").append('<li class="page-item"><a class="page-link" id="botonPagina' + (cortesPagina.length) + '">' + (cortesPagina.length) + '</a></li>')
            $("#paginacion").append('<li><a class="page-link" id="siguiente">>></a></li>')
         
            $("#botonPagina1").click(function() {
               
                seleccionarPagina(0, cantRxPag - 1, cantidadDatos, true,1, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina2").click(function() {
                
                seleccionarPagina(cantRxPag, (cantRxPag * 2) - 1, cantidadDatos, true, 2, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina3").click(function() {
               
                seleccionarPagina((cantRxPag) * 2, (cantRxPag * 3) - 1, cantidadDatos, true, 3, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina4").click(function() {
         
                seleccionarPagina((cantRxPag) * 3, (cantRxPag * 4) - 1, cantidadDatos, true, 4, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina5").click(function() {
                
                seleccionarPagina(cantRxPag * 4, (cantRxPag * 5) - 1, cantidadDatos, true, 5, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina6").click(function() {
               
                seleccionarPagina((cantRxPag) * 5, (cantRxPag * 6) - 1, cantidadDatos, true, 6, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina7").click(function() {
         
                seleccionarPagina((cantRxPag) * 6, (cantRxPag * 7) - 1, cantidadDatos, true, 7, datosTabla, cortesPagina, cantRxPag)
            })
            $("#botonPagina" + (cortesPagina.length)).click(function() {
              
                seleccionarPagina(datoInicial1, datoFinal1, cantidadDatos, true, nroBoton1, datosTabla, cortesPagina, cantRxPag)
            })

        }

        $("#anterior").click(function(){
             
             if(nroBoton == 1){
             	seleccionarPagina(0, cantRxPag - 1, cantidadDatos, true,1, datosTabla, cortesPagina, cantRxPag)
             }else{
             	seleccionarPagina(datoInicial - cantRxPag, datoFinal - cantRxPag, cantidadDatos, true, nroBoton - 1, datosTabla, cortesPagina, cantRxPag)
             }
  	
        })
        $("#siguiente").click(function(){
            let dato = datoFinal + 1

            if( dato >= cantidadDatos){
            	return
            }else{
            	seleccionarPagina(datoInicial + cantRxPag, datoFinal + cantRxPag, cantidadDatos, true, nroBoton + 1, datosTabla, cortesPagina, cantRxPag)
            }
        	

         })

 $(".selPage").removeClass("selPage")
    $("#botonPagina" + nroBoton ).addClass("selPage")

    }
   
}

crearGrilla("tablaPrueba", datos,4)