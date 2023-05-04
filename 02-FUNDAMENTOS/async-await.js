const empleados = [
    {
        id: 1,
        name: 'Jose Manuel'
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

const id = 1;

const getInfoUsuarios = async (id) => {

    try {

        const empleado = await getEmpleadoAsync(id);
        const salario = await getSalario(id);

        return `El empleado: ${empleado} tiene un salario de: ${salario}`;

    } catch (error) {
        throw error;
    }

} 

getInfoUsuarios(id)
    .then(console.log)
    .catch(err => console.error(err));