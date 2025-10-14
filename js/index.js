const modal = new bootstrap.Modal(document.getElementById('miModal'));

document.getElementById('agregar_tarea').onclick = function () {
  modal.show();
  console.log("Este botón sirve para agregar una tarea");
};

/*document.getElementsByClassName('boton_borrar').onclick = function () {
    console.log("Forma 1: Este botón sirve para borrar una tarea");
};*/

var botonesBorrar = document.getElementsByClassName('boton_borrar');

for (let posicion = 0; posicion < botonesBorrar.length; posicion++){
    botonesBorrar[posicion].addEventListener("click", function(){
        var idTarea = this.dataset.id;
        console.log("Forma 1: Este botón sirve para borrar la tarea con id: ", idTarea);
    });
}

function onBorrarTarea(tarea_id){
    console.log("Forma 2: Este boton sirve para borrar la tarea con id: ", tarea_id)
};
