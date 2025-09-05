const infoSuperheroes = require("./Enunciado.js");



function mostrarInformacionSuperheroes(superheroes){
    const lista = (Array.isArray(superheroes)) ? superheroes : [superheroes];

    lista.forEach((nombre) => {
        if(infoSuperheroes[nombre]){
            console.log(`${nombre}\n`);
            console.log(`Nombre real: ${infoSuperheroes[nombre].nombreReal}`);
            console.log(`Poderes: ${infoSuperheroes[nombre].poderes.join(', ')}`);
            console.log(`Equipo: ${infoSuperheroes[nombre].equipo}\n`);
        }else{
            console.log(`El superheroe ${nombre} no existe\n`);
        }
    });
}

mostrarInformacionSuperheroes(undefined)

module.exports = {mostrarInformacionSuperheroes};


