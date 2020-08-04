/* requireds */
const fs = require('fs');
/* const fs = require('express'); */
/* const fs = require('./fs'); */

let base = 12;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
}

fs.writeFile(`Tablas/Tabla ${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`Archivo ${ base } creado correctamente`);
});