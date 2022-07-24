const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!!'), 2000)
            : reject(new Error('Error!'));
    });
}

const AnotherFn = async () => {
    const someFn = await fnAsync();
    console.log(someFn);
    console.log('Hello')
}

console.log('Before');
AnotherFn();
console.log('After');