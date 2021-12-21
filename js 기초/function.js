function a(nm, lk) {
    console.log(nm + lk)
}
a("sd", "we");

var b = a;
b(20, 30);

var anonymousFunction = function (e) {

}

var arrowFunction = e => {
    console.log(e)
}

arrowFunction(50)

// return

function returnFunction(num) {
    return num * 5;
    console.log(1)
}


console.log(returnFunction(30))

function plus(qw, er) {
    return qw + er;
}
console.log(plus(plus(10, 10), plus(10, 20)))

const arrowFunctionReturn = (sa, ds) => sa + ds;

console.log(arrowFunctionReturn(50, 30))

button.addEventListener('click', () => console.log(5))