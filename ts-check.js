// @ts-check
let x = 54;

x = '54';

/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function add(x, y) {
    return x * y;
}

add(120, "30");


// function pleaseWait() {
//     return Promise.resolve(3)
//         .then(() => Promise.resolve(2))
//         .then(() => Promise.resolve(1))
//         .catch(err => console.log(err));
// }

async function pleaseWait() {
    try {
        await Promise.resolve(3);
        await Promise.resolve(2);
        return await Promise.resolve(1);
    }
    catch (err) {
        return console.log(err);
    }
}