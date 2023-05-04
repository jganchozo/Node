
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 90,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    },
};

// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log(deadpool.getNombre());
// console.log(nombre, apellido, poder, edad);

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    
    //const { nombre, apellido, poder, edad = 0 } = heroe;

    // console.log(deadpool.getNombre());
    console.log(nombre, apellido, poder, edad);
    
}

//imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
const [, h2, h3] = heroes;

console.log(h2, h3);