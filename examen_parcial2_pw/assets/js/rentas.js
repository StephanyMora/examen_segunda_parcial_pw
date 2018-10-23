var fechaDeRenta = document.getElementById("peliRentada")//tomo el elemento html que tendrá la fecha de renta
fechaDeRenta.innerHTML = new Date()//asigno una fecha de prueba
var dia = new Date(fechaDeRenta.innerHTML).getDate()
var mes = new Date(fechaDeRenta.innerHTML).getMonth() + 1
var anio = new Date(fechaDeRenta.innerHTML).getFullYear()
fechaDeRenta.textContent = dia + "/" + mes + "/" + anio
//var fechaInicial = new Date(fechaDeRenta.innerHTML).getDate()//tomo el día de la fecha asignada (29)
//fechaDeRenta.getDate()//tomo la fecha del día en que se ejecuta la función   
var fechaDevolucion = dia + 10
console.log(dia)
console.log(fechaDevolucion)    
var diasRestantes =  fechaDevolucion - dia
console.log(diasRestantes)
//console.log(fechaInicial)
//console.log(fechaActual)
var contenedorDiasRestantes = document.getElementById("importantSpan")
//console.log(mostrarDias.textContent)
if(diasRestantes == 0){
    contenedorDiasRestantes.classList.add('badge-warning')
    contenedorDiasRestantes.textContent = diasRestantes
}
else if(diasRestantes > 0 && diasRestantes <= 10){
    contenedorDiasRestantes.classList.add('badge-primary')
    contenedorDiasRestantes.textContent = diasRestantes
}
else{
    contenedorDiasRestantes.classList.add('badge-danger')
    contenedorDiasRestantes.textContent = 'DIAS SOBREPASADOS'
}

/*function calcularDiasRestantes(){//calculo la diferencia de días entre ambas fechas
    var fechaDeRenta = document.getElementById("peliRentada")//tomo el elemento html que tendrá la fecha de renta
    fechaDeRenta.innerHTML = new Date("07/29/1995")//asigno una fecha de prueba
    var fechaActual = new Date()//tomo la fecha del día en que se ejecuta la función   
    var diasRestantes = fechaDeRenta.getDate() - fechaActual.getDate()
    var fechaTotal = document.getElementById("diasRestantes")
    fechaTotal.textContent = diasRestantes/24
}*/

//mando la diferencia de días 