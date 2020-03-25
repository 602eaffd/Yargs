/* CREAR TABLA DE MULTIPLICACION EN TXT */
/* const fs = require('express'); */
/* const fs = require('./fs'); */


/* Un require en el sistema */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
/* Paquete descargado/imlpementado */
const argv = require('yargs')
    /* Configurar los comandos */
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    /* Configurar los comandos */
    .command('crear', 'Genera un txt con la tabla del multiplcar (base y límite)', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}