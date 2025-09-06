
function simplificarRutas(ruta){
    if(ruta){
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
}

module.exports={simplificarRutas}