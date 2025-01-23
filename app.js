let amigos = [];
let indice = 0;
let amigoAleatorio;

// agregar los nombre a la lista y verificar que el campo no este vacio  
function agregarAmigo (){
    let nombre = document.getElementById('amigo').value;
    if(nombre != ''){
        amigos.push(nombre);
        agregarListaHtml();
        limpiar();
    }else{
        alert('El campo está vacio');
    }
    agregarListaHtml();
    
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const lista = document.getElementById('listaAmigos');
    if(amigos.length == 0){
        return;
    }else{
        resultado.innerHTML = '';
        lista.innerHTML = '';
        indice = Math.floor(Math.random()*amigos.length);
        amigoAleatorio = amigos[indice];
        const li = document.createElement('li');
        li.textContent = `El amigo seleccionado es: ${amigoAleatorio}`;
        resultado.appendChild(li);
        
    }
    
}

// funcion para agregar un amigo a un li 
function agregarListaHtml(){
    const lista = document.getElementById('listaAmigos');

    // limpia la lista de li
    lista.innerHTML = '';

    // recorremos la lista , asignamo el nombre a un li y creamo el li 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    
}
// limpia la caja de texto 
function limpiar(){
    document.getElementById('amigo').value = '';
}

