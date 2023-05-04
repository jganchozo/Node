
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

const getEmpleado = (id, callback) => {
    
    const empleado = empleados.find(e => e.id === id)?.name;

    if (empleado) {
        callback(null, empleado);
        } else{
        callback(`Empleado con el id ${id} no existe`, null);
    }
    
}

const getSalary = (id, callback) => {

    const salary = salarios.find(s => s.id === id)?.salario;

    if (salary) {
        callback(null, salary);
    } else {
        callback(`Salario con el id ${id} no existe`);
    }
};

const id = 3;

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log('Error', err);
    }


    getSalary(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
    });

});



// getSalary(id, (err, salario) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(salario);
// });