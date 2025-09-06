
function simplificarRutas(ruta){
    const pasosRuta = ruta.split('/');
    let rutaSimplificada=[];
    if(pasosRuta.length > 0){
        pasosRuta.forEach((nodo)=>{
            if(nodo === '..'){
                rutaSimplificada.pop();
            }else if(nodo === '.' || nodo === ''){}
            
            else{
                rutaSimplificada.push(nodo);
            }
        });

        return '/' + rutaSimplificada.join('/');

    }else{
        return 'Ruta no valida';
    }
}
console.log(simplificarRutas("/home/"));
console.log(simplificarRutas("/x/./y/../../z/"));
console.log(simplificarRutas("/../"));
console.log(simplificarRutas("/home//pruebas"));