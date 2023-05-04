const empleados = [
    {
        id: 1,
        name: 'Jose'
    },
    {
        id: 2,
        name: 'Manuel'
    },
    {
        id: 3,
        name: 'Hizel'
    },

];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },

];


const getEmpleadoAsync = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.name;

        empleado && resolve(empleado);
        !empleado && reject(`No existe empleado con el id ${id}`);

    });
};

const getSalario = () => {

    return new Promise((resolve, reject) => {

        const salary = salarios.find(s => s.id === id)?.salario;

        salary && resolve(salary);
        !salary && reject(`No existe el salario con el id ${id}`);

    });
}

const id = 3;

// getEmpleado(id)
//     .then(empleado => {
//         console.log(empleado);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// getSalario(id).then(salario => {
//     console.log(salario);
// }).catch(err => {
//     console.error(err);
// });

let nombre;

getEmpleadoAsync(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El empleado: ${nombre} tiene un salario de: ${salario}`))
    .catch(err => console.error(err));


// const getResult = async (id) => {

//     try {

//         const empleado = await getEmpleadoAsync(id);
//         //console.log('Async', empleado);

//         if (empleado) {
//             const salario = await getSalario(id);
//             console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
//         }

//     } catch (error) {
//         console.log(error);
//     }

// } 

// getResult(id);