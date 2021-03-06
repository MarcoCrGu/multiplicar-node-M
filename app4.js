const argv = require('./Config/yargs').argv;

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        /* console.log('Listar'); */
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        /* console.log('Crear'); */
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

/* console.log(argv); */