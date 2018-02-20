var square = (x) => {
    var result = x * x;
    return result; 
};

//The above function can be rewrite as below show for avoiding retuen keyword

var square = (x) => x * x;

//If only single arguments are there to pass then this can be again rewtitten as 

var square = x => x * x;

console.log(square(5));


//We cannot use 'this' keyword and 'arguments' variable inside arrow function. For this use regular functions