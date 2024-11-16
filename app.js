const pelis = require('./peliculas.js');

const fs = require('fs');

// --- desafio 1 ---

    
    for (let i = 0; i < pelis.length; i++) {
        console.log(pelis[i]); 
     
}

// --- desfio opcional ---

fs.writeFileSync('mensaje.txt', ' Node.js® es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.', 'utf-8');

const mensaje = fs.readFileSync('mensaje.txt', 'utf-8');

console.log(mensaje);