//dispara cuando el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById("darkModeOn");
    
    //verifica el valor almacenado en LocalStorage y mira si está activado
    if(localStorage.getItem('darkMode') === 'true') {
        //si está activo, se añade la clase "dark-theme" al cuerpo de la página
        document.body.classList.add("dark-theme");
        //se marca el checkbox activado
        checkbox.checked = true;
    }

    //añado un eventlistener al checkbox para escuchar cambios en el estado (activado/desactivado)
    checkbox.addEventListener("change", function() {
        //si el modo oscuro está activo, se añade la clase, si está desctivado se elimina
        document.body.classList.toggle("dark-theme");

        //guardar el estado del modo oscuro
        localStorage.setItem('darkMode', checkbox.checked);
    });
});
