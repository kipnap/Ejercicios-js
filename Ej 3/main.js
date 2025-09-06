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

    let diasdiferencia = (año2 - año1) * 360 + (mes2 - mes1) * 30 + (dia2 - dia1);

    return diasdiferencia;
}

console.log(tiempoEntreFechas('Dec 1, 2023', 'Jab 1, 2024'));