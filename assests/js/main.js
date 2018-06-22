window.onload = () => {
  agenda();
}

function agenda() {
  //este es el id de nuestro boton de html
  const btn_add = document.getElementById('add');
  //acá desarrollaremos nuestro evento click
  btn_add.addEventListener('click', () => {
    //crear input, le daremos atributos y clase
    const input = document.createElement('input');
    input.setAttribute('type', 'texto');
    input.setAttribute('placeholder', 'Título de mi tarea');
    input.classList.add('class', 'form-group');

    //crear un boton le daremos clase y escribir texto
    const boton = document.createElement('button');
    const text_boton = document.createTextNode('Guardar');
    boton.setAttribute('type', 'button');
    boton.classList.add('btn', 'btn-success');


    const container_input = document.getElementById('cont_input');
    container_input.appendChild(input);
    boton.appendChild(text_boton);
    container_input.appendChild(boton);

    boton.addEventListener('click', () => {
      let tarea = document.getElementsByClassName('form-group')[0].value;
      document.getElementsByClassName('form-group')[0].value = '';
      //crear contenedor de mi lista de tareas
      const container_lista = document.createElement('div');
      container_lista.classList.add('col', 'fondo_lista');
      const div_tarea = document.createElement('div');
      div_tarea.classList.add('fondo_tareas');
      //crear un h3 que será mi título
      const div_titulo = document.createElement('h3');
      //creo un nodotexto que será el texto que escribirá el usuario y ya lo tengo guardado en mi let tarea
      let titulo_text = document.createTextNode(tarea);
      //Crear a añadirle un texto
      const enlace = document.createElement('a');
      const text_enlace = document.createTextNode('Añadir nueva tarea');
      //rescato id del container html donde imprimiré mi lista
      const container_tareas = document.getElementById('tareas');
      //asigno padres....
      div_titulo.appendChild(titulo_text);
      container_lista.appendChild(div_titulo);
      div_tarea.appendChild(container_lista);
      container_tareas.appendChild(div_tarea);
      enlace.appendChild(text_enlace);
      div_tarea.appendChild(enlace);
    })

  });

}