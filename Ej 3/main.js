const MESES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/***
    Precondicion:
    La fecha 1 debe de ser mayor que la fecha 2
***/

function tiempoEntreFechas(fecha1, fecha2) {
    let f1 = fecha1.split(" ");
    let f2 = fecha2.split(" ");
    let dia1 = Number(f1[1].replace(",", ""));
    let dia2 = Number(f2[1].replace(",", ""));
    let mes1 = MESES.indexOf(f1[0]);
    let mes2 = MESES.indexOf(f2[0]);
    let año1 = Number(f1[2]);
    let año2 = Number(f2[2]);

    if(mes1 === -1 || mes2 === -1){
        throw new Error("El mes no existe");
    }

    if(dia1 < 1 || dia1 > 31 || dia2 < 1 || dia2 > 31){
        throw new Error("El dia no existe");
    }

    let diasdiferencia = (año2 - año1) * 365 + (mes2 - mes1) * 30 + (dia2 - dia1);

    return diasdiferencia;
}

module.exports = {tiempoEntreFechas};