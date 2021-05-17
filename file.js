const fibonacci = function (num) {
    
    if (num <= 0){
        return "no";
    }

    let a = 0;
    let b = 0;

    for(i = 1; i < num; i++){
        const temp = b;
        b = a + b;
        a = temp; 
    }

    return b; 
};

module.exports = fibonacci
