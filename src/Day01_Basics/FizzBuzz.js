const FizzBuzz = (iteration)=>{

    for(let i=1;i<=iteration;i++){
        if(i%3 == 0 && i%5 ==0)
            console.log("FizzBuzz")
        else if(i%3 == 0 && i%5 !=0)
            console.log("Fizz")
        else if(i%3 != 0 && i%5 ==0)
            console.log("Buzz")
        else
            console.log(i)
    }

}
FizzBuzz(30);