const infoSuperheroes = require("./Enunciado");
const { mostrarInformacionSuperheroes } = require("./main");

describe('test to probe if the infoSuperheroes is well formed', () => {
    test('Iron Man exists in infoSuperheroes', () => {
        expect(infoSuperheroes['Iron Man']).toBeDefined();
    });
});

describe('test to probe if the function mostrarInformacionSuperheroes works fine', () => {
    test('prints correct info for Iron Man', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        mostrarInformacionSuperheroes('Iron Man');
        expect(consoleSpy).toHaveBeenCalledWith('Iron Man\n');
        expect(consoleSpy).toHaveBeenCalledWith('Nombre real: Tony Stark');
        expect(consoleSpy).toHaveBeenCalledWith('Poderes: Tecnologia avanzada, Movilidad aérea');
        expect(consoleSpy).toHaveBeenCalledWith('Equipo: Los vengadores\n');
        consoleSpy.mockRestore();
    });
    
    test('prints correct info for Iron Man, Thor and Hulk', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        mostrarInformacionSuperheroes(['Iron Man','Thor','Hulk']);
        
        expect(consoleSpy).toHaveBeenCalledWith('Iron Man\n');
        expect(consoleSpy).toHaveBeenCalledWith('Nombre real: Tony Stark');
        expect(consoleSpy).toHaveBeenCalledWith('Poderes: Tecnologia avanzada, Movilidad aérea');
        expect(consoleSpy).toHaveBeenCalledWith('Equipo: Los vengadores\n');

        expect(consoleSpy).toHaveBeenCalledWith('Thor\n');
        expect(consoleSpy).toHaveBeenCalledWith('Nombre real: Thor Odinson');
        expect(consoleSpy).toHaveBeenCalledWith('Poderes: Mjolnir, Viento y trueno');
        expect(consoleSpy).toHaveBeenCalledWith('Equipo: Los vengadores\n');

        expect(consoleSpy).toHaveBeenCalledWith('Hulk\n');
        expect(consoleSpy).toHaveBeenCalledWith('Nombre real: Bruce Banner');
        expect(consoleSpy).toHaveBeenCalledWith('Poderes: Fuerza sobrehumana, Invulnerabilidad');
        expect(consoleSpy).toHaveBeenCalledWith('Equipo: Los vengadores\n');

        consoleSpy.mockRestore();
    });

    test('prints correct info for Iron Man, Mario and Hulk', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        mostrarInformacionSuperheroes(['Iron Man','Mario','Hulk']);
        
        expect(consoleSpy).toHaveBeenCalledWith('Iron Man\n');
        expect(consoleSpy).toHaveBeenCalledWith('Nombre real: Tony Stark');
        expect(consoleSpy).toHaveBeenCalledWith('Poderes: Tecnologia avanzada, Movilidad aérea');
        expect(consoleSpy).toHaveBeenCalledWith('Equipo: Los vengadores\n');

        expect(consoleSpy).toHaveBeenCalledWith('El superheroe Mario no existe\n');

        expect(consoleSpy).toHaveBeenCalledWith('Hulk\n');
        expect(consoleSpy).toHaveBeenCalledWith('Nombre real: Bruce Banner');
        expect(consoleSpy).toHaveBeenCalledWith('Poderes: Fuerza sobrehumana, Invulnerabilidad');
        expect(consoleSpy).toHaveBeenCalledWith('Equipo: Los vengadores\n');

        consoleSpy.mockRestore();
    });

    test('prints error for unknown superhero', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        mostrarInformacionSuperheroes('Batman');
        expect(consoleSpy).toHaveBeenCalledWith('El superheroe Batman no existe\n');
        consoleSpy.mockRestore();
    });

    test('prints error for null superhero', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        mostrarInformacionSuperheroes(null);
        expect(consoleSpy).toHaveBeenCalledWith('El superheroe null no existe\n');
        consoleSpy.mockRestore();
    });

    test('prints error for undefined superhero', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        mostrarInformacionSuperheroes(undefined);
        expect(consoleSpy).toHaveBeenCalledWith('El superheroe undefined no existe\n');
        consoleSpy.mockRestore();
    });

    test('prints error for  superhero', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        mostrarInformacionSuperheroes('');
        expect(consoleSpy).toHaveBeenCalledWith('El superheroe  no existe\n');
        consoleSpy.mockRestore();
    });
});














