
// const callback = () => {
//     console.log('Hola Mundo');
// }

// setTimeout(callback, 1000);

const getUserById = (id, callback) => {

    const user = {
        id,
        name: 'Jose Manuel',
    };

    setTimeout(() => {
        callback(user);
    }, 1500);

}

getUserById(9, ({id, name}) => {
    console.log(id);
    console.log(name.toUpperCase());
});