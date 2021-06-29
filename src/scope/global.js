var hello = 'Hello';
let world = 'Hello world';
const helloWorld = 'Hello world!';
console.log(hello);


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloworld = () => {
    globalvar = 'I am global';
}

helloworld();
console.log(globalvar);

const anotherFunction = () => {
    var localvar = globalvar = 'I Global';
}

anotherFunction();
console.log(globalvar);