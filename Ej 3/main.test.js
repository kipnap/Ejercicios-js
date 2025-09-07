const {tiempoEntreFechas} = require("./main");

describe("tests to probe if works fine",()=>{
    test("the metod work with Dec 1, 2023, Dec 24, 2023",()=>{
        expect(tiempoEntreFechas("Dec 1, 2023", "Dec 24, 2023")).toBe(23);
    })
    test("the metod works with Dec 1, 2023, May 8, 2025",()=>{
        expect(tiempoEntreFechas("Dec 1, 2023", "May 8, 2025")).toBe(527); 
    })
    test("the metod throw an error with Dc 1, 2023, May 8, 2025",()=>{
        expect(()=>tiempoEntreFechas("Dc 1, 2023", "May 8, 2025")).toThrow("El mes no existe"); 
    })
    test("the metod throw an error with Dec 53, 2023, May -1, 2025",()=>{
        expect(()=>tiempoEntreFechas("Dec 53, 2023", "May -1, 2025")).toThrow("El dia no existe"); 
    })
});