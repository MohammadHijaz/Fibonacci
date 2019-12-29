function Fibonacci() {
    let a = 0;
    let b = 1;
    let c = a + b;
    let EnterdNumber = prompt("Enter you Fibonacci Number");
    for (i = 0; i < 1000; i++) {
    
    
    c = a + b;
    a = b;
    b = c;
    if (i==Number(EnterdNumber) ) {
        console.log(c);
    }
    

    }
   
    



    }


Fibonacci();