const {simplificarRutas} = require("./main");

describe("the function have a correct funcionality", ()=>{
    test("the function works with path /home/",()=>{
        expect(simplificarRutas("/home/")).toBe("/home");
    })
    test("the function works with path /x/./y/../../z/",()=>{
        expect(simplificarRutas("/x/./y/../../z/")).toBe("/z");
    })
    test("the function works with path /../",()=>{
        expect(simplificarRutas("/../")).toBe("/");
    })
    test("the function works with path /home/",()=>{
        expect(simplificarRutas("/home//pruebas")).toBe("/home/pruebas");
    })
    test("the function works with path undefined",()=>{
        expect(simplificarRutas(undefined)).toBe();
    })
    test("the function works with path null",()=>{
        expect(simplificarRutas(null)).toBe();
    })
    test("the function works with path /a/b/c/../../d/", () => {
        expect(simplificarRutas("/a/b/c/../../d/")).toBe("/a/d");
    });

    test("the function works with path /a//b////c/d//", () => {
        expect(simplificarRutas("/a//b////c/d//")).toBe("/a/b/c/d");
    });

    test("the function works with path /", () => {
        expect(simplificarRutas("/")).toBe("/");
    });

    test("the function works with path /..", () => {
        expect(simplificarRutas("/..")).toBe("/");
    });

    test("the function works with path /a/./b/./c/", () => {
        expect(simplificarRutas("/a/./b/./c/")).toBe("/a/b/c");
    });

    test("the function works with path with only dots", () => {
        expect(simplificarRutas("/./././")).toBe("/");
    });

    test("the function works with path with only double dots", () => {
        expect(simplificarRutas("/../../..")).toBe("/");
    });
})